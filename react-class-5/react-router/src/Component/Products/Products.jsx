import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
       const {products }= useLoaderData()
       // const data = products.products;
       console.log(products)
       return (
              <div>
                     <h1>product: {products.length}</h1>
                     <div className="grid grid-cols-1 lg:grid-cols-4 gap- 8 mx-10 md:grid-cols-2 gap-5">
                            {
                                   products.map(product => <Product key={product.id} product={product}></Product>)
                            }
                     </div>

                     
                     
                     
              </div>
       );
};

export default Products;