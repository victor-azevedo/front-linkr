import styled from "styled-components";
import { useAuth } from "../hooks/useAuth";
import UserPicture from "./UserPicture";
import RemoveIcon from "../assets/RemoveIcon.svg";
import EditIcon from "../assets/EditIcon.svg";

export default function LinkrCard({ username, userPictureUrl, link, text, linkMetadata }) {
    const [auth] = useAuth();

    function handleCardEdit(e) {
        e.preventDefault();
    }

    function handleCardRemoval(e) {
        e.preventDefault();
    }

    return (
        <LinkCardStyle>
            <UserPicture userPictureUrl={userPictureUrl} />
            <div className="link-data">
                {
                    /*auth?.username*/ "didi" === username && (
                        <EditionAndDeletion>
                            <img src={EditIcon} alt="edit linkr icon" onClick={handleCardEdit} />
                            <img
                                src={RemoveIcon}
                                alt="remove linkr icon"
                                onClick={handleCardRemoval}
                            />
                        </EditionAndDeletion>
                    )
                }
                <Username>{username}</Username>
                <Text>{text}</Text>
                <Link href={link} target="blank">
                    <LinkTexts>
                        <LinkTitle>{linkMetadata.title}</LinkTitle>
                        <LinkDescription>{linkMetadata.description}</LinkDescription>
                        <LinkUrl>{link}</LinkUrl>
                    </LinkTexts>
                    <LinkImage>
                        <img src={linkMetadata.image} alt="" />
                    </LinkImage>
                </Link>
            </div>
        </LinkCardStyle>
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
    gap: 18px;
    .link-data {
        position: relative;
        flex-basis: 501px;
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
