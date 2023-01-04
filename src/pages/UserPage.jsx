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

export default function UserPage(props) {
    //TODO const [auth] = useAuth();
    //TODO authenticated route? const {token} = auth;
    // if (!auth)
    const { id: userId } = useParams();
    const [cards, setCards] = useState(null);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(BASE_URL + `/user/${userId}`)
            .then(({data}) => {
                setLoading(false);
                setCards(data.userCards);
                setUserData(data.userData);
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
                {/* {userData  && <UserPicture pictureUrl={userData.pictureUrl} />}
                {userData && <p>{userData.name}'s posts</p>} */}
                <UserPicture pictureUrl={"data:image/jpeg;base64,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"}/>
                <p>{"O rei"}'s posts </p>
            </div>
            <div className="main-content">
                <div className="trending-topics-container">
                    <Trending />
                </div>
                <div className="cards-container">
                    {loading ? <h1>Loading</h1> : cards && cards.map(card => <div>{<LinkCard pictureUrl={card.pictureUrl}  />}</div>) }
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
    .user-identification{
        margin-top: 30px !important;
        width: 937px;
        height: 80px;
        margin: 0 auto;
        padding-left: 22px;
        display: flex;
        align-items: center;
        p {
            font-family: 'Oswald', sans-serif;
            color: white;
            font-weight: 700;
            font-size: 43px;
            margin-left: 18px;
        }
    }
    .main-content{
        margin: 20px auto;
        width: 937px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        .trending-topics-container{
            height: 406px;
            width: 301px;
            background-color: black;
        }
        .cards-container{
            
        }
    }
`;

const CardExample = styled.div`
    width: 611px;
    height: 276px;
    background-color: azure;
`