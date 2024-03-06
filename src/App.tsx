import Header from "./components/Header";
import Images from "./components/Images";
import { useState } from "react";
import Content from "./components/Content";
import styled from "styled-components";
function App() {
  const [quantity, setQuantity] = useState<number>(0);
  const [addToCart, setAddToCart] = useState(true);

  return (
    <>
      <Header
        quantity={quantity}
        setQuantity={setQuantity}
        addToCart={addToCart}
        setAddToCart={setAddToCart}
      />
      <Container>
        <Images
          quantity={quantity}
          setQuantity={setQuantity}
          addToCart={addToCart}
          setAddToCart={setAddToCart}
        />
        <Content
          quantity={quantity}
          setQuantity={setQuantity}
          addToCart={addToCart}
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
  }
`;
