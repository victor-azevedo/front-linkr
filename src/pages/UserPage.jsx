import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header.jsx";
import Trending from "../components/Trending";
import { useAuth } from "../hooks/useAuth.jsx";

export default function UserPage(props) {
    //TODO const [auth] = useAuth();
    //TODO authenticated route? const {token} = auth;
    // if (!auth)
    const { id: userId } = useParams();
    const [cards, setCards] = useState(null);
    const [loading, setLoading] = useState(false);
    const URL = "";

    useEffect(() => {
        setLoading(true);
        axios
            .get(URL + `/user/${userId}`)
            .then(({ data: userCards }) => {
                setLoading(false);
                setCards(userCards);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    });

    return (
        <StyledUserPage>
            <Header />
            <div>
                <Trending />
            </div>
            {loading ? <h1>Loading</h1> : cards}
        </StyledUserPage>
    );
}

const StyledUserPage = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #333333;
`;
