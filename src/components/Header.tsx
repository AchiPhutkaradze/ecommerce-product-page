import styled, { keyframes, css } from "styled-components";
import CartIcon from "../../public/assets/icon-cart.svg";
import ProfileAvatar from "../../public/assets/image-avatar.png";
import cartInsideImg from "../../public/assets/image-product-1-thumbnail.jpg";
import iconTrash from "../../public/assets/icon-delete.svg";
import { useState } from "react";

interface Types {
  quantity: number;
  addToCart: boolean;
  setAddToCart: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Header(props: Types) {
  const [burgerMenu, setBurgerMenu] = useState<string>("invisible");
  const [showCartDiv, setShowCartDiv] = useState<boolean>(false);

  //windows scroll
  function StopScrolling() {
    if (burgerMenu === "visible") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }
  StopScrolling();

  // reset addToCart state
  function resetAddToCart() {
    if (props.quantity < 1) {
      props.setAddToCart(false);
    }
  }
  resetAddToCart();

  return (
    <>
      <Fullscreen burgermenu={burgerMenu}></Fullscreen>
      <HeaderContainer>
        <TitleAndNav>
          <BurgerMenu
            burgermenu={burgerMenu}
            onClick={() =>
              setBurgerMenu(
                burgerMenu === "invisible" ? "visible" : "invisible"
              )
            }
          >
            <DivOne burgermenu={burgerMenu} />{" "}
            <DivTwo burgermenu={burgerMenu} />{" "}
            <DivThree burgermenu={burgerMenu} />
          </BurgerMenu>
          {burgerMenu === "visible" && (
            <Navbar>
              <Box>
                <Item>Collections</Item>
                <Item>Men</Item>
                <Item>Women</Item>
                <Item>About</Item>
                <Item>Contact</Item>
              </Box>
            </Navbar>
          )}
          <Title>sneakers</Title>
          <NavbarDesk>
            <Box>
              <Item>Collections</Item>
              <Item>Men</Item>
              <Item>Women</Item>
              <Item>About</Item>
              <Item>Contact</Item>
            </Box>
          </NavbarDesk>
        </TitleAndNav>
        <CartAndProfile>
          <Cart
            src={CartIcon}
            onClick={() => setShowCartDiv(showCartDiv === false ? true : false)}
          />
          <ProfileIcon src={ProfileAvatar} />
          {props.quantity > 0 && props.addToCart === true && (
            <Number>{props.quantity}</Number>
          )}
          {showCartDiv && (
            <CartDiv>
              <HeaderDivInCart>
                <CartP>Cart</CartP>
                <Line />
              </HeaderDivInCart>
              {props.addToCart === false && (
                <EmptyP>Your cart is empty.</EmptyP>
              )}
              <Chosen>
                {props.addToCart && (
                  <>
                    <CartMain>
                      <OrderDesc>
                        <CartImg src={cartInsideImg} />
                        <Order>
                          Fall Limited Edition Sneakers $125.00 x{" "}
                          {props.quantity}
                          <Sum> {`${props.quantity * 125}$`}</Sum>
                        </Order>
                      </OrderDesc>
                    </CartMain>
                  </>
                )}
                {props.addToCart && (
                  <Trash
                    src={iconTrash}
                    onClick={() => props.setAddToCart(false)}
                  />
                )}
              </Chosen>
              {props.addToCart && (
                <CheckoutBtn onClick={() => props.setAddToCart(false)}>
                  Checkout
                </CheckoutBtn>
              )}
            </CartDiv>
          )}
        </CartAndProfile>
      </HeaderContainer>
    </>
  );
}
const Chosen = styled.div`
  display: flex;
  align-items: center;
`;
const Trash = styled.img`
  width: 14px;
  height: 16px;
  @media screen and (min-width: 1440px) {
    cursor: pointer;
  }
`;
const CartImg = styled.img`
  width: 50px;
  height: 50px;
`;
const CartMain = styled.div`
  padding-top: 24px;
`;
const OrderDesc = styled.div`
  display: flex;
  gap: 16px;
`;
const Order = styled.p`
  font-size: 16px;
  line-height: 26px;
`;
const Number = styled.div`
  width: 19px;
  height: 13px;
  border-radius: 50%;
  background-color: rgba(255, 126, 27, 1);
  color: white;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5px;
  left: 10px;
`;
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
  position: relative;
  @media screen and (min-width: 1440px) {
    border-bottom: 1px solid #e4e9f2;
  }
`;

const TitleAndNav = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  @media screen and (min-width: 1440px) {
    gap: 56px;
  }
`;

const BurgerMenu = styled.div<{ burgermenu: string }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 4;
  height: 27px;
  width: 27px;
  justify-content: center;
  @media screen and (min-width: 1440px) {
    display: none;
  }
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
  position: relative;
`;

const Cart = styled.img`
  width: 22px;
  @media screen and (min-width: 1440px) {
    cursor: pointer;
  }
`;

const ProfileIcon = styled.img`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 1440px) {
    cursor: pointer;
    width: 50px;
    height: 50px;
    &:hover {
      border: 1px solid #ff7e1b;
      border-radius: 50%;
    }
  }
`;

const Navbar = styled.div`
  animation: ${AnimationOfNavbar} 0.4s linear;
  width: 250px;
  height: 100vh;
  position: fixed;
  background-color: rgba(255, 255, 255, 1);
  top: 0;
  left: 0;
  z-index: 3;
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
const NavbarDesk = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;
const Box = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 92px 0 0 25px;
  gap: 20px;
  @media screen and (min-width: 1440px) {
    padding: 0;
    flex-direction: row;
    gap: 35px;
  }
`;
const Item = styled.li`
  list-style-type: none;
  font-size: 18px;
  color: #69707d;
  line-height: 26px;
  font-weight: 700;
  @media screen and (min-width: 1440px) {
    cursor: pointer;
  }
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
  z-index: 3;
`;
const CartDiv = styled.div`
  width: 360px;
  height: 256px;
  background-color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 70px;
  right: -16px;
  z-index: 2;
  border-radius: 8px;
  box-shadow: rgba(29, 32, 38, 0.5) 0px 20px 50px -20px;
  padding: 24px 24px 32px;
`;
const HeaderDivInCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
`;
const CartP = styled.p`
  font-size: 16px;
  line-height: 19.84px;
  font-weight: 700;
  color: rgba(29, 32, 38, 1);
`;
const Line = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #e4e9f2;
`;
const Sum = styled.span`
  color: black;
  font-weight: 700;
  padding-left: 10px;
`;

const CheckoutBtn = styled.button`
  width: 312px;
  height: 56px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19.84px;
  color: #ffffff;
  background-color: #ff7e1b;
  border-radius: 8px;
  margin-top: 24px;
  text-align: center;
  @media screen and (min-width: 1440px) {
    cursor: pointer;
  }
`;
const EmptyP = styled.p`
  position: absolute;
  bottom: 85px;
  left: 111px;
  line-height: 26px;
  font-size: 16px;
  font-weight: 700;
  color: #69707d;
`;
