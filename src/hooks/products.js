import ServImage01 from "assets/serv-01.jpg";
import ServImage02 from "assets/serv-02.jpg";
import ServImage03 from "assets/serv-03.jpg";
import ServImage04 from "assets/serv-04.jpg";
import ServImage05 from "assets/serv-05.jpg";

const products = [
  {
    id: 1,
    title: "1ª photography old cars",
    slang: "first-photography-old-cars",
    summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image: ServImage01,
  },
  {
    id: 2,
    title: "1ª photography news motorcycles",
    slang: "first-photography-news-motorcycles",
    summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image: ServImage02,
  },
  {
    id: 3,
    title: "1ª photography flowers",
    slang: "first-photography-flowers",
    summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image: ServImage03,
  },
  {
    id: 4,
    title: "Switch to professional equipment",
    slang: "switch-to-professional-equipment",
    summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image: ServImage04,
  },
  {
    id: 5,
    title: "Studio environment",
    slang: "studio-environment",
    summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image: ServImage05,
  },
];

export const useProducts = () => {
  return products;
};

export const useProduct = ({ slang }) => {
  return products.find((p) => p.slang === slang);
};
