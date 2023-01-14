import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SignUp(props) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");

  const body = {
    email,
    password,
    username,
    pictureUrl,
  };

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    const promise = axios.post(
      `${process.env.REACT_APP_BASE_URL}/signup`,
      body
    );

    promise.then(() => {
      navigate("/");
      setIsLoading(false);
    });
    promise.catch((erro) => {
      console.log(erro.response.data);
      if (erro.response.status === 409) {
        alert("Esse email já está cadastrado!");
      }
      setIsLoading(false);
    });
  }

  return (
    <Container>
      <SideLeft>
        <h1>Linkr</h1>
        <h2>
          save, share and discover<br></br>
          the best links on the web
        </h2>
      </SideLeft>

      <SideRight>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
            placeholder="e-mail"
            name="email"
            type="email"
            required
          ></input>

          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoading}
            placeholder="password"
            name="password"
            type="password"
            required
          ></input>

          <input
            onChange={(e) => setUserName(e.target.value)}
            value={username}
            disabled={isLoading}
            placeholder="username"
            name="username"
            type="text"
            required
          ></input>

          <input
            onChange={(e) => setPictureUrl(e.target.value)}
            value={pictureUrl}
            disabled={isLoading}
            placeholder="picture url"
            name="picture"
            type="text"
            required
          ></input>

          <button type="submit" disabled={isLoading}>
            {" "}
            Sign Up{" "}
          </button>
          <Link to="/">
            <p>Switch back to log in</p>
          </Link>
        </form>
      </SideRight>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const SideLeft = styled.div`
  width: 60%;
  height: 100%;
  background-color: #151515;

  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: 5%;
  padding-right: 15%;

  h1 {
    font-size: 106px;
    font-family: "Passion One", cursive;
    line-height: 117px;
  }

  h2 {
    font-family: "Oswald";
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
  }

  @media (max-width: 840px) {
    width: 55%;
    padding-left: 4%;
    padding-right: 12%;
    h1 {
      font-size: 86px;
      line-height: 92px;
    }

    h2 {
      font-size: 32px;
      line-height: 42px;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 40%;
    text-align: center;
    padding: 20px 10px;
    h1 {
      font-size: 76px;
      line-height: 84px;
    }

    h2 {
      font-size: 22px;
      line-height: 30px;
    }
  }
  @media (max-width: 360px) {
    height: 35%;
    h1 {
      font-size: 54px;
      line-height: 60px;
    }

    h2 {
      font-size: 18px;
      line-height: 20px;
    }
  }
`;
const SideRight = styled.div`
  width: 40%;
  height: 100%;
  background-color: #333333;

  display: flex;
  align-items: center;

  padding: 0 5%;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    a {
      color: white;
      font-family: "Lato", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      text-decoration-line: underline;
      text-align: center;
    }
  }

  input {
    width: 100%;
    height: 65px;
    border-radius: 6px;
    border: none;
    margin-bottom: 13px;
  }

  button {
    color: white;
    width: 100%;
    height: 65px;
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    background: #1877f2;
    border-radius: 6px;
    border: none;
    margin-bottom: 14px;
  }

  @media (max-width: 840px) {
    width: 45%;
    padding: 0 2.5%;
    h1 {
      font-size: 86px;
      line-height: 92px;
    }

    h2 {
      font-size: 32px;
      line-height: 42px;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    flex-grow: 2;
    padding: 20px 10%;
    form {
      a {
        font-size: 16px;
        line-height: 20px;
      }
    }

    input {
      height: 48px;
      margin-bottom: 15px;
    }

    button {
      height: 48px;
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 15px;
    }
  }
`;
