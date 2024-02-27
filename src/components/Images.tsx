import React, { useState } from "react";
import styled from "styled-components";
import ProductOne from "../../public/assets/image-product-1.jpg";
import LeftArrow from "../../public/assets/icon-next.svg";
import MinusIcon from "../../public/assets/icon-minus.svg";
import PlusIcon from "../../public/assets/icon-plus.svg";
import CartIcon from "../../public/assets/icon-cart.svg";

export default function Images() {
  const [findImage, setFindImage] = useState<number>(0);
  return (
    <>
      <ImagesDiv>
        <Product src={ProductOne} />
        <Buttons>
          <LeftSLiderBtn>
            <img src={LeftArrow} alt="" />
          </LeftSLiderBtn>
          <RightSLiderBtn>
            {" "}
            <img src={LeftArrow} alt="" />
          </RightSLiderBtn>
        </Buttons>
      </ImagesDiv>
      <Text>
        <Company>Sneaker Company</Company>
        <LimitedEdition>Fall Limited Edition Sneakers</LimitedEdition>
        <Describe>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </Describe>
      </Text>
      <PriceDiv>
        <PriceAndSale>
          <Price>$125.00</Price>
          <Sale>50%</Sale>
        </PriceAndSale>
        <OldPrice>$250.00</OldPrice>
      </PriceDiv>
      <LastBox>
        <CountDiv>
          <Minus>
            <img src={MinusIcon} alt="" />
          </Minus>
          <Quantity>0</Quantity>
          <Plus src={PlusIcon} />
        </CountDiv>
        <AddBtn>
          <AddToCartDiv>
            <Cart src={CartIcon} />
            <AddToCart>Add to cart</AddToCart>
          </AddToCartDiv>
        </AddBtn>
      </LastBox>
    </>
  );
}
const ImagesDiv = styled.div`
  display: flex;
  align-items: center;
`;
const Product = styled.img`
  width: 100%;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  padding: 0 16px;
`;
const RightSLiderBtn = styled.button`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LeftSLiderBtn = styled.button`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  transform: rotate(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Company = styled.p`
  line-height: 14.88px;
  font-size: 12px;
  letter-spacing: 1.85px;
  color: rgba(255, 126, 27, 1);
  text-transform: uppercase;
`;
const LimitedEdition = styled.h2`
  font-size: 28px;
  line-height: 32px;
  color: rgba(29, 32, 38, 1);
  text-transform: uppercase;
`;
const Describe = styled.span`
  font-size: 15px;
  line-height: 25px;
  color: rgba(105, 112, 125, 1);
`;
const PriceDiv = styled.div`
  display: flex;
  padding: 0 24px;
  justify-content: space-between;
  align-items: center;
`;
const PriceAndSale = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
const Price = styled.h3`
  font-size: 28px;
  line-height: 35px;
`;
const Sale = styled.div`
  width: 51px;
  height: 27px;
  background-color: rgba(255, 126, 27, 1);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const OldPrice = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: rgba(182, 188, 200, 1);
`;
const CountDiv = styled.div`
  background-color: rgba(246, 248, 253, 1);
  height: 56px;
  display: flex;
  align-items: center;
  gap: 122px;
  padding-left: 24px;
`;
const Minus = styled.button``;
const Plus = styled.img``;
const Quantity = styled.p`
  font-size: 16px;
  line-height: 19.84px;
  color: rgba(29, 32, 38, 1);
`;
const LastBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 24px;
`;
const AddBtn = styled.button`
  width: 100%;
  height: 56px;
  background-color: rgba(255, 126, 27, 1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AddToCartDiv = styled.div`
  display: flex;
  gap: 7px;
`;
const Cart = styled.img``;
const AddToCart = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: white;
`;
