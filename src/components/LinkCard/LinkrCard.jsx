import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import styled from "styled-components";
import { ReactTagify } from "react-tagify";

import EditIcon from "../../assets/EditIcon.svg";
import BoxLikes from "./BoxLikes";
import BoxIconComments from "./BoxIconComments";
import BoxIconShares from "./BoxIconShares";
import RemoveIcon from "../../assets/RemoveIcon.svg";
import UserPicture from "../UserPicture";
import AskIfWantRepost from "./AskIfWantRepost";

import ModalConfirmationDelete from "../ModalConfirmationDelete";
import LinkTextEditor from "./LinkTextEditor";
import { useUserData } from "../../hooks/useUserData";
import Comments from "./Comments";

export default function LinkrCard({ card }) {
  const {
    id,
    username,
    userPictureUrl,
    link,
    text,
    linkMetadata,
    likes,
    userId,
    commentsCount,
    repostsNumber,
  } = card;

  const { userData } = useUserData();
  const [modalConfirmation, setModalConfirmation] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

  const [isTextEditable, setIsTextEditable] = useState(false);
  const [editTextInput, setEditTextInput] = useState(text);

  const [isSharing, setIsSharing] = useState(false);
  const [yesShare, setYesShare] = useState(false);

  const [showComments, setShowComments] = useState(false);
  const [commentsCountState, setCommentsCountState] = useState(commentsCount);

  const navigate = useNavigate();

  function handleCardRemoval(e) {
    e.preventDefault();
    setModalLoading(true);
    axios
      .delete(
        `${process.env.REACT_APP_BASE_URL}/linkrs/delete/${id}`,
        userData?.requestConfig
      )
      .then((res) => {
        setModalConfirmation(false);
        setModalLoading(false);
        window.location.reload();
        alert("Success");
      })
      .catch((error) => {
        console.log(error);
        setModalConfirmation(false);
        setModalLoading(false);
        alert("Error in removal");
      });
  }

  return isSharing ? (
    <AskIfWantRepost
      setIsSharing={setIsSharing}
      linkId={id}
      setYesShare={setYesShare}
    />
  ) : (
    <>
      <LinkCardStyle>
        <CardOptions>
          <UserPicture userPictureUrl={userPictureUrl} size={"60px"} />
          <BoxLikes id={id} likes={likes} />
          <BoxIconComments
            id={id}
            setShowComments={setShowComments}
            showComments={showComments}
            commentsCount={commentsCountState}
          />
          <BoxIconShares
            id={id}
            shares={repostsNumber}
            setIsSharing={setIsSharing}
            yesShare={yesShare}
            setYesShare={setYesShare}
          />
        </CardOptions>
        <div className="link-data">
          {userData?.username === username && (
            <EditionAndDeletion>
              <img
                src={EditIcon}
                alt="edit linkr icon"
                onClick={() => setIsTextEditable(!isTextEditable)}
              />
              <img
                src={RemoveIcon}
                alt="remove linkr icon"
                onClick={(e) => setModalConfirmation(true)}
              />
            </EditionAndDeletion>
          )}
          <Username onClick={() => navigate(`/user/${userId}`)}>
            {username}
          </Username>
          {isTextEditable ? (
            <LinkTextEditor
              id={id}
              setEditTextInput={setEditTextInput}
              isTextEditable={isTextEditable}
              setIsTextEditable={setIsTextEditable}
              editTextInput={editTextInput}
              text={text}
            />
          ) : (
            <ReactTagify
              colors={"white"}
              tagClicked={(tag) => navigate(`/hashtag/${tag.replace("#", "")}`)}
            >
              <Text>{editTextInput}</Text>
            </ReactTagify>
          )}
          <Link href={link} target="blank">
            <LinkTexts>
              <LinkTitle>{linkMetadata?.title}</LinkTitle>
              <LinkDescription>{linkMetadata?.description}</LinkDescription>
              <LinkUrl>{link}</LinkUrl>
            </LinkTexts>
            <LinkImage>
              <img src={linkMetadata?.image} alt="" />
            </LinkImage>
          </Link>
        </div>
        {modalConfirmation && (
          <ModalConfirmationDelete
            modalLoading={modalLoading}
            setModalConfirmation={setModalConfirmation}
            handleCardRemoval={handleCardRemoval}
          />
        )}
      </LinkCardStyle>
      {showComments && (
        <Comments
          linkId={id}
          userOwnerId={userId}
          setCommentsCountState={setCommentsCountState}
        />
      )}
    </>
  );
}

const LinkCardStyle = styled.div`
  width: 100%;
  background: #171717;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 22px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .link-data {
    position: relative;
    flex-basis: 501px;
  }
  z-index: 2;
`;

const CardOptions = styled.aside`
  min-width: 70px;
  height: 100%;
  margin-right: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .user-picture {
    width: 50px;
    height: 50px;
  }
`;

const Username = styled.p`
  color: #fff;
  font-size: 19px;
  line-height: 23px;
  font-weight: 400;
`;

const Text = styled.p`
  color: #b7b7b7;
  font-size: 17px;
  line-height: 20px;
  font-weight: 400;
  margin-top: 10px;
  word-break: break-all;
  padding: 5px;
  border-radius: 7px;
`;

const Link = styled.a`
  color: #cecece;
  display: flex;
  align-items: stretch;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  margin-top: 10px;
  text-decoration: none;
`;

const LinkTexts = styled.div`
  padding: 24px;
`;

const LinkTitle = styled.p`
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
`;
const LinkDescription = styled.p`
  color: #9b9595;
  font-size: 11px;
  line-height: 13px;
  font-weight: 400;
  margin-top: 10px;
`;
const LinkUrl = styled.p`
  font-size: 11px;
  line-height: 13.2px;
  font-weight: 400;
  margin-top: 10px;
`;
const LinkImage = styled.div`
  flex-basis: 155px;
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 0 11px 11px 0;
  }
`;
const EditionAndDeletion = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  right: 0;
  width: 40px;
  height: 20px;
`;
