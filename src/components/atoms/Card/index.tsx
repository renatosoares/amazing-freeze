import React from "react";
import styled from "styled-components";

//#region CardMediaBody

type CardBodyProps = {
  children: React.ReactNode;
};

const StyledBody = styled.div`
  padding: 16px;

  h6 {
    margin-top: 0;
  }
`;

export const CardBody = ({ children }: CardBodyProps) => <StyledBody>{children}</StyledBody>;

//#endregion

//#region CardMedia

type StyledMediaProps = {
  image?: string;
};

type CardMediaProps = {
  image?: string;
};

const StyledMedia = styled.div<StyledMediaProps>`
  display: flex;
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  height: 270px;
`;

export const CardMedia = ({ image }: CardMediaProps) => (
  <StyledMedia image={image}></StyledMedia>
);

//#endregion

//#region CardMediaDescription
type CardMediaDescriptionProps = {
  children: React.ReactNode;
};

const StyledMediaDescription = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 8px 16px;
  color: #fff;
  align-self: flex-end;
  flex: 1;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;

export const CardMediaDescription = ({ children }: CardMediaDescriptionProps) => (
  <StyledMediaDescription>{children}</StyledMediaDescription>
);
//#endregion

//#region Card
type CardProps = {
  children: React.ReactNode;
};

const StyledCard = styled.div`
`;

const Card = ({ children }: CardProps) => (
  <StyledCard className="card">
    {children}
  </StyledCard>
);

export default Card;

//#endregion
