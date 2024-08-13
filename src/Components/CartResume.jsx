import styled from "styled-components";
import { useCartContext } from "../Context/CartContext";
import Card from "../UI/ProductCard";

const P = styled.p`
  padding-top: 20px;
  color: var(--rose-900);
  padding-top: 12px;
`;

const TotalPrice = styled.p`
  padding-top: 12px;
  font-size: 24px;
  font-weight: 700;
  color: var(--rose-900);
`;

function CartResume() {
  const { cart } = useCartContext();
  const total = cart.reduce((curr, next) => curr + next.price * next.qte, 0);
  return (
    <Card>
      <P>Order Total</P>
      <TotalPrice>Rp. {total}</TotalPrice>
    </Card>
  );
}

export default CartResume;
