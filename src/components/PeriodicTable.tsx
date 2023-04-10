import React, { useContext } from "react";
import { motion } from "framer-motion";
import ElementContext from "../context/ElementsContext";
import { useNavigate } from "react-router-dom";

interface IStyle {
  tableContainer: any;
  elements: any;
  name: any;
  common: any;
  elementWrapper: any;
}

const styles: IStyle = {
  tableContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(18,  4vw )",
    gridTemplateRows: "repeat(10, 4vw)",
    gridRowGap: "3px",
    gridColumnGap: "3px",
    textAlign: "center",
    paddingTop: "100px",
  },

  elements: {
    h: { gridColumn: 1, gridRow: 1 },
    he: { gridColumn: 18, gridRow: 1 },
    li: { gridColumn: 1, gridRow: 2 },
    be: { gridColumn: 2, gridRow: 2 },
    b: { gridColumn: 13, gridRow: 2 },
    c: { gridColumn: 14, gridRow: 2 },
    n: { gridColumn: 15, gridRow: 2 },
    o: { gridColumn: 16, gridRow: 2 },
    f: { gridColumn: 17, gridRow: 2 },
    ne: { gridColumn: 18, gridRow: 2 },
    na: { gridColumn: 1, gridRow: 3 },
    mg: { gridColumn: 2, gridRow: 3 },
    al: { gridColumn: 13, gridRow: 3 },
    si: { gridColumn: 14, gridRow: 3 },
    p: { gridColumn: 15, gridRow: 3 },
    s: { gridColumn: 16, gridRow: 3 },
    cl: { gridColumn: 17, gridRow: 3 },
    ar: { gridColumn: 18, gridRow: 3 },
    k: { gridColumn: 1, gridRow: 4 },
    ca: { gridColumn: 2, gridRow: 4 },
    sc: { gridColumn: 3, gridRow: 4 },
    ti: { gridColumn: 4, gridRow: 4 },
    v: { gridColumn: 5, gridRow: 4 },
    cr: { gridColumn: 6, gridRow: 4 },
    mn: { gridColumn: 7, gridRow: 4 },
    fe: { gridColumn: 8, gridRow: 4 },
    co: { gridColumn: 9, gridRow: 4 },
    ni: { gridColumn: 10, gridRow: 4 },
    cu: { gridColumn: 11, gridRow: 4 },
    zn: { gridColumn: 12, gridRow: 4 },
    ga: { gridColumn: 13, gridRow: 4 },
    ge: { gridColumn: 14, gridRow: 4 },
    as: { gridColumn: 15, gridRow: 4 },
    se: { gridColumn: 16, gridRow: 4 },
    br: { gridColumn: 17, gridRow: 4 },
    kr: { gridColumn: 18, gridRow: 4 },
    rb: { gridColumn: 1, gridRow: 5 },
    sr: { gridColumn: 2, gridRow: 5 },
    y: { gridColumn: 3, gridRow: 5 },
    zr: { gridColumn: 4, gridRow: 5 },
    nb: { gridColumn: 5, gridRow: 5 },
    mo: { gridColumn: 6, gridRow: 5 },
    tc: { gridColumn: 7, gridRow: 5 },
    ru: { gridColumn: 8, gridRow: 5 },
    rh: { gridColumn: 9, gridRow: 5 },
    pd: { gridColumn: 10, gridRow: 5 },
    ag: { gridColumn: 11, gridRow: 5 },
    cd: { gridColumn: 12, gridRow: 5 },
    in: { gridColumn: 13, gridRow: 5 },
    sn: { gridColumn: 14, gridRow: 5 },
    sb: { gridColumn: 15, gridRow: 5 },
    te: { gridColumn: 16, gridRow: 5 },
    i: { gridColumn: 17, gridRow: 5 },
    xe: { gridColumn: 18, gridRow: 5 },
    cs: { gridColumn: 1, gridRow: 6 },
    ba: { gridColumn: 2, gridRow: 6 },
    la: { gridColumn: 4, gridRow: 9 },
    ce: { gridColumn: 5, gridRow: 9 },
    pr: { gridColumn: 6, gridRow: 9 },
    nd: { gridColumn: 7, gridRow: 9 },
    pm: { gridColumn: 8, gridRow: 9 },
    sm: { gridColumn: 9, gridRow: 9 },
    eu: { gridColumn: 10, gridRow: 9 },
    gd: { gridColumn: 11, gridRow: 9 },
    tb: { gridColumn: 12, gridRow: 9 },
    dy: { gridColumn: 13, gridRow: 9 },
    ho: { gridColumn: 14, gridRow: 9 },
    er: { gridColumn: 15, gridRow: 9 },
    tm: { gridColumn: 16, gridRow: 9 },
    yb: { gridColumn: 17, gridRow: 9 },
    lu: { gridColumn: 18, gridRow: 9 },
    hf: { gridColumn: 4, gridRow: 6 },
    ta: { gridColumn: 5, gridRow: 6 },
    w: { gridColumn: 6, gridRow: 6 },
    re: { gridColumn: 7, gridRow: 6 },
    os: { gridColumn: 8, gridRow: 6 },
    ir: { gridColumn: 9, gridRow: 6 },
    pt: { gridColumn: 10, gridRow: 6 },
    au: { gridColumn: 11, gridRow: 6 },
    hg: { gridColumn: 12, gridRow: 6 },
    tl: { gridColumn: 13, gridRow: 6 },
    pb: { gridColumn: 14, gridRow: 6 },
    bi: { gridColumn: 15, gridRow: 6 },
    po: { gridColumn: 16, gridRow: 6 },
    at: { gridColumn: 17, gridRow: 6 },
    rn: { gridColumn: 18, gridRow: 6 },
    fr: { gridColumn: 1, gridRow: 7 },
    ra: { gridColumn: 2, gridRow: 7 },
    ac: { gridColumn: 4, gridRow: 10 },
    th: { gridColumn: 5, gridRow: 10 },
    pa: { gridColumn: 6, gridRow: 10 },
    u: { gridColumn: 7, gridRow: 10 },
    np: { gridColumn: 8, gridRow: 10 },
    pu: { gridColumn: 9, gridRow: 10 },
    am: { gridColumn: 10, gridRow: 10 },
    cm: { gridColumn: 11, gridRow: 10 },
    bk: { gridColumn: 12, gridRow: 10 },
    cf: { gridColumn: 13, gridRow: 10 },
    es: { gridColumn: 14, gridRow: 10 },
    fm: { gridColumn: 15, gridRow: 10 },
    md: { gridColumn: 16, gridRow: 10 },
    no: { gridColumn: 17, gridRow: 10 },
    lr: { gridColumn: 18, gridRow: 10 },
    rf: { gridColumn: 4, gridRow: 7 },
    db: { gridColumn: 5, gridRow: 7 },
    sg: { gridColumn: 6, gridRow: 7 },
    bh: { gridColumn: 7, gridRow: 7 },
    hs: { gridColumn: 8, gridRow: 7 },
    mt: { gridColumn: 9, gridRow: 7 },
    ds: { gridColumn: 10, gridRow: 7 },
    rg: { gridColumn: 11, gridRow: 7 },
    cn: { gridColumn: 12, gridRow: 7 },
    nh: { gridColumn: 13, gridRow: 7 },
    fl: { gridColumn: 14, gridRow: 7 },
    mc: { gridColumn: 15, gridRow: 7 },
    lv: { gridColumn: 16, gridRow: 7 },
    ts: { gridColumn: 17, gridRow: 7 },
    og: { gridColumn: 18, gridRow: 7 },
    la_lu: { gridColumn: 3, gridRow: 6 },
    ac_lr: { gridColumn: 3, gridRow: 7 },
  },
  name: {
    fontSize: "smaller",
  },
  common: {
    backgroundColor: "pink",
  },
  elementWrapper: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "initial",
    overflow: "hidden",
  },
};

let elementsList: Array<object> = [];

for (const element in styles.elements) {
  const allElements = styles.elements;
  const newObject = {
    el: element,
    ...allElements[element],
  };
  elementsList.push(newObject);
}

interface IElement {
  name: string;
  number: string;
  symbol: string;
}

const getElementByAtomicNumber = (atomicNumber: number, payload: any) =>
  payload.find((el: any) => el.number === atomicNumber);

export const PeriodicTable: React.FC<any> = () => {
  const navigate = useNavigate();
  const elementsContext = useContext(ElementContext);
  const elementsPayload = elementsContext?.data;
  return (
    <div style={styles.tableContainer}>
      {elementsList.map((item: any, idx: number) => {
        const atomicNumber = idx + 1;
        const elementItem: IElement = getElementByAtomicNumber(
          atomicNumber,
          elementsPayload
        );
        const elementName = elementItem?.name;
        const elementSymbol = elementItem?.symbol;
        const elementNumber = elementItem?.number;
        return (
          <motion.div
            whileHover={{ boxShadow: "0px 0px 0px 2px black inset" }}
            whileTap={{ scale: 3.0 }}
            onClick={() => navigate("/" + atomicNumber)}
            key={atomicNumber}
            style={{
              ...styles.elements[item.el],
              ...styles.common,
            }}
          >
            <div style={styles.elementWrapper}>
              <span>{elementNumber}</span>
              <b>{elementSymbol}</b>
              <span style={styles.name}>{elementName}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
