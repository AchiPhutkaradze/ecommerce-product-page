import Header from "./components/Header";
import Content from "./components/Content";
import { useState } from "react";
function App() {
  const [quantity, setQuantity] = useState<number>(0);
  const [addToCart, setAddToCart] = useState(false);

  return (
    <>
      <Header
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
    </>
  );
}

export default App;
