import React from "react";
import { motion } from "framer-motion";
import { withRouter } from "react-router-dom";

const styles = {
  tableContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(18,  75px )",
    gridTemplateRows: "repeat(10, 75px)",
    gridRowGap: "3px",
    gridColumnGap: "3px",
    height: "80vh",
    padding: "30px"
  },

  elements: {
    h: {
      gridColumn: 1,
      gridRow: 1,
      backgroundColor: "pink"
    },
    he: {
      gridColumn: 18,
      gridRow: 1,
      backgroundColor: "pink"
    },
    li: { gridColumn: 1, gridRow: 2, backgroundColor: "pink" },
    be: { gridColumn: 2, gridRow: 2, backgroundColor: "pink" },
    b: { gridColumn: 13, gridRow: 2, backgroundColor: "pink" },
    c: { gridColumn: 14, gridRow: 2, backgroundColor: "pink" },
    n: { gridColumn: 15, gridRow: 2, backgroundColor: "pink" },
    o: { gridColumn: 16, gridRow: 2, backgroundColor: "pink" },
    f: { gridColumn: 17, gridRow: 2, backgroundColor: "pink" },
    ne: { gridColumn: 18, gridRow: 2, backgroundColor: "pink" },
    na: { gridColumn: 1, gridRow: 3, backgroundColor: "pink" },
    mg: { gridColumn: 2, gridRow: 3, backgroundColor: "pink" },
    al: { gridColumn: 13, gridRow: 3, backgroundColor: "pink" },
    si: { gridColumn: 14, gridRow: 3, backgroundColor: "pink" },
    p: { gridColumn: 15, gridRow: 3, backgroundColor: "pink" },
    s: { gridColumn: 16, gridRow: 3, backgroundColor: "pink" },
    cl: { gridColumn: 17, gridRow: 3, backgroundColor: "pink" },
    ar: { gridColumn: 18, gridRow: 3, backgroundColor: "pink" },
    k: { gridColumn: 1, gridRow: 4, backgroundColor: "pink" },
    ca: { gridColumn: 2, gridRow: 4, backgroundColor: "pink" },
    sc: { gridColumn: 3, gridRow: 4, backgroundColor: "pink" },
    ti: { gridColumn: 4, gridRow: 4, backgroundColor: "pink" },
    v: { gridColumn: 5, gridRow: 4, backgroundColor: "pink" },
    cr: { gridColumn: 6, gridRow: 4, backgroundColor: "pink" },
    mn: { gridColumn: 7, gridRow: 4, backgroundColor: "pink" },
    fe: { gridColumn: 8, gridRow: 4, backgroundColor: "pink" },
    co: { gridColumn: 9, gridRow: 4, backgroundColor: "pink" },
    ni: { gridColumn: 10, gridRow: 4, backgroundColor: "pink" },
    cu: { gridColumn: 11, gridRow: 4, backgroundColor: "pink" },
    zn: { gridColumn: 12, gridRow: 4, backgroundColor: "pink" },
    ga: { gridColumn: 13, gridRow: 4, backgroundColor: "pink" },
    ge: { gridColumn: 14, gridRow: 4, backgroundColor: "pink" },
    as: { gridColumn: 15, gridRow: 4, backgroundColor: "pink" },
    se: { gridColumn: 16, gridRow: 4, backgroundColor: "pink" },
    br: { gridColumn: 17, gridRow: 4, backgroundColor: "pink" },
    kr: { gridColumn: 18, gridRow: 4, backgroundColor: "pink" },
    rb: { gridColumn: 1, gridRow: 5, backgroundColor: "pink" },
    sr: { gridColumn: 2, gridRow: 5, backgroundColor: "pink" },
    y: { gridColumn: 3, gridRow: 5, backgroundColor: "pink" },
    zr: { gridColumn: 4, gridRow: 5, backgroundColor: "pink" },
    nb: { gridColumn: 5, gridRow: 5, backgroundColor: "pink" },
    mo: { gridColumn: 6, gridRow: 5, backgroundColor: "pink" },
    tc: { gridColumn: 7, gridRow: 5, backgroundColor: "pink" },
    ru: { gridColumn: 8, gridRow: 5, backgroundColor: "pink" },
    rh: { gridColumn: 9, gridRow: 5, backgroundColor: "pink" },
    pd: { gridColumn: 10, gridRow: 5, backgroundColor: "pink" },
    ag: { gridColumn: 11, gridRow: 5, backgroundColor: "pink" },
    cd: { gridColumn: 12, gridRow: 5, backgroundColor: "pink" },
    in: { gridColumn: 13, gridRow: 5, backgroundColor: "pink" },
    sn: { gridColumn: 14, gridRow: 5, backgroundColor: "pink" },
    sb: { gridColumn: 15, gridRow: 5, backgroundColor: "pink" },
    te: { gridColumn: 16, gridRow: 5, backgroundColor: "pink" },
    i: { gridColumn: 17, gridRow: 5, backgroundColor: "pink" },
    xe: { gridColumn: 18, gridRow: 5, backgroundColor: "pink" },
    cs: { gridColumn: 1, gridRow: 6, backgroundColor: "pink" },
    ba: { gridColumn: 2, gridRow: 6, backgroundColor: "pink" },
    la: { gridColumn: 4, gridRow: 9, backgroundColor: "pink" },
    ce: { gridColumn: 5, gridRow: 9, backgroundColor: "pink" },
    pr: { gridColumn: 6, gridRow: 9, backgroundColor: "pink" },
    nd: { gridColumn: 7, gridRow: 9, backgroundColor: "pink" },
    pm: { gridColumn: 8, gridRow: 9, backgroundColor: "pink" },
    sm: { gridColumn: 9, gridRow: 9, backgroundColor: "pink" },
    eu: { gridColumn: 10, gridRow: 9, backgroundColor: "pink" },
    gd: { gridColumn: 11, gridRow: 9, backgroundColor: "pink" },
    tb: { gridColumn: 12, gridRow: 9, backgroundColor: "pink" },
    dy: { gridColumn: 13, gridRow: 9, backgroundColor: "pink" },
    ho: { gridColumn: 14, gridRow: 9, backgroundColor: "pink" },
    er: { gridColumn: 15, gridRow: 9, backgroundColor: "pink" },
    tm: { gridColumn: 16, gridRow: 9, backgroundColor: "pink" },
    yb: { gridColumn: 17, gridRow: 9, backgroundColor: "pink" },
    lu: { gridColumn: 18, gridRow: 9, backgroundColor: "pink" },
    hf: { gridColumn: 4, gridRow: 6, backgroundColor: "pink" },
    ta: { gridColumn: 5, gridRow: 6, backgroundColor: "pink" },
    w: { gridColumn: 6, gridRow: 6, backgroundColor: "pink" },
    re: { gridColumn: 7, gridRow: 6, backgroundColor: "pink" },
    os: { gridColumn: 8, gridRow: 6, backgroundColor: "pink" },
    ir: { gridColumn: 9, gridRow: 6, backgroundColor: "pink" },
    pt: { gridColumn: 10, gridRow: 6, backgroundColor: "pink" },
    au: { gridColumn: 11, gridRow: 6, backgroundColor: "pink" },
    hg: { gridColumn: 12, gridRow: 6, backgroundColor: "pink" },
    tl: { gridColumn: 13, gridRow: 6, backgroundColor: "pink" },
    pb: { gridColumn: 14, gridRow: 6, backgroundColor: "pink" },
    bi: { gridColumn: 15, gridRow: 6, backgroundColor: "pink" },
    po: { gridColumn: 16, gridRow: 6, backgroundColor: "pink" },
    at: { gridColumn: 17, gridRow: 6, backgroundColor: "pink" },
    rn: { gridColumn: 18, gridRow: 6, backgroundColor: "pink" },
    fr: { gridColumn: 1, gridRow: 7, backgroundColor: "pink" },
    ra: { gridColumn: 2, gridRow: 7, backgroundColor: "pink" },
    ac: { gridColumn: 4, gridRow: 10, backgroundColor: "pink" },
    th: { gridColumn: 5, gridRow: 10, backgroundColor: "pink" },
    pa: { gridColumn: 6, gridRow: 10, backgroundColor: "pink" },
    u: { gridColumn: 7, gridRow: 10, backgroundColor: "pink" },
    np: { gridColumn: 8, gridRow: 10, backgroundColor: "pink" },
    pu: { gridColumn: 9, gridRow: 10, backgroundColor: "pink" },
    am: { gridColumn: 10, gridRow: 10, backgroundColor: "pink" },
    cm: { gridColumn: 11, gridRow: 10, backgroundColor: "pink" },
    bk: { gridColumn: 12, gridRow: 10, backgroundColor: "pink" },
    cf: { gridColumn: 13, gridRow: 10, backgroundColor: "pink" },
    es: { gridColumn: 14, gridRow: 10, backgroundColor: "pink" },
    fm: { gridColumn: 15, gridRow: 10, backgroundColor: "pink" },
    md: { gridColumn: 16, gridRow: 10, backgroundColor: "pink" },
    no: { gridColumn: 17, gridRow: 10, backgroundColor: "pink" },
    lr: { gridColumn: 18, gridRow: 10, backgroundColor: "pink" },
    rf: { gridColumn: 4, gridRow: 7, backgroundColor: "pink" },
    db: { gridColumn: 5, gridRow: 7, backgroundColor: "pink" },
    sg: { gridColumn: 6, gridRow: 7, backgroundColor: "pink" },
    bh: { gridColumn: 7, gridRow: 7, backgroundColor: "pink" },
    hs: { gridColumn: 8, gridRow: 7, backgroundColor: "pink" },
    mt: { gridColumn: 9, gridRow: 7, backgroundColor: "pink" },
    ds: { gridColumn: 10, gridRow: 7, backgroundColor: "pink" },
    rg: { gridColumn: 11, gridRow: 7, backgroundColor: "pink" },
    cn: { gridColumn: 12, gridRow: 7, backgroundColor: "pink" },
    nh: { gridColumn: 13, gridRow: 7, backgroundColor: "pink" },
    fl: { gridColumn: 14, gridRow: 7, backgroundColor: "pink" },
    mc: { gridColumn: 15, gridRow: 7, backgroundColor: "pink" },
    lv: { gridColumn: 16, gridRow: 7, backgroundColor: "pink" },
    ts: { gridColumn: 17, gridRow: 7, backgroundColor: "pink" },
    og: { gridColumn: 18, gridRow: 7, backgroundColor: "pink" },
    la_lu: {
      gridColumn: 3,
      gridRow: 6,
      backgroundColor: "blue",
      display: "none"
    },
    ac_lr: { gridColumn: 3, gridRow: 7, backgroundColor: "blue" }
  },
  name: {
    fontSize: "smaller"
  }
};

const elementsList = [];
const allElements = styles.elements;

for (const element in allElements) {
  const newObject = {
    el: element,
    ...allElements[element]
  };
  elementsList.push(newObject);
}

const PeriodicTable = ({ payload, history }) => {
  return (
    <div style={styles.tableContainer}>
      {elementsList.map((item, idx) => {
        const atomicNumber = idx + 1;
        const parsedAtomicNumber = atomicNumber.toString();
        const elementObject =
          payload && payload.find(el => el.number === parsedAtomicNumber);

        const elementName = elementObject && elementObject.name;
        const elementSymbol = elementObject && elementObject.symbol;
        const elementNumber = elementObject && elementObject.number;

        return (
          <motion.div
            whileHover={{ border: "solid" }}
            // whileTap={() => console.log("Go!")}
            whileTap={{ scale: 3.0 }}
            onClick={() => {
              history.push("/" + atomicNumber);
            }}
            key={atomicNumber}
            style={styles.elements[item.el]}
          >
            <section>{elementNumber}</section>
            <div>
              <b>{elementSymbol}</b>
            </div>
            <span style={styles.name}>{elementName}</span>
          </motion.div>
        );
      })}
    </div>
  );
};
export default withRouter(PeriodicTable);
