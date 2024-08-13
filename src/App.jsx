import Cart from "./Components/Cart";
import Desserts from "./Components/Desserts";
import styled from "styled-components";
import CartContextProvider from "./Context/CartContext";

const StyledContainer = styled.main`
  padding: 64px 48px;
  max-width: 1270px;
  margin: auto;
  display: grid;
  gap: 20px;

  grid-template-columns: 2fr minmax(370px, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 24px 12px;
  }
`;

function App() {
  return (
    <CartContextProvider>
      <StyledContainer>
        <Desserts />
        <Cart />
      </StyledContainer>
    </CartContextProvider>
  );
}

export default App;
