// import Blogs from "./component/Blogs/Blogs";

import Blogs from "./component/Blogs/Blogs";


const App = () => {
  return (
    <div>
      <div className="flex justify-between mx-10 border-b-2 p-4">
        <h1 className="text-2xl">Knowledge Cafe</h1>
        <h1 className="text-2xl">Photo url</h1>
      </div>
      <div>
        <Blogs></Blogs>
      </div>
    </div>
  );
};

export default App;