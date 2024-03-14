import Swal from "sweetalert2";


const AddToCart = () => {

       const handleSubmit = e =>{
              e.preventDefault()
              const ProductName = e.target.ProductName.value;
              const rating = e.target.rating.value;
              const price = e.target.price.value;
              const category = e.target.category.value;
              const des = e.target.des.value;
              const img = e.target.img.value;


              const objInfo = {ProductName,rating, price, category, des, img}
              console.log(objInfo)


              fetch(`http://localhost:5000/added`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(objInfo),
              })
                .then((res) => res.json())
                .then((data) =>{

                      if (data.insertedId) {
                        Swal.fire({
                          position: "top-end",
                          icon: "success",
                          title: "Your Product added",
                          showConfirmButton: false,
                          timer: 1500,
                        });
                      }


                     console.log(data)
                })
               
       }
  




       return (
         <form
           onSubmit={handleSubmit}
           className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mt-10"
         >
           <div className="grid grid-cols-2 gap-4">
             <div>
               <label
                 className="block text-gray-700 text-sm font-bold mb-2"
                 htmlFor="firstName"
               >
                 Product Name
               </label>
               <input
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="firstName"
                 type="text"
                 placeholder="Enter Product name"
                 name="ProductName"
               />
             </div>
             <div>
               <label
                 className="block text-gray-700 text-sm font-bold mb-2"
                 htmlFor="lastName"
               >
                 Rating
               </label>
               <input
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="lastName"
                 type="text"
                 placeholder="Enter raating"
                 name="rating"
               />
             </div>
             <div>
               <label
                 className="block text-gray-700 text-sm font-bold mb-2"
                 htmlFor="productName"
               >
                 Price
               </label>
               <input
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="productName"
                 type="text"
                 placeholder="Enter your price"
                 name="price"
               />
             </div>
             <div>
               <label
                 className="block text-gray-700 text-sm font-bold mb-2"
                 htmlFor="price"
               >
                 Category
               </label>
               <input
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="category"
                 type="text"
                 placeholder="category"
                 name="category"
               />
             </div>
             <div className="col-span-2">
               <label
                 className="block text-gray-700 text-sm font-bold mb-2"
                 htmlFor="description"
               >
                 Description
               </label>
               <textarea
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="description"
                 placeholder="Description"
                 name="des"
               ></textarea>
             </div>
             <div className="col-span-2">
               <label
                 className="block text-gray-700 text-sm font-bold mb-2"
                 htmlFor="imgSrc"
               >
                 Image URL
               </label>
               <input
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="imgSrc"
                 type="text"
                 placeholder="Image URL"
                 name="img"
               />
             </div>
           </div>
           <div className="flex items-center justify-between">
             <button
               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
               type="submit"
             >
               Add To Cart
             </button>
           </div>
         </form>
       );
};

export default AddToCart;