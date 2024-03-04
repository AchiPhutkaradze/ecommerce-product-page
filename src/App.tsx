import Header from "./components/Header";
import Images from "./components/Images";
import { useState } from "react";
import Content from "./components/Content";
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
    </>
  );
}

export default App;
