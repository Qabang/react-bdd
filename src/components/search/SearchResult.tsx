import { Product } from "../../models/product";

interface Props {
  product: Product[];
}

const SearchResult = ({ product }: Props) => (
  <div>
    {product.map((product) => (
      <div data-test="resultProduct" key={product.id}>
        {product.image}
        {product.name}
        {product.description}
        {product.price}
      </div>
    ))}
  </div>
);

export default SearchResult;
