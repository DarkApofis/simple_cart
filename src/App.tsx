import {useEffect, useState} from "react";

import api from "./api";
import {
  Aside,
  Card,
  CardInfo,
  CardTitle,
  CardDesc,
  Header,
  Main,
  Section,
  Button,
  Footer,
  Div,
  AddRemoveButtons,
} from "./styles/appStyles";
import {Product, Cart} from "./types";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState(new Map());
  const [total, setTotal] = useState({
    price: 0,
    items: 0,
  });

  useEffect(() => {
    api.list().then(setProducts);
  }, []);

  function findTotal() {
    const array: Cart[] = Array.from(cart.values());
    const totalPrice = array.reduce((prev, next) => prev + next.price * next.amount, 0);
    const totalItems = array.reduce((prev, next) => prev + next.amount, 0);

    setTotal({price: totalPrice, items: totalItems});
  }

  useEffect(() => {
    findTotal();
  }, [cart]);

  function addToCart(product: Cart) {
    if (cart.has(product.id)) {
      const item = cart.get(product.id);
      const newItem = {...item, amount: item.amount + 1};

      return setCart(new Map(cart.set(product.id, newItem)));
    } else {
      setCart(new Map(cart.set(product.id, product)));
    }
  }

  function removeFromCart(product: Cart) {
    if (product.amount === 1) {
      return setCart((map) => {
        const copy = new Map(map);

        copy.delete(product.id);

        return copy;
      });
    } else {
      const item = cart.get(product.id);
      const newItem = {...item, amount: item.amount - 1};

      return setCart(new Map(cart.set(product.id, newItem)));
    }
  }

  return (
    <Main>
      <Header>Estampitiency</Header>
      <Section>
        {products.map((product) => (
          <Card key={product.id}>
            <img src={product.image} />
            <CardInfo>
              <CardTitle>{product.title}</CardTitle>
              <CardDesc>{product.description}</CardDesc>
            </CardInfo>
            {cart.has(product.id) ? (
              <Div>
                <AddRemoveButtons onClick={() => removeFromCart(cart.get(product.id))}>
                  -
                </AddRemoveButtons>
                <p>{cart.get(product.id).amount}</p>
                <AddRemoveButtons onClick={() => addToCart(cart.get(product.id))}>
                  +
                </AddRemoveButtons>
              </Div>
            ) : (
              <Button onClick={() => addToCart({...product, amount: 1})}>Agregar</Button>
            )}
          </Card>
        ))}
      </Section>
      <Aside>
        <button>
          {total.items} productos (total: ${total.price})
        </button>
      </Aside>
      <Footer>
        Encontrá la consigna de este ejercicio y otros más{" "}
        <a href="https://github.com/goncy/interview-challenges/tree/main/simple-cart">acá</a>
      </Footer>
    </Main>
  );
}

export default App;
