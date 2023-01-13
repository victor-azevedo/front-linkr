import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function MenuLogout(setIsMenuOpen) {
  const navigate = useNavigate();

  function logout() {
    if (window.confirm("Deseja realmente realiza logout?")) {
      window.localStorage.removeItem("userData");
      navigate("/");
    } else setIsMenuOpen(false);
  }
  return (
    <MenuLogoutStyle>
      <span onClick={logout}>Logout</span>
    </MenuLogoutStyle>
  );
}

const MenuLogoutStyle = styled.div`
  width: 140px;
  height: 50px;
  right: 0px;
  bottom: -50px;
  background-color: #171717;
  color: #fff;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out;
  position: absolute;
  border-radius: 0 0 0 10px;
  span {
    padding: 10px;
    cursor: pointer;
  }
`;
