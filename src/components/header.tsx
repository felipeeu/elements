import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Bar = styled.div`
  background-color: blueviolet;
  width: 100%;
  height: 50px;
`;

const ReturnButton = styled.button`
  position: absolute;
  left: 0;
`;

export const Header = () => (
  <Bar>
    <Link to="/">
      <ReturnButton>voltar</ReturnButton>
    </Link>
  </Bar>
);
