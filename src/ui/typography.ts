import { css } from "styled-components";
import { Media } from ".";

class TypographyHeading {
  H1 = css`
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 56px;
    line-height: 80px;
    ${Media.SM} {
      font-size: 32px;
      line-height: 48px;
    }
  `;
  H2 = css`
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    ${Media.SM} {
      font-size: 24px;
      line-height: 36px;
    }
  `;
  H3 = css`
    font-family: "Inter", sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
  `;
  S1 = css`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  `;
  B1 = css`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  `;
  B2 = css`
    font-family: "Inter", sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
  `;
}
export const Typography = new TypographyHeading();
