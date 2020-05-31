import React, { useState } from "react";
import { Header } from "./components/header";
import { Main } from "./components/main";
import axios from "axios";

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};

const App: React.FC<{}> = () => {
  // const [data, setData] = useState("s");
  const data: Array<object> = [
    {
      _id: "5e61ad4a624aef778e5c2f74",
      name: "Promécio",
      number: "61",
      symbol: "Pm",
      image: "https://images-of-elements.com/promethium.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f75",
      name: "Cobalto",
      number: "27",
      symbol: "Co",
      image: "https://images-of-elements.com/cobalt.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f76",
      name: "Estrôncio",
      number: "38",
      symbol: "Sr",
      image: "https://images-of-elements.com/strontium-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f77",
      name: "Protactínio",
      number: "91",
      symbol: "Pa",
      image: "https://images-of-elements.com/s/protactinium-231.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f78",
      name: "Plutônio",
      number: "94",
      symbol: "Pu",
      image: "https://images-of-elements.com/maralinga-sand.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f79",
      name: "Titânio",
      number: "22",
      symbol: "Ti",
      image: "https://images-of-elements.com/titanium-crystal.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f7a",
      name: "Criptônio",
      number: "36",
      symbol: "Kr",
      image: "https://images-of-elements.com/krypton.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f7b",
      name: "Ítrio",
      number: "39",
      symbol: "Y",
      image: "https://images-of-elements.com/yttrium-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f7c",
      name: "Índio",
      number: "49",
      symbol: "In",
      image: "https://images-of-elements.com/indium.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f7d",
      name: "Flúor",
      number: "9",
      symbol: "F",
      image: "https://images-of-elements.com/fluorine.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f7e",
      name: "Cloro",
      number: "17",
      symbol: "Cl",
      image: "https://images-of-elements.com/chlorine-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f7f",
      name: "Tálio",
      number: "81",
      symbol: "Tl",
      image: "https://images-of-elements.com/thallium-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f80",
      name: "Cálcio",
      number: "20",
      symbol: "Ca",
      image: "https://images-of-elements.com/calcium-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f81",
      name: "Prata",
      number: "47",
      symbol: "Ag",
      image: "https://images-of-elements.com/silver-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f82",
      name: "Platina",
      number: "78",
      symbol: "Pt",
      image: "https://images-of-elements.com/platinum-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f83",
      name: "Irídio",
      number: "77",
      symbol: "Ir",
      image: "https://images-of-elements.com/iridium.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f84",
      name: "Enxofre",
      number: "16",
      symbol: "S",
      image: "https://images-of-elements.com/sulfur-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f85",
      name: "Mercúrio",
      number: "80",
      symbol: "Hg",
      image: "https://images-of-elements.com/hydrargyrum-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f86",
      name: "Potássio",
      number: "19",
      symbol: "K",
      image: "https://images-of-elements.com/potassium-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f87",
      name: "Túlio",
      number: "69",
      symbol: "Tm",
      image: "https://images-of-elements.com/thulium.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f88",
      name: "Neptúnio",
      number: "93",
      symbol: "Np",
      image: "https://images-of-elements.com/s/neptunium.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f89",
      name: "Alumínio",
      number: "13",
      symbol: "Al",
      image: "https://images-of-elements.com/aluminium-4.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f8a",
      name: "Rutênio",
      number: "44",
      symbol: "Ru",
      image: "https://images-of-elements.com/ruthenium-crystal.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f8b",
      name: "Tório",
      number: "90",
      symbol: "Th",
      image: "https://images-of-elements.com/s/thorium.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f8c",
      name: "Erbio",
      number: "68",
      symbol: "Er",
      image: "https://images-of-elements.com/erbium-3.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f8d",
      name: "Cromo",
      number: "24",
      symbol: "Cr",
      image: "https://images-of-elements.com/chromium-3.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f8e",
      name: "Hélio",
      number: "2",
      symbol: "He",
      image: "https://images-of-elements.com/helium-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f8f",
      name: "Berquélio",
      number: "97",
      symbol: "Bk",
      image: "https://images-of-elements.com/s/berkelium-ornl.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f90",
      name: "Cério",
      number: "58",
      symbol: "Ce",
      image: "https://images-of-elements.com/cerium-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f91",
      name: "Cúrio",
      number: "96",
      symbol: "Cm",
      image: "https://images-of-elements.com/s/curium-glow.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f92",
      name: "Bismuto",
      number: "83",
      symbol: "Bi",
      image: "https://images-of-elements.com/bismuth-4.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f93",
      name: "Zinco",
      number: "30",
      symbol: "Zn",
      image: "https://images-of-elements.com/zinc.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f94",
      name: "Bário",
      number: "56",
      symbol: "Ba",
      image: "https://images-of-elements.com/barium-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f95",
      name: "Gálio",
      number: "31",
      symbol: "Ga",
      image: "https://images-of-elements.com/gallium-4.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f96",
      name: "Disprósio",
      number: "66",
      symbol: "Dy",
      image: "https://images-of-elements.com/dysprosium-4.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f97",
      name: "Ouro",
      number: "79",
      symbol: "Au",
      image: "https://images-of-elements.com/solidus-justin.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f98",
      name: "Praseodímio",
      number: "59",
      symbol: "Pr",
      image: "https://images-of-elements.com/praseodymium-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f99",
      name: "Rádio",
      number: "88",
      symbol: "Ra",
      image: "https://images-of-elements.com/radium-glow.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f9a",
      name: "Fósforo",
      number: "15",
      symbol: "P",
      image: "https://images-of-elements.com/phosphorus-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f9b",
      name: "Ferro",
      number: "26",
      symbol: "Fe",
      image: "https://images-of-elements.com/iron.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f9c",
      name: "Telúrio",
      number: "52",
      symbol: "Te",
      image: "https://images-of-elements.com/tellurium-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f9d",
      name: "Carbono",
      number: "6",
      symbol: "C",
      image: "https://images-of-elements.com/carbon.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f9e",
      name: "Antimônio",
      number: "51",
      symbol: "Sb",
      image: "https://images-of-elements.com/antimony-4.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2f9f",
      name: "Amerício",
      number: "95",
      symbol: "Am",
      image: "https://images-of-elements.com/s/americium.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fa0",
      name: "Arsênio",
      number: "33",
      symbol: "As",
      image: "https://images-of-elements.com/arsenic-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fa1",
      name: "Gadolínio",
      number: "64",
      symbol: "Gd",
      image: "https://images-of-elements.com/gadolinium-3.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fa2",
      name: "Argônio",
      number: "18",
      symbol: "Ar",
      image: "https://images-of-elements.com/argon.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fa3",
      name: "Níquel",
      number: "28",
      symbol: "Ni",
      image: "https://images-of-elements.com/nickel-sheet.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fa4",
      name: "Urânio",
      number: "92",
      symbol: "U",
      image: "https://images-of-elements.com/s/uranium.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fa5",
      name: "Estanho",
      number: "50",
      symbol: "Sn",
      image: "https://images-of-elements.com/tin-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fa6",
      name: "Lítio",
      number: "3",
      symbol: "Li",
      image: "https://images-of-elements.com/lithium.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fa7",
      name: "Paládio",
      number: "46",
      symbol: "Pd",
      image: "https://images-of-elements.com/palladium.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fa8",
      name: "Manganês",
      number: "25",
      symbol: "Mn",
      image: "https://images-of-elements.com/manganese-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fa9",
      name: "Cobre",
      number: "29",
      symbol: "Cu",
      image: "https://images-of-elements.com/copper.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2faa",
      name: "Tecnécio",
      number: "43",
      symbol: "Tc",
      image: "https://images-of-elements.com/s/technetium.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fab",
      name: "Lutécio",
      number: "71",
      symbol: "Lu",
      image: "https://images-of-elements.com/lutetium-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fac",
      name: "Silício",
      number: "14",
      symbol: "Si",
      image: "https://images-of-elements.com/silicon-3.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fad",
      name: "Neônio",
      number: "10",
      symbol: "Ne",
      image: "https://images-of-elements.com/neon-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fae",
      name: "Nitrogênio",
      number: "7",
      symbol: "N",
      image: "https://images-of-elements.com/nitrogen-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2faf",
      name: "Zircônio",
      number: "40",
      symbol: "Zr",
      image: "https://images-of-elements.com/zirconium-3.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fb0",
      name: "Xenônio",
      number: "54",
      symbol: "Xe",
      image: "https://images-of-elements.com/s/xenon-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fb1",
      name: "Germânio",
      number: "32",
      symbol: "Ge",
      image: "https://images-of-elements.com/s/germanium-3.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fb2",
      name: "Bromo",
      number: "35",
      symbol: "Br",
      image: "https://images-of-elements.com/s/bromine.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fb3",
      name: "Rênio",
      number: "75",
      symbol: "Re",
      image: "https://images-of-elements.com/s/rhenium-3.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fb4",
      name: "Magnésio",
      number: "12",
      symbol: "Mg",
      image: "https://images-of-elements.com/s/magnesium-swarf.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fb5",
      name: "Oxigênio",
      number: "8",
      symbol: "O",
      image: "https://images-of-elements.com/s/oxygen.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fb6",
      name: "Frâncio",
      number: "87",
      symbol: "Fr",
      image: "https://images-of-elements.com/s/francium.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fb7",
      name: "Vanádio",
      number: "23",
      symbol: "V",
      image: "https://images-of-elements.com/s/vanadium.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fb8",
      name: "Neodímio",
      number: "60",
      symbol: "Nd",
      image: "https://images-of-elements.com/s/neodymium-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fb9",
      name: "Polônio",
      number: "84",
      symbol: "Po",
      image: "https://images-of-elements.com/s/polonium.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fba",
      name: "Rubídio",
      number: "37",
      symbol: "Rb",
      image: "https://images-of-elements.com/s/rubidium-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fbb",
      name: "Ósmio",
      number: "76",
      symbol: "Os",
      image: "https://images-of-elements.com/s/osmium-3.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fbc",
      name: "Chumbo",
      number: "82",
      symbol: "Pb",
      image: "https://images-of-elements.com/s/lead-cut.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fbd",
      name: "Samário",
      number: "62",
      symbol: "Sm",
      image: "https://images-of-elements.com/s/samarium.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fbe",
      name: "Radônio",
      number: "86",
      symbol: "Rn",
      image: "https://images-of-elements.com/s/radon.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fbf",
      name: "Nióbio",
      number: "41",
      symbol: "Nb",
      image: "https://images-of-elements.com/s/niobium.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fc0",
      name: "Selênio",
      number: "34",
      symbol: "Se",
      image: "https://images-of-elements.com/s/selenium-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fc1",
      name: "Califórnio",
      number: "98",
      symbol: "Cf",
      image: "https://images-of-elements.com/s/californium-disc.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fc2",
      name: "Boro",
      number: "5",
      symbol: "B",
      image: "https://images-of-elements.com/s/brown-boron.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fc3",
      name: "Tântalo",
      number: "73",
      symbol: "Ta",
      image: "https://images-of-elements.com/s/tantalum-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fc4",
      name: "Háfnio",
      number: "72",
      symbol: "Hf",
      image: "https://images-of-elements.com/s/hafnium-3.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fc5",
      name: "Iodo",
      number: "53",
      symbol: "I",
      image: "https://images-of-elements.com/s/iodine-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fc6",
      name: "Actínio",
      number: "89",
      symbol: "Ac",
      image: "https://images-of-elements.com/s/actinium-225.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fc7",
      name: "Lantânio",
      number: "57",
      symbol: "La",
      image: "https://images-of-elements.com/s/lanthanum-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fc8",
      name: "Európio",
      number: "63",
      symbol: "Eu",
      image: "https://images-of-elements.com/s/europium-3.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fc9",
      name: "Cádmio",
      number: "48",
      symbol: "Cd",
      image: "https://images-of-elements.com/s/cadmium-4.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fca",
      name: "Césio",
      number: "55",
      symbol: "Cs",
      image: "https://images-of-elements.com/s/caesium-3.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fcb",
      name: "Einstêno",
      number: "99",
      symbol: "Es",
      image: "https://images-of-elements.com/s/einsteinium-253.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fcc",
      name: "Hólmio",
      number: "67",
      symbol: "Ho",
      image: "https://images-of-elements.com/s/holmium-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fcd",
      name: "Sódio",
      number: "11",
      symbol: "Na",
      image: "https://images-of-elements.com/s/sodium.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fce",
      name: "Escândio",
      number: "21",
      symbol: "Sc",
      image: "https://images-of-elements.com/s/scandium-3.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fcf",
      name: "Itérbio",
      number: "70",
      symbol: "Yb",
      image: "https://images-of-elements.com/s/ytterbium-3.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fd0",
      name: "Ródio",
      number: "45",
      symbol: "Rh",
      image: "https://images-of-elements.com/s/rhodium.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fd1",
      name: "Tungstênio",
      number: "74",
      symbol: "W",
      image: "https://images-of-elements.com/s/tungsten-rod.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fd2",
      name: "Astato",
      number: "85",
      symbol: "At",
      image: "https://images-of-elements.com/s/astatine.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fd3",
      name: "Berílio",
      number: "4",
      symbol: "Be",
      image: "https://images-of-elements.com/s/beryllium-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fd4",
      name: "Térbio",
      number: "65",
      symbol: "Tb",
      image: "https://images-of-elements.com/s/terbium.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fd5",
      name: "Molibdénio",
      number: "42",
      symbol: "Mo",
      image: "https://images-of-elements.com/s/molybdenum-2.jpg"
    },
    {
      _id: "5e61ad4a624aef778e5c2fd6",
      name: "Hidrogênio",
      number: "1",
      symbol: "H",
      image: "https://images-of-elements.com/s/hydrogen-2.jpg"
    },
    {
      _id: "5e628a0b624aef778e5c2fd8",
      name: "Rutherfórdio",
      number: "104",
      symbol: "Rf",
      image: "https://images-of-elements.com/s/rutherfordium.jpg"
    },
    {
      _id: "5e628a0b624aef778e5c2fd9",
      name: "Dúbnio",
      number: "105",
      symbol: "Db",
      image: "https://images-of-elements.com/s/transactinoid.png"
    },
    {
      _id: "5e628a0b624aef778e5c2fda",
      name: "Seabórgio",
      number: "106",
      symbol: "Sg",
      image: "https://images-of-elements.com/s/transactinoid.png"
    },
    {
      _id: "5e628a0b624aef778e5c2fdb",
      name: "Bóhrio",
      number: "107",
      symbol: "Bh",
      image: "https://images-of-elements.com/s/transactinoid.png"
    },
    {
      _id: "5e628a0b624aef778e5c2fdc",
      name: "Hássio",
      number: "108",
      symbol: "Hs",
      image: "https://images-of-elements.com/s/transactinoid.png"
    },
    {
      _id: "5e628a0b624aef778e5c2fdd",
      name: "Meitnério",
      number: "109",
      symbol: "Mt",
      image: "https://images-of-elements.com/s/transactinoid.png"
    },
    {
      _id: "5e628a0b624aef778e5c2fde",
      name: "Darmstácio",
      number: "110",
      symbol: "Ds",
      image: "https://images-of-elements.com/s/transactinoid.png"
    },
    {
      _id: "5e628a0b624aef778e5c2fdf",
      name: "Roentgênio",
      number: "111",
      symbol: "Rg",
      image: "https://images-of-elements.com/s/transactinoid.png"
    },
    {
      _id: "5e628a0b624aef778e5c2fe0",
      name: "Copernício",
      number: "112",
      symbol: "Cn",
      image: "https://images-of-elements.com/s/transactinoid.png"
    },
    {
      _id: "5e628a0b624aef778e5c2fe1",
      name: "Ninhonium",
      number: "113",
      symbol: "Nh",
      image: "https://images-of-elements.com/s/transactinoid.png"
    },
    {
      _id: "5e628a0b624aef778e5c2fe2",
      name: "Fleróvio",
      number: "114",
      symbol: "Fl",
      image: "https://images-of-elements.com/s/transactinoid.png"
    },
    {
      _id: "5e628a0b624aef778e5c2fe4",
      name: "Livermório",
      number: "116",
      symbol: "Lv",
      image: "https://images-of-elements.com/s/transactinoid.png"
    },
    {
      _id: "5e628a0b624aef778e5c2fe5",
      name: "Tennessine",
      number: "117",
      symbol: "Ts",
      image: "https://images-of-elements.com/s/transactinoid.png"
    },
    {
      _id: "5e628a0b624aef778e5c2fe6",
      name: "Oganesson",
      number: "118",
      symbol: "Og",
      image: "https://images-of-elements.com/s/transactinoid.png"
    },
    {
      _id: "5e62e3b6624aef778e5c2fe7",
      name: "Férmio",
      number: "100",
      symbol: "Fm",
      image: "https://images-of-elements.com/s/fermium.jpg"
    },
    {
      _id: "5e62e3b6624aef778e5c2fe8",
      name: "Mendelévio",
      number: "101",
      symbol: "Md",
      image: "https://images-of-elements.com/s/mendelevium.jpg"
    },
    {
      _id: "5e62e3b6624aef778e5c2fe9",
      name: "Nobélio",
      number: "102",
      symbol: "No",
      image: "https://images-of-elements.com/s/nobelium.jpg"
    },
    {
      _id: "5e62e3b6624aef778e5c2fea",
      name: "Laurêncio",
      number: "103",
      symbol: "Lr",
      image: "https://images-of-elements.com/lawrencium.jpg"
    },
    {
      _id: "5e62e3b6624aef778e5c2feb",
      name: "Moscovium",
      number: "115",
      symbol: "Mc",
      image: "https://images-of-elements.com/s/transactinoid.png"
    }
  ];

  // constructor(props:any) {
  //   super(props);
  //   this.state = {
  // loading: false,
  // number: 1,
  // payload: []
  //   };
  // }

  // componentDidMount() {
  //   this.setState({ loading: true });

  //   axios.get("http://localhost:4000/elements").then(response => {
  //     this.setState({ payload: response.data });
  //     this.setState({
  //       filteredPayload: response.data.find(
  //         item => item.number === this.state.number
  //       )
  //     });
  //   });

  //   this.setState({ loading: true });
  // }

  // render() {
  // const { payload } = this.state;

  return (
    // <div style = {styles.appContainer}>
    <div>
      <Header />
      <Main props={data} />
    </div>
  );
};
// }

export default App;
