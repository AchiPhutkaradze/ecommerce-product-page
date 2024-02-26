import styled from "styled-components";
import CartIcon from "../../public/assets/icon-cart.svg";
import ProfileAvatar from "../../public/assets/image-avatar.png";
import { useState } from "react";
export default function Header() {
  const [burgerMenu, setBurgerMenu] = useState<string>("invisible");
  return (
    <HeaderContainer>
      <TitleAndNav>
        <BurgerMenu
          onClick={() =>
            burgerMenu === "invisible"
              ? setBurgerMenu("visible")
              : setBurgerMenu("invisible")
          }
        >
          <DivOne burgermenu={burgerMenu} /> <DivTwo burgermenu={burgerMenu} />{" "}
          <DivThree burgermenu={burgerMenu} />
          {burgerMenu === "visible" ? <Navbar></Navbar> : ""}
        </BurgerMenu>
        <Title>sneakers</Title>
      </TitleAndNav>
      <CartAndProfile>
        <Cart src={CartIcon} />
        <ProfileIcon src={ProfileAvatar} />
      </CartAndProfile>
    </HeaderContainer>
  );
}
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

const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  z-index: 2;
  height: 15px;
`;
const DivOne = styled.div<{ burgermenu: string }>`
  width: 13px;
  height: 3px;
  background-color: red;
  transform: ${(props) =>
    props.burgermenu === "visible" ? "rotate(45deg)" : ""};
`;
const DivTwo = styled.div<{ burgermenu: string }>`
  width: 27px;
  height: 3px;
  background-color: red;
  transform: ${(props) =>
    props.burgermenu === "visible" ? "rotate(90deg)" : ""};
`;
const DivThree = styled.div<{ burgermenu: string }>`
  width: 13px;
  height: 3px;
  position: relative;
  left: 14px;
  background-color: red;
  transform: ${(props) =>
    props.burgermenu === "visible" ? "rotate(45deg)" : ""};
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
  width: 250px;
  height: 100vh;
  position: fixed;
  background-color: black;
  top: 0;
  left: 0;
  z-index: -1;
`;
