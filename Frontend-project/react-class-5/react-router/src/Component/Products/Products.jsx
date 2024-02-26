import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import { useEffect, useState } from "react";

const Products = () => {
  const { products } = useLoaderData();
  const [cardLength, setCardLength] = useState(8);

  useEffect(() => {
    setCardLength(cardLength);
  }, []);

  return (
    <div className="text-center">
      <h1>product: {products.length}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mx-10 md:grid-cols-2 ">
        {products.slice(0, cardLength).map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <button
        onClick={() => setCardLength(products.length)}
        className={
          products.length === cardLength
            ? "hidden"
            : "btn btn-primary mx-auto mt-4"
        }
      >
        See All
      </button>
    </div>
  );
};

export default Products;

// 
