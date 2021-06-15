import styled from "styled-components";
import { Typography } from "../typography";

export const Heading = styled(Typography)`
  font-size: ${props =>
    props.as === "h1" ? "32px" : props.as === "h2" ? "24px" : "20px"};
`;

Heading.defaultProps = {
  as: "h1",
  fontWeight: 2,
  color: "textTitle"
};
