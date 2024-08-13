import { BsCartPlus, BsDashCircle, BsPlusCircle } from "react-icons/bs";

import styled from "styled-components";
import { useCartContext } from "../Context/CartContext";

const ProductImg = styled.img`
  width: 100%;
  border-radius: 12px;

  @media (min-width: 650px) {
    aspect-ratio: 1 / 1;
  }
`;

const ImageHolder = styled.div`
  margin-bottom: 30px;
  position: relative;
`;

const CartControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: max-content;
  min-width: 164px;
  position: absolute;
  z-index: 99;
  bottom: -14px;
  left: 50%;
  transform: translate(-50%);
  padding: 12px 16px;
  border-radius: 22px;
  outline: none;
  font-weight: 500;
  background-color: var(--red);
  transition: all 150ms linear;
`;

const DessertCount = styled.span`
  color: #fff;
`;

const ButtonControl = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 50%;
  transition: all 150ms linear;
  background-color: transparent;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    background-color: #fff;
    color: var(--red);
  }
`;

const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  width: max-content;
  position: absolute;
  z-index: 99;
  bottom: -14px;
  left: 50%;
  transform: translate(-50%);
  padding: 10px 32px;
  border-radius: 22px;
  outline: none;
  border: 1px solid var(--rose-900);
  color: var(--rose-900);
  font-weight: 500;
  background-color: #fff;
  transition: all 150ms linear;
  cursor: pointer;
  &:hover {
    color: var(--red);
    border: 1px solid var(--red);
  }
`;

const Category = styled.span`
  color: var(--rose-400);
`;

const Title = styled.h2`
  font-size: 20px;
  color: var(--rose-900);
`;

const Price = styled.span`
  color: var(--red);
  font-weight: 600;
  font-size: 18px;
`;

const Icon = styled.span`
  font-size: 18px;
`;

function DessertCard({ dessertItem }) {
  const { cart, addToCart, increment, decrement, dropFromCart } = useCartContext();
  const dessertSelected = cart.find((item) => item.name === dessertItem.name);
  return (
    <article key={dessertItem.name}>
      <ImageHolder>
        {/* <ProductImg src={`${dessertItem.image.desktop}`} alt={dessertItem.name} /> */}

        <picture>
          <source media="(min-width:979px)" srcSet={dessertItem.image.desktop} />
          <source media="(min-width:650px)" srcSet={dessertItem.image.tablet} />
          <source media="(min-width:480px)" srcSet={dessertItem.image.mobile} />
          <ProductImg src={dessertItem.image.mobile} alt={dessertItem.name} />
        </picture>

        {!dessertSelected ? (
          <AddToCartButton onClick={() => addToCart(dessertItem)}>
            <Icon>
              <BsCartPlus />
            </Icon>{" "}
            <span>Add to Cart</span>
          </AddToCartButton>
        ) : (
          <CartControl>
            <ButtonControl
              onClick={() => (dessertSelected.qte !== 1 ? decrement(dessertItem.name) : dropFromCart(dessertItem.name))}
            >
              <BsDashCircle />
            </ButtonControl>
            <DessertCount>{dessertSelected.qte}</DessertCount>

            <ButtonControl onClick={() => increment(dessertItem.name)}>
              <BsPlusCircle />
            </ButtonControl>
          </CartControl>
        )}
      </ImageHolder>
      <div>
        <Category>{dessertItem.category}</Category>
        <Title>{dessertItem.name}</Title>
        <Price>Rp.{dessertItem.price}</Price>
      </div>
    </article>
  );
}

export default DessertCard;
