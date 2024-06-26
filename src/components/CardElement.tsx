import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ElementContext from "../context/ElementsContext";

interface IStyle {
  card: any;
}
const styles: IStyle = {
  card: {
    position: "fixed",
    display: "flex",
    flexDirection: "row",
    maxWidth: "50%",
    top: 0,
    right: "35%",
    backgroundColor: "rgba(256, 256, 256, 0.75)",
  },
};

export const CardElement: React.FC<any> = () => {
  const navigate = useNavigate();
  const { atomicNumber }: any = useParams();
  const actualNumber = parseInt(atomicNumber);
  const elementsContext = useContext(ElementContext);
  const elementsPayload: any = elementsContext?.data;
  const elementData: any = elementsPayload.find(
    (element: any) => element.number === actualNumber
  );

  return (
    <div className="card" style={styles.card}>
      <div>
        <span
          onClick={() => navigate("/elements")}
          style={{ cursor: "pointer" }}
        >
          <b>x</b>
        </span>
        <figure className="w-75">
          <img alt={elementData.name} src={`${elementData.image.url}`} />
        </figure>
      </div>
      <div className="pl-2">
        <h2>{elementData.name} </h2>
        <p>{elementData.summary}</p>
        <p>
          <b>Discoverer: </b>
          {elementData.discovered_by}
        </p>
      </div>
    </div>
  );
};
