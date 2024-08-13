import styled from "styled-components";

const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 12px;
  border-radius: 4px;
  background-color: var(--rose-100);
  color: var(--rose-900);
  gap: 4px;
`;

const Strong = styled.span`
  font-weight: 600;
`;

function NeutralCarbon() {
  return (
    <Span>
      <span>
        <img src="assets/images/icon-carbon-neutral.svg" alt="icon-carbon-neutral" />
      </span>{" "}
      This is a <Strong as={"strong"}>carbon-neutral</Strong> delivery
    </Span>
  );
}

export default NeutralCarbon;
