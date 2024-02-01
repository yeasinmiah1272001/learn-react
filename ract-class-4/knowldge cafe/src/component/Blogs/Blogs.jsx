import React, { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [remainingTime, setRemainingTime] = useState(0);
  const [stillTime, setStillTime] = useState(20)

  useEffect(() => {
    fetch("kk.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleTime = (time) => {
    const newTime = remainingTime + time;
    console.log(newTime)
    setRemainingTime(newTime);

    const MulTime =  stillTime - newTime
      setStillTime(MulTime);
      
      //  if(MulTime > 0){
      
       
        
      //  }
       
      //  


  };

  return (
    <div>
      <h1 className="text-2xl mx-10">Blogs: {blogs.length}</h1>

      <div className="flex gap-12 justify-between mx-10">
        {/* left side */}
        <div>
          {blogs.map((blog) => (
            <div className="mx-10 my-4" key={blog.id}>
              <img src={blog.cover} alt="" />

              <div className="flex justify-between items-center">
                <img
                  className="w-10 flex justify-between items-center"
                  src={blog.author_img}
                  alt=""
                />
                <div>
                  <h1>{blog.author}</h1>
                  <p>{blog.posted_date}</p>
                </div>
                <div className="flex gap-2">
                  <p>Minute {blog.reading_time}</p>
                  <button onClick={() => handleBookmark(blog)}>
                    <FaBookmark />
                  </button>
                </div>
              </div>
              <h1 className="text-xl">{blog.title}</h1>

              <button onClick={() => handleTime(blog.reading_time)}>
                {" "}
                Mark as read
              </button>
            </div>
          ))}
        </div>
        {/* right side */}
        <div className="bg-gray-300 p-12 w-96">
          <h1 className="text-center text-2xl">
            Credit Hour Remaining : {stillTime}
          </h1>
          <h1 className="text-center text-2xl">
            Remaining Time : {remainingTime}
          </h1>
          <br />
          <h1 className="text-center text-2xl">
            Bookmarks: {bookmarks.length}
          </h1>
          <hr />
          <div>
            {bookmarks.map((bookmark) => (
              <h1 className="text-2xl p-3 my-4 bg-white" key={bookmark.id}>
                {bookmark.title}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
