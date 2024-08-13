import styled from "styled-components";
import useDesserts from "../Hooks/useDesserts";
import DessertCard from "./DessertCard";

const H1 = styled.h1`
  color: var(--rose-900);
  margin-bottom: 20px;
`;

const ProductsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 20px;
  row-gap: 30px;

  @media (min-width: 375px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
`;

function Desserts() {
  const desserts = useDesserts();

  return (
    <section>
      <H1>Desserts</H1>
      <ProductsContainer>
        {desserts.map((item, index) => (
          <DessertCard dessertItem={item} key={index} />
        ))}
      </ProductsContainer>
    </section>
  );
}

export default Desserts;
