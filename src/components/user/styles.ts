import styled from "styled-components";
import { Color, Typography } from "../../ui";

export const StyledUserProfile = styled.div`
  ${Typography.B1}
  color: ${Color.Primary}
`;
export const Image = styled.div`
  position: relative;
`;
export const ImageText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${Color.White};
`;
export const Info = styled.div`
  display: flex;
  align-items: center;
`;
export const Name = styled.p`
  margin-left: 10px;
`;

export const Btn = styled.button`
  margin-left: 10px;
  ${Typography.B1}
  color:${Color.Primary};
  border: none;
  background-color: inherit;
  &:hover {
    cursor: pointer;
    color: ${Color.Primary_Light};
  }
`;
