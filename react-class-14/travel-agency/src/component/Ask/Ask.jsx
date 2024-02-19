

const Ask = () => {
       return (
         <div className="mt-7 mx-10">
           <div className="text-center justify-center">
             <h1 className="text-4xl font-bold">Do You Have Questions ?</h1>
             <p className="my-2 text-black">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut <br /> labore et dolore magna
               aliqua. Ut enim ad minim veniam.
             </p>
           </div>
           <div>
             <div className="collapse collapse-arrow">
               <input type="radio" name="my-accordion-2" defaultChecked />
               <div className="collapse-title text-xl font-medium">
                 Click to open this one and close others
               </div>
               <div className="collapse-content">
                 <p>hello</p>
               </div>
             </div>
             <div className="collapse collapse-arrow">
               <input type="radio" name="my-accordion-2" />
               <div className="collapse-title text-xl font-medium">
                 Click to open this one and close others
               </div>
               <div className="collapse-content">
                 <p>hello</p>
               </div>
             </div>
             <div className="collapse collapse-arrow ">
               <input type="radio" name="my-accordion-2" />
               <div className="collapse-title text-xl font-medium">
                 Click to open this one and close others
               </div>
               <div className="collapse-content">
                 <p>hello</p>
               </div>
             </div>
           </div>
         </div>
       );
};

export default Ask;