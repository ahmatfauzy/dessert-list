import styled from "styled-components";
import { BsXCircle } from "react-icons/bs";
import { useCartContext } from "../Context/CartContext";
import Card from "../UI/ProductCard";

const CloseButton = styled.button`
  outline: none;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color: var(--rose-400);
  transition: all 150ms linear;
  &:hover {
    color: var(--rose-900);
  }
`;

const Img = styled.img`
  width: 50px;
  border-radius: 8px;
`;

function CartItemDetails({ cartItem }) {
  const { dropFromCart } = useCartContext();

  return (
    <Card>
      <div>
        <Card.SubTitle>{cartItem.name}</Card.SubTitle>
        <Card.Summary>
          <Card.Quantity>{cartItem.qte}x</Card.Quantity>
          <Card.UnitPrice>Rp. {cartItem.price.toFixed(2)}</Card.UnitPrice>
          <Card.TotalPrice>Rp. {(cartItem.price * cartItem.qte).toFixed(2)}</Card.TotalPrice>
        </Card.Summary>
      </div>
      <div>
        <CloseButton onClick={() => dropFromCart(cartItem.name)}>
          <BsXCircle />
        </CloseButton>
      </div>
    </Card>
  );
}

function ModalCard({ cartItem }) {
  return (
    <Card>
      <div>
        <Card.WithThumbnail>
          <div>
            <Img src={cartItem.image.thumbnail} alt="" />
          </div>
          <div>
            <Card.SubTitle>{cartItem.name}</Card.SubTitle>
            <Card.Summary>
              <Card.Quantity>{cartItem.qte}x</Card.Quantity>
              <Card.UnitPrice>Rp. {cartItem.price.toFixed(2)}</Card.UnitPrice>
            </Card.Summary>
          </div>
        </Card.WithThumbnail>
      </div>
      <div>
        <Card.SubTitle>Rp. {(cartItem.price * cartItem.qte).toFixed(2)}</Card.SubTitle>
      </div>
    </Card>
  );
}

export default CartItemDetails;
export { ModalCard };
