import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductOne from "../../public/assets/image-product-1.jpg";
import Arrow from "../../public/assets/icon-next.svg";
import ProductTwo from "../../public/assets/image-product-2.jpg";
import ProductThree from "../../public/assets/image-product-3.jpg";
import ProductFour from "../../public/assets/image-product-4.jpg";

interface Types {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  addToCart: boolean;
  setAddToCart: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Images(props: Types) {
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

  resetNumber();
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
    </>
  );
}
const ImagesDiv = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 1440px) {
    margin-top: 90px;
    position: relative;
  }
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
