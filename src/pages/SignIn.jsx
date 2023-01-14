import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";

import axios from "axios";
import styled from "styled-components";

import { useUserData } from "../hooks/useUserData";
import LoadingDots from "../components/LoadingDots";

export default function SignIn(props) {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUserData } = useUserData();

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    const body = {
      email,
      password,
    };

    const promise = axios.post(
      `${process.env.REACT_APP_BASE_URL}/signin`,
      body
    );

    promise.then((res) => {
      const newUserData = {
        ...decodeToken(res.data.token),
        requestConfig: {
          headers: { Authorization: `Bearer ${res.data.token}` },
        },
      };

      setUserData({
        ...newUserData,
      });

      window.localStorage.setItem("userData", JSON.stringify(newUserData));

      setIsLoading(false);
      navigate("/timeline");
    });
    promise.catch((erro) => {
      console.log(erro.response.data);
      if (erro.response.status === 401) {
        alert("Acesso negado");
      }
      setIsLoading(false);
    });
  }

  const renderButtonLabel = function () {
    return isLoading ? <LoadingDots /> : "Log In";
  };

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
        <Form onSubmit={handleSubmit} isLoading={isLoading}>
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

          <button type="submit" disabled={isLoading}>
            {renderButtonLabel()}
          </button>
          <Link to="/sign-up">First time? Create an account!</Link>
        </Form>
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

  @media (max-width: 840px) {
    width: 45%;
    padding: 0 2.5%;
  }
  @media (max-width: 600px) {
    width: 100%;
    flex-grow: 2;
    padding: 20px 10%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  opacity: ${(props) => props.isLoading && "0.25"};
  transition: opacity 0.2s;
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

  @media (max-width: 600px) {
    a {
      font-size: 16px;
      line-height: 20px;
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
