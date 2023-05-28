import styled from "styled-components";
import { Color, Typography } from "../../ui";

export const Navigate = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-top: 35px;
`;

export const HomeButton = styled.button`
  ${Typography.B1}
  color:${Color.Primary};
  border: none;
  text-decoration: none;
  background-color: inherit;
`;

export const Span = styled.span`
  ${Typography.B1}
  color:${Color.Primary}
`;

export const Post = styled.p`
  ${Typography.B2};
  color: ${Color.Primary};
`;

export const Details = styled.figure`
  margin-top: 20px;
`;

export const Title = styled.figcaption`
  ${Typography.H1}
  color:${Color.Primary};
`;

export const Picture = styled.img`
  width: 100%;
  height: 500px;
  border-radius: 15px;
  object-fit: cover;
  margin-top: 25px;
`;

export const DescBlock = styled.blockquote`
  width: 900px;
  padding: 0 50px;
  margin: 40px auto;
`;

export const Desc = styled.p`
  ${Typography.B1}
  color:${Color.Primary};
  margin-bottom: 40px;
`;

export const Link = styled.a`
  ${Typography.B2}
  color:${Color.Primary};
`;
export const LinkButton = styled.button`
  background-color: ${Color.Secondary_Button};
  width: 180px;
  text-align: center;
  margin: auto;
  padding: 15px;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
`;
