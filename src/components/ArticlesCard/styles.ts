import styled from "styled-components";
import { Color, Typography } from "ui";

export const ArticlesElement = styled.li`
  transition: all 0.2s ease-in-out;
  background-color: ${Color.Primary_BG};
  border-radius: 20px;
  &:hover {
    box-shadow: 0 0 20px rgb(0 0 0 / 15%), 0 0px 20px rgb(0 0 0 / 15%);
  }
`;

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
  filter: brightness(0.6);
  transition: filter 0.2s ease-in-out;
  &:hover {
    filter: brightness(1);
  }
`;

export const FigCaption = styled.figcaption`
  background-color: ${Color.Secondary};
  padding: 30px 20px 30px 20px;
  border-radius: 0 0 15px 15px;
  height: 130px;
`;

export const FigureDisc = styled.p`
  display: block;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
  ${Typography.H3}
  color: ${Color.Primary};
`;
export const FigureDate = styled.p`
  ${Typography.B2}
  color: #828687;
  margin-bottom: 10px;
`;
