import styled, { keyframes, css } from "styled-components";
import CartIcon from "../../public/assets/icon-cart.svg";
import ProfileAvatar from "../../public/assets/image-avatar.png";
import { useState } from "react";
export default function Header() {
  const [burgerMenu, setBurgerMenu] = useState<string>("invisible");

  //windows scroll
  function StopScrolling() {
    if (burgerMenu === "visible") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }
  StopScrolling();
  return (
    <>
      <Fullscreen burgermenu={burgerMenu}></Fullscreen>
      <HeaderContainer>
        <TitleAndNav>
          <BurgerMenu
            burgermenu={burgerMenu}
            onClick={() =>
              burgerMenu === "invisible"
                ? setBurgerMenu("visible")
                : setBurgerMenu("invisible")
            }
          >
            <DivOne burgermenu={burgerMenu} />{" "}
            <DivTwo burgermenu={burgerMenu} />{" "}
            <DivThree burgermenu={burgerMenu} />
            {burgerMenu === "visible" ? (
              <Navbar>
                <Box>
                  <Item>Collections</Item>
                  <Item>Men</Item>
                  <Item>Women</Item>
                  <Item>About</Item>
                  <Item>Contact</Item>
                </Box>
              </Navbar>
            ) : (
              ""
            )}
          </BurgerMenu>
          <Title>sneakers</Title>
        </TitleAndNav>
        <CartAndProfile>
          <Cart src={CartIcon} />
          <ProfileIcon src={ProfileAvatar} />
        </CartAndProfile>
      </HeaderContainer>
    </>
  );
}
const AnimationOfNavbar = keyframes`
   from {
    left: -250px;
  }
  to {
    left: 0;
  }

`;
const AnimationOfFirstDiv = keyframes`
  from {
 transform: rotate(0deg);
  }
  to{
  transform: rotate(45deg);

  }
`;
const AnimationOfThirdDiv = keyframes`
  from {
 transform: rotate(0deg);
  }
  to{
  transform: rotate(-45deg);

  }
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 19px 24px 25px;
`;

const TitleAndNav = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const BurgerMenu = styled.div<{ burgermenu: string }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 2;
  height: 27px;
  width: 27px;
  justify-content: center;
  position: ${(props) =>
    props.burgermenu === "visible" ? "absolute" : "inherit"};
`;

const DivOne = styled.div<{ burgermenu: string }>`
  width: ${(props) => (props.burgermenu === "visible" ? "27px" : "13px")};
  height: 3px;
  background-color: rgba(105, 112, 125, 1);
  animation: ${(props) =>
    props.burgermenu === "visible"
      ? css`
          ${AnimationOfFirstDiv} 0.5s ease-in-out forwards
        `
      : "none"};
  position: ${(props) =>
    props.burgermenu === "visible" ? "relative" : "inherit"};
  top: ${(props) => (props.burgermenu === "visible" ? "7px" : "")};
`;

const DivTwo = styled.div<{ burgermenu: string }>`
  width: 27px;
  height: 3px;
  background-color: rgba(105, 112, 125, 1);
  transform: ${(props) =>
    props.burgermenu === "visible" ? "rotate(-45deg)" : ""};
  display: ${(props) => (props.burgermenu === "visible" ? "none" : "block")};
`;

const DivThree = styled.div<{ burgermenu: string }>`
  width: ${(props) => (props.burgermenu === "visible" ? "27px" : "13px")};
  height: 3px;
  position: relative;
  left: ${(props) => (props.burgermenu === "visible" ? "0" : "14px")};
  background-color: rgba(105, 112, 125, 1);
  animation: ${(props) =>
    props.burgermenu === "visible"
      ? css`
          ${AnimationOfThirdDiv} 0.5s ease-in-out forwards
        `
      : ""};
`;

const Title = styled.h1``;

const CartAndProfile = styled.div`
  display: flex;
  gap: 22px;
  align-items: center;
`;

const Cart = styled.img`
  width: 22px;
`;

const ProfileIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const Navbar = styled.div`
  animation: ${AnimationOfNavbar} 0.4s linear;
  width: 250px;
  height: 100vh;
  position: fixed;
  background-color: rgba(255, 255, 255, 1);
  top: 0;
  left: 0;
  z-index: -1;
`;
const Box = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 92px 0 0 25px;
  gap: 20px;
`;
const Item = styled.li`
  list-style-type: none;
  font-size: 18px;
  color: rgba(105, 112, 125, 1);
  line-height: 26px;
`;
const Fullscreen = styled.div<{ burgermenu: string }>`
  opacity: ${(props) => (props.burgermenu === "visible" ? "0.5" : "1")};
  background-color: ${(props) =>
    props.burgermenu === "visible" ? "black" : ""};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.burgermenu === "visible" ? "100%" : "")};
  z-index: 2;
`;
