import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ElementContext from "../context/ElementsContext";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Card = styled.div`
  background: #fff;
  /* position: relative; */
  /* height: 30em; */
  width: 20em;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
const TextContainer = styled.div`
  padding-bottom: 20px;
`;
const PrevButton = styled.button`
  background-color: transparent;
  border: none;
`;

const NextButton = styled(PrevButton)``;

export const CardElement: React.FC<any> = () => {
  const { atomicNumber }: any = useParams();
  const actualNumber = parseInt(atomicNumber);
  const elementsContext = useContext(ElementContext);
  const elementsPayload = elementsContext && elementsContext.data;
  const elementData: any =
    elementsPayload &&
    elementsPayload.find((element: any) => element.number === atomicNumber);
  return (
    <motion.div
      whileHover={{
        boxShadow:
          "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
      }}
    >
      <Link to={`/${actualNumber === 1 ? actualNumber : actualNumber - 1}`}>
        <PrevButton>
          <i className="material-icons">arrow_back</i>
        </PrevButton>
      </Link>
      <Link to={`/${actualNumber === 118 ? actualNumber : actualNumber + 1}`}>
        <NextButton>
          <i className="material-icons">arrow_forward</i>
        </NextButton>
      </Link>

      <Card>
        <Image
          alt={`Atomic number: ${atomicNumber}`}
          src={elementData && elementData.image}
        />
        <TextContainer>
          <h1>{elementData && elementData.number}</h1>
          <h5>{elementData && elementData.name}</h5>
        </TextContainer>
      </Card>
    </motion.div>
  );
};
