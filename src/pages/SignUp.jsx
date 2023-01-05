import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function SignUp(props) {
    const URL = "http://localhost:4000/signup"
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUserName] = useState('')
    const [pictureUrl, setPictureUrl] = useState('')

    const body = {
        email,
        password,
        username,
        pictureUrl
    }

    function handleSubmit(e) {
        e.preventDefault();

        setIsLoading(true);

        const promise = axios.post(URL, body)

        promise.then(() => {
            setIsLoading(false);
            navigate("/");
        });
        promise.catch((erro) => {
            console.log(erro)
            setIsLoading(false);

        });
    }

    return (
        <>
            <Container>
                <SideLeft>
                    <h1>Linkr</h1>
                    <h2>save, share and discover<br></br>
                        the best links on the web</h2>
                </SideLeft>

                <SideRight>
                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            disabled={isLoading}
                            id="email"
                            placeholder="e-mail"
                            name='email' type='email'
                            required>
                        </input>

                        <input
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            disabled={isLoading}
                            id="password"
                            placeholder="password"
                            name='password' type='password'
                            required>
                        </input>

                        <input
                            onChange={e => setUserName(e.target.value)}
                            value={username}
                            disabled={isLoading}
                            id="username"
                            placeholder="username"
                            name='username' type='text'
                            required>
                        </input>

                        <input
                            onChange={e => setPictureUrl(e.target.value)}
                            value={pictureUrl}
                            disabled={isLoading}
                            id="picture"
                            placeholder="picture url"
                            name='picture' type='text'
                            required>
                        </input>

                        <button
                            type='submit'> Sign Up </button>
                        <Link to="/">
                            <a>Switch back to log in</a>
                        </Link>
                    </form>


                </SideRight>
            </Container>
        </>
    );
}
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100vh;

   
    
`
const SideLeft = styled.div`
    width: 100%;
    background-color: #151515;
    
    color: white;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    padding-left: 144px;

    h1{
        font-size: 106px;
        font-family: 'Passion One', cursive;
        line-height: 117px;
    }

    h2{
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        font-size: 43px;
        line-height: 64px;
    }
`
const SideRight = styled.div`
    background-color: #333333;
   

    display: flex;
    flex-direction: column;
    justify-content: center;
    
   padding-left: 52px;
    padding-right: 54px;
    
    form{
        display: flex;
        flex-direction: column;
        a{
            color:white;
            font-family: 'Lato', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            text-decoration-line: underline;
            margin: 0 auto;
    }
    }
    
    input{
        width: 429px;
        height: 65px;
        border-radius: 6px;
        border:none;
        margin-bottom: 13px;
        }

        button{
            color:white;
            width: 433px;
            height: 65px;
            font-family: 'Oswald';
            font-weight: 700;
            font-size: 27px;
            line-height: 40px;
            background: #1877F2;
            border-radius: 6px; 
            border:none;
            margin-bottom: 14px;
        }
`