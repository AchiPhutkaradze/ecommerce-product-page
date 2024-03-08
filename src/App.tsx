import Header from "./components/Header";
import Images from "./components/Images";
import { useState } from "react";
import Content from "./components/Content";
import styled from "styled-components";
function App() {
  const [quantity, setQuantity] = useState<number>(0);
  const [addToCart, setAddToCart] = useState(false);

  return (
    <>
      <Header
        quantity={quantity}
        addToCart={addToCart}
        setAddToCart={setAddToCart}
      />
      <Container>
        <Images
          quantity={quantity}
          setQuantity={setQuantity}
          setAddToCart={setAddToCart}
        />
        <Content
          quantity={quantity}
          setQuantity={setQuantity}
          setAddToCart={setAddToCart}
        />
      </Container>
    </>
  );
}

export default App;
const Container = styled.div`
  display: block;
  padding: 0;
  gap: 0;
  @media screen and (min-width: 1440px) {
    display: flex;
    padding: 0 48px;
    gap: 120px;
    position: relative;
    justify-content: center;
  }
`;
