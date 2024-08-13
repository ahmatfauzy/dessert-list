import styled from "styled-components";
import Modal from "../UI/Modal";
import CartItemDetails, { ModalCard } from "./CartItemDetails";
import { useCartContext } from "../Context/CartContext";
import CartResume from "./CartResume";
import ConfirmButton from "../UI/ConfirmButton";

const H1 = styled.h1`
  color: var(--rose-900);
  margin-bottom: 4px;
`;

const P = styled.p`
  color: var(--rose-400);
  font-size: 14px;
`;

const Img = styled.img`
  width: 32px;
  flex-grow: 0;
  flex-shrink: 0;
`;

const Aside = styled.aside`
  background-color: var(--rose-50);
  padding: 12px;
  border-radius: 12px;
`;

function ConfirmationModal({ children }) {
  const { cart, resetCart } = useCartContext();
  return (
    <Modal>
      <Modal.Open>{children}</Modal.Open>

      <Modal.Window>
        <Modal.Icon>
          <Img src="assets/images/icon-order-confirmed.svg" alt="icon-order-confirmed" />
        </Modal.Icon>
        <div>
          <Modal.Title>
            <H1>Order Confirmed</H1>
          </Modal.Title>
          <Modal.Description>
            <P>We hope you enjoy your food!</P>
          </Modal.Description>
        </div>
        <Aside>
          {cart.map((item, key) => (
            <ModalCard key={key} cartItem={item} />
          ))}
          <CartResume />
        </Aside>
        <Modal.Confirm>
          <ConfirmButton clickHandler={resetCart}>Start New Order</ConfirmButton>
        </Modal.Confirm>
      </Modal.Window>
    </Modal>
  );
}

export default ConfirmationModal;
