import styled from "styled-components";
import MinusIcon from "../../public/assets/icon-minus.svg";
import PlusIcon from "../../public/assets/icon-plus.svg";
import CartIcon from "../../public/assets/icon-cart.svg";
interface Types {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  setAddToCart: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Content(props: Types) {
  return (
    <MainDiv>
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
        <AddBtn onClick={() => props.quantity >= 1 && props.setAddToCart(true)}>
          <AddToCartDiv>
            <Cart src={CartIcon} />
            <AddToCart>Add to cart</AddToCart>
          </AddToCartDiv>
        </AddBtn>
      </LastBox>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: inherit;
  @media screen and (min-width: 1440px) {
    max-width: 445px;
  }
`;
const Text = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Company = styled.p`
  line-height: 14.88px;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.85px;
  color: rgba(255, 126, 27, 1);
  text-transform: uppercase;
`;
const LimitedEdition = styled.h2`
  font-size: 28px;
  line-height: 32px;
  color: rgba(29, 32, 38, 1);
  font-weight: 700;
  @media screen and (min-width: 1440px) {
    font-size: 44px;
    line-height: 48px;
  }
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
  @media screen and (min-width: 1440px) {
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }
`;
const PriceAndSale = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
const Price = styled.h3`
  font-size: 28px;
  line-height: 35px;
  font-weight: 700;
`;
const Sale = styled.div`
  width: 51px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 126, 27, 1);
  border-radius: 8px;
  background-color: #ffeee2;
  line-height: 20px;
  font-size: 16px;
  font-weight: 700;
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
  @media screen and (min-width: 1440px) {
    width: 157px;
  }
`;
const Minus = styled.button`
  background-color: rgba(246, 248, 253, 1);
  @media screen and (min-width: 1440px) {
    cursor: pointer;
  }
`;
const Plus = styled.img`
  @media screen and (min-width: 1440px) {
    cursor: pointer;
  }
`;
const Quantity = styled.p`
  font-size: 16px;
  line-height: 19.84px;
  color: rgba(29, 32, 38, 1);
  font-weight: 700;
`;
const LastBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 24px;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;
const AddBtn = styled.button`
  width: 100%;
  height: 56px;
  background-color: rgba(255, 126, 27, 1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1440px) {
    width: 272px;
    cursor: pointer;
  }
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
  font-weight: 700;
`;
