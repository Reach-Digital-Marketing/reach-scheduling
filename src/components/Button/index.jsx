import React from "react";

import { Container } from "./styles";

export function Button(props) {
  return (
    <Container {...props}>
      <span>{props.children}</span>
    </Container>
  );
}
