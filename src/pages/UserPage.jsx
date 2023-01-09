import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header.jsx";
import LinkCard from "../components/LinkrCard";
import Trending from "../components/Trending";
import UserPicture from "../components/UserPicture";
import { BASE_URL } from "../constants/constants.js";
import { useAuth } from "../hooks/useAuth.jsx";
import { useUserData } from "../hooks/useUserData.jsx";

export default function UserPage(props) {
    const { id: userId } = useParams();
    const [cards, setCards] = useState(null);
    const [loading, setLoading] = useState(false);
    const { userData } = useUserData();

    useEffect(() => {
        setLoading(true);
        axios
            .get(BASE_URL + `/user/${userId}`, userData.requestConfig)
            .then(({ data }) => {
                setLoading(false);
                setCards(data);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    }, []);

    return (
        <StyledUserPage>
            <Header />
            <div className="user-identification">
                {cards && (
                    <>
                        <UserPicture userPictureUrl={cards[0]?.pictureUrl} />
                        <p>{cards[0]?.username}'s posts </p>
                    </>
                )}
            </div>
            <div className="main-content">
                <div className="trending-topics-container">
                    <Trending />
                </div>
                <div className="cards-container">
                    {loading ? (
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
                                    />
                                }
                            </div>
                        ))
                    )}
                </div>
            </div>
        </StyledUserPage>
    );
}

const StyledUserPage = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #333333;
    padding-bottom: 100px;
    .user-identification {
        margin-top: 30px !important;
        width: 937px;
        height: 80px;
        margin: 0 auto;
        padding-left: 22px;
        display: flex;
        align-items: center;
        p {
            font-family: "Oswald", sans-serif;
            color: white;
            font-weight: 700;
            font-size: 43px;
            margin-left: 18px;
        }
    }
    .main-content {
        margin: 20px auto;
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
