import styled from "styled-components";
import Header from "../components/Header.jsx";
import { useAuth } from "../hooks/useAuth.jsx";


export default function UserPage(props){

    const [auth] = useAuth();

    //TODO if (!auth) 

    const {username, pictureUrl} = auth;

    return (
        <StyledUserPage>
            <Header />

        </StyledUserPage>
    );
}

const StyledUserPage = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #333333;
`