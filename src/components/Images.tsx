import { useEffect, useState } from "react";
import { styled, StyleSheetManager } from "styled-components";
import ProductOne from "../../public/assets/image-product-1.jpg";
import Arrow from "../../public/assets/icon-next.svg";
import ProductTwo from "../../public/assets/image-product-2.jpg";
import ProductThree from "../../public/assets/image-product-3.jpg";
import ProductFour from "../../public/assets/image-product-4.jpg";
import FirstSmallProduct from "../../public/assets/image-product-1-thumbnail.jpg";
import SecondSmallProduct from "../../public/assets/image-product-2-thumbnail.jpg";
import ThirdSmallProduct from "../../public/assets/image-product-3-thumbnail.jpg";
import FourthSmallProduct from "../../public/assets/image-product-4-thumbnail.jpg";
import closeIcon from "../../public/assets/icon-close.svg";

interface Types {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  setAddToCart: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Images(props: Types) {
  const [slide, setSlide] = useState<number>(1);
  const [zoomedImg, setZoomedImg] = useState<boolean>(false);
  const [lastSelectedSlideNumber, setLastSelectedSlideNumber] =
    useState<number>(1);

  //media query
  const [bigResolution, setBigResolution] = useState<boolean>(
    window.matchMedia("(min-width: 1440px)").matches
  );
  const mediaQuery = window.matchMedia("(min-width: 1440px)");
  useEffect(() => {
    const resolutionChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setBigResolution(event.matches);
    };
    mediaQuery.addListener(resolutionChange);
    resolutionChange(mediaQuery);
  }, []);

  //images
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

  //
  function StopScrolling() {
    if (zoomedImg === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }
  StopScrolling();

  return (
    <>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== "zoom"}>
        <Fullscreen zoom={zoomedImg} />
        <ImagesDiv>
          <Product
            src={
              zoomedImg === false
                ? productImages[slide - 1]
                : productImages[lastSelectedSlideNumber - 1]
            }
            onClick={() =>
              bigResolution === true
                ? (setZoomedImg(true), setLastSelectedSlideNumber(slide))
                : null
            }
          />
          {zoomedImg === true && (
            <>
              <Zoom zoom={zoomedImg}>
                <IconClose
                  src={closeIcon}
                  onClick={() => setZoomedImg(false)}
                />
                <ButtonsForZoomedImg>
                  <LeftSLiderBtn onClick={() => setSlide(slide - 1)}>
                    <img src={Arrow} alt="" />
                  </LeftSLiderBtn>
                  <RightSLiderBtn onClick={() => setSlide(slide + 1)}>
                    {" "}
                    <img src={Arrow} alt="" />
                  </RightSLiderBtn>
                </ButtonsForZoomedImg>
                <Product src={productImages[slide - 1]} />
                <SmallImages>
                  <SmallImage
                    src={FirstSmallProduct}
                    onClick={() => setSlide(1)}
                  />
                  <SmallImage
                    src={SecondSmallProduct}
                    onClick={() => setSlide(2)}
                  />
                  <SmallImage
                    src={ThirdSmallProduct}
                    onClick={() => setSlide(3)}
                  />
                  <SmallImage
                    src={FourthSmallProduct}
                    onClick={() => setSlide(4)}
                  />
                </SmallImages>
              </Zoom>
            </>
          )}{" "}
          <Buttons>
            <LeftSLiderBtn onClick={() => setSlide(slide - 1)}>
              <img src={Arrow} alt="" />
            </LeftSLiderBtn>
            <RightSLiderBtn onClick={() => setSlide(slide + 1)}>
              {" "}
              <img src={Arrow} alt="" />
            </RightSLiderBtn>
          </Buttons>
          <SmallImages>
            <SmallImage
              slide1={slide}
              src={FirstSmallProduct}
              onClick={() => setSlide(1)}
            />
            <SmallImage
              slide2={slide}
              src={SecondSmallProduct}
              onClick={() => setSlide(2)}
            />
            <SmallImage
              slide3={slide}
              src={ThirdSmallProduct}
              onClick={() => setSlide(3)}
            />
            <SmallImage
              slide4={slide}
              src={FourthSmallProduct}
              onClick={() => setSlide(4)}
            />
          </SmallImages>
        </ImagesDiv>
      </StyleSheetManager>
    </>
  );
}
const ImagesDiv = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 1440px) {
    margin-top: 90px;
    position: relative;
    flex-direction: column;
    gap: 32px;
  }
`;
const Product = styled.img`
  width: 100%;
  @media screen and (min-width: 1440px) {
    border-radius: 5%;
    cursor: zoom-in;
    width: 550px;
    height: 550px;
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  padding: 0 16px;
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
const ButtonsForZoomedImg = styled.div`
  width: 100%;
  position: absolute;
  padding: 0 16px;
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    top: 250px;
    width: 615px;
  }
`;
const RightSLiderBtn = styled.button`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1440px) {
    cursor: pointer;
  }
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
  @media screen and (min-width: 1440px) {
    cursor: pointer;
  }
`;
const SmallImages = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 31px;
  }
`;

const SmallImage = styled.img<{
  slide1?: number;
  slide2?: number;
  slide3?: number;
  slide4?: number;
}>`
  width: 88px;
  height: 88px;
  border-radius: 10%;
  @media screen and (min-width: 1440px) {
    opacity: ${(props) =>
      props.slide1 === 1 ||
      props.slide2 === 2 ||
      props.slide3 === 3 ||
      props.slide4 === 4
        ? 0.3
        : 1};
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
`;

const Zoom = styled.div<{ zoom: boolean }>`
  display: none;
  @media screen and (min-width: 1440px) {
    display: ${(props) => (props.zoom === false ? "none" : "flex")};
    flex-direction: column;
    position: absolute;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: 50px;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    z-index: 2;
    gap: 30px;
    align-items: center;
    z-index: 4;
  }
`;
const IconClose = styled.img`
  position: absolute;
  width: 1pc;
  top: -25px;
  right: 0;
  z-index: 5;
  cursor: pointer;
`;
const Fullscreen = styled.div<{ zoom: boolean }>`
  @media screen and (min-width: 1440px) {
    opacity: ${(props) => (props.zoom ? "0.5" : "1")};
    background-color: ${(props) => props.zoom && "black"};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${(props) => props.zoom && "100%"};
    z-index: 3;
  }
`;
