import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductOne from "../../public/assets/image-product-1.jpg";
import Arrow from "../../public/assets/icon-next.svg";
import MinusIcon from "../../public/assets/icon-minus.svg";
import PlusIcon from "../../public/assets/icon-plus.svg";
import CartIcon from "../../public/assets/icon-cart.svg";
import ProductTwo from "../../public/assets/image-product-2.jpg";
import ProductThree from "../../public/assets/image-product-3.jpg";
import ProductFour from "../../public/assets/image-product-4.jpg";

interface Types {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  addToCart: boolean;
  setAddToCart: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Content(props: Types) {
  const [slide, setSlide] = useState<number>(1);
  console.log(slide);

  const productImages = [ProductOne, ProductTwo, ProductThree, ProductFour];
  //reset quantity
  let resetNumber = () => {
    if (props.quantity < 0) {
      props.setQuantity(0);
    }
    if (props.quantity > 10) {
      props.setQuantity(10);
    }
  };

  //reset slide number
  useEffect(() => {
    if (slide < 1) {
      setSlide(1);
    } else if (slide > productImages.length) {
      setSlide(1);
    }
  }, [slide, productImages.length]);

  // reset addToCart state
  function resetAddToCart() {
    if (props.quantity < 1) {
      props.setAddToCart(false);
    }
  }
  resetAddToCart();
  return (
    <>
      <ImagesDiv>
        <Product src={productImages[slide - 1]} />
        <Buttons>
          <LeftSLiderBtn onClick={() => setSlide(slide - 1)}>
            <img src={Arrow} alt="" />
          </LeftSLiderBtn>
          <RightSLiderBtn onClick={() => setSlide(slide + 1)}>
            {" "}
            <img src={Arrow} alt="" />
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
            <img
              src={MinusIcon}
              onClick={() => props.setQuantity(props.quantity - 1)}
            />
          </Minus>
          <Quantity>{props.quantity}</Quantity>
          <Plus
            src={PlusIcon}
            onClick={() => props.setQuantity(props.quantity + 1)}
          />
        </CountDiv>
        <AddBtn>
          <AddToCartDiv>
            <Cart src={CartIcon} />
            <AddToCart
              onClick={() => props.quantity >= 1 && props.setAddToCart(true)}
            >
              Add to cart
            </AddToCart>
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
  text-decoration: line-through;
  color: rgba(182, 188, 200, 1);
`;
const CountDiv = styled.div`
  background-color: rgba(246, 248, 253, 1);
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
