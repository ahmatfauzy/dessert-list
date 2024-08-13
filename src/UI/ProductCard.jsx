import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 12px;
  &:not(:last-of-type) {
    border-bottom: 1px solid var(--rose-100);
  }
`;

const ItemsCount = styled.span`
  font-weight: 700;
  color: var(--red);
  margin-right: 12px;
  font-size: 14px;
`;

const H3 = styled.h3`
  color: var(--rose-900);
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
`;

const StyledUnitPrice = styled.span`
  color: var(--rose-500);
  margin-right: 10px;
  font-size: 14px;
`;

const StyledTotalPrice = styled.span`
  font-weight: 600;
  color: var(--rose-500);
  font-size: 14px;
`;

const ThumbnailHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

function Title({ children }) {
  return children;
}

function Icon({ children }) {
  return children;
}

const SubTitle = ({ children }) => <H3>{children}</H3>;
const Quantity = ({ children }) => <ItemsCount>{children}</ItemsCount>;
const UnitPrice = ({ children }) => <StyledUnitPrice>{children}</StyledUnitPrice>;
const TotalPrice = ({ children }) => <StyledTotalPrice>{children}</StyledTotalPrice>;
const Summary = ({ children }) => <div>{children}</div>;
const WithThumbnail = ({ children }) => <ThumbnailHolder>{children}</ThumbnailHolder>;

function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

Card.Title = Title;
Card.Icon = Icon;
Card.TotalPrice = TotalPrice;
Card.UnitPrice = UnitPrice;
Card.Quantity = Quantity;
Card.SubTitle = SubTitle;
Card.Summary = Summary;
Card.WithThumbnail = WithThumbnail;

export default Card;
