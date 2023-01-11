import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header.jsx";
import LinkCard from "../components/LinkrCard";
import Trending from "../components/Trending";
import UserPicture from "../components/UserPicture";
import { useUserData } from "../hooks/useUserData.jsx";

export default function UserPage(props) {
    const { userData } = useUserData();
    const navigate = useNavigate();
    if (!userData) {
        navigate("/");
    }

    const { id: userId } = useParams();
    const [cards, setCards] = useState(null);
    const [pageLoading, setPageLoading] = useState(false);
    const [followStatus, setFollowStatus] = useState(false);
    const [followLoading, setFollowLoading] = useState(false);

    useEffect(() => {
        setPageLoading(true);
        axios
            .get(process.env.REACT_APP_BASE_URL + `/user/${userId}`, userData?.requestConfig)
            .then(({ data }) => {
                setPageLoading(false);
                setCards(data);
            })
            .catch((err) => {
                setPageLoading(false);
                console.log(err);
            });
        if (!handleMyPage()) {
            setFollowLoading(true);
            axios
                .get(process.env.REACT_APP_BASE_URL + `/follows/${userId}`, userData?.requestConfig)
                .then(({ data: isFollowing }) => {
                    setFollowStatus(isFollowing);
                    setFollowLoading(false);
                })
                .catch((err) => {
                    setFollowLoading(false);
                    console.log(err);
                });
        }
        //eslint-disable-next-line
    }, [userId]);

    function handleFollow() {
        setFollowLoading(true);
        axios
            .post(
                process.env.REACT_APP_BASE_URL + `/follow/${userId}`,
                null,
                userData?.requestConfig
            )
            .then(() => {
                setFollowStatus(true);
            })
            .catch((err) => {
              alert("Could not follow user");
                console.log(err);
            });
    }

    function handleUnfollow() {
        setFollowLoading(true);
        axios
            .delete(process.env.REACT_APP_BASE_URL + `/unfollow/${userId}`, userData?.requestConfig)
            .then(() => {
                setFollowStatus(false);
                setFollowLoading(false);
            })
            .catch((err) => {
                setFollowLoading(false);
                alert("Could not unfollow user");
                console.log(err);
            });
    }

    function handleMyPage() {
        if (userData.id === Number(userId)) {
            return true;
        } else return false;
    }

    return (
        <>
            <Header />
            <StyledUserPage>
                <div className="page-top">
                    {cards && (
                        <>
                            <div className="user-identification">
                                <UserPicture userPictureUrl={cards[0]?.pictureUrl} />
                                <p>{cards[0]?.username}'s posts </p>
                            </div>
                            {!handleMyPage() &&
                                (followStatus ? (
                                    <StyledButton
                                        disabled={followLoading}
                                        onClick={handleUnfollow}
                                        followStatus={followStatus}
                                    >
                                        Unfollow
                                    </StyledButton>
                                ) : (
                                    <StyledButton
                                        disabled={followLoading}
                                        onClick={handleFollow}
                                        followStatus={followStatus}
                                    >
                                        Follow
                                    </StyledButton>
                                ))}
                        </>
                    )}
                </div>
                <div className="main-content">
                    <div className="trending-topics-container">
                        <Trending />
                    </div>
                    <div className="cards-container">
                        {pageLoading ? (
                            <h1 className="loading-screen">Loading</h1>
                        ) : (
                            cards &&
                            cards.map((card) => (
                                <div className="linkr-card">
                                    {
                                        <LinkCard
                                            key={card.id}
                                            id={card.id}
                                            username={card.username}
                                            userPictureUrl={card.pictureUrl}
                                            link={card.linkUrl}
                                            text={card.text}
                                            linkMetadata={card.linkMetadata}
                                            likes={card.likes}
                                            userId={card.userId}
                                        />
                                    }
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </StyledUserPage>
        </>
    );
}

const StyledUserPage = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #333333;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    .page-top {
        margin-top: 50px !important;
        width: 100%;
        max-width: 960px;
        height: 80px;
        margin: 0 auto;
        padding: 22px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .user-identification {
            display: flex;
            p {
                font-family: "Oswald", sans-serif;
                color: white;
                font-weight: 700;
                font-size: 43px;
                margin-left: 18px;
            }
        }
    }
    .main-content {
        margin: 50px auto;
        width: 960px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        .trending-topics-container {
            height: 406px;
            width: 301px;
        }
        .cards-container {
            width: 611px;
            .loading-screen {
                color: white;
            }
            .linkr-card {
                margin-bottom: 20px;
            }
        }
    }
`;

const StyledButton = styled.button`
    width: 112px;
    height: 31px;
    border-radius: 5px;
    font-weight: 700;
    border: none;
    background-color: ${(props) => (props.followStatus ? "#fff" : "#1877f2")};
    color: ${(props) => (props.followStatus ? "#1877f2" : "#fff")};
`;
