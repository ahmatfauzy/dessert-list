import styled from "styled-components";

const EmptyStateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
`;

const Span = styled.div`
  font-weight: 600;
  color: var(--rose-500);
`;

export default function EmptyState() {
  return (
    <EmptyStateContainer>
      <img src="assets/images/illustration-empty-cart.svg" alt="Empty Cart" />
      <Span>Your added items will appear here</Span>
    </EmptyStateContainer>
  );
}
