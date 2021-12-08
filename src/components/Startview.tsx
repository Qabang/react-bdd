import { useState } from "react";
import SearchResult from "./search/SearchResult";
import { Product } from "../models/product";
import SearchBox from "./search/SearchBox";
import ProductCard from "./ProductCard";

function Startview() {
  const [searchText, setSearchText] = useState("");
  const products: Product[] = [
    {
      id: 1,
      name: "Eyeliner",
      price: 199,
      description: "",
      image: "",
    },
    {
      id: 2,
      name: "Waterproof Mascara",
      price: 225,
      description: "",
      image: "",
    },
    {
      id: 3,
      name: "Mascara",
      price: 205,
      description: "",
      image: "",
    },
    {
      id: 4,
      name: "Blush",
      price: 145,
      description: "",
      image: "",
    },
    {
      id: 5,
      name: "Powder brush",
      price: 185,
      description: "",
      image: "",
    },
    {
      id: 6,
      name: "Eye Palette",
      price: 445,
      description: "",
      image: "",
    },
    {
      id: 7,
      name: "Lip Gloss",
      price: 138,
      description: "",
      image: "",
    },
    {
      id: 8,
      name: "Makeup Bag",
      price: 285,
      description: "",
      image: "",
    },
    {
      id: 9,
      name: "Foundation",
      price: 280,
      description: "",
      image: "",
    },
    {
      id: 10,
      name: "Makeup Sponge",
      price: 95,
      description: "",
      image: "",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.includes(searchText)
  );

  //products.map((product) => console.log(product))
  return (
    <>
      <h1>Våra produkter</h1>
      <SearchBox searchValue={searchText} setSearchValue={setSearchText} />
      <SearchResult product={filteredProducts} />
    </>
  );
}

export default Startview;
