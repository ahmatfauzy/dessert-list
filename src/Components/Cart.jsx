import styled from "styled-components";
import { useCartContext } from "../Context/CartContext";
import CartItemDetails from "./CartItemDetails";
import CartResume from "./CartResume";
import EmptyState from "../UI/EmptyState";
import NeutralCarbon from "../UI/NeutralCarbon";
import ConfirmationModal from "./ConfirmationModal";
import ConfirmButton from "../UI/ConfirmButton";

const StyledCart = styled.section`
  background-color: #fff;
  border-radius: 12px;
  height: fit-content;
  padding: 32px 24px;
`;

const CartTitle = styled.h1`
  font-size: 24px;
  color: var(--red);
  margin-bottom: 16px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function Cart() {
  const { cart } = useCartContext();
  return (
    <StyledCart>
      <CartTitle>Your Cart ({cart.length})</CartTitle>

      {cart.length ? (
        <>
          <aside>
            {cart.map((item, key) => (
              <CartItemDetails key={key} cartItem={item} />
            ))}
            <CartResume />
          </aside>

          <Div>
            <NeutralCarbon />
            <ConfirmationModal>
              <ConfirmButton>Confirm Order</ConfirmButton>
            </ConfirmationModal>
          </Div>
        </>
      ) : (
        <EmptyState />
      )}
    </StyledCart>
  );
}

export default Cart;
