const express = require("express");
const app = express();
const port = 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// middleware
const cors = require("cors");
app.use(cors());
app.use(express.json());

// jaVkZyvbhjcHgsQW;
// assingment10;



const uri =
  "mongodb+srv://assingment10:jaVkZyvbhjcHgsQW@cluster0.qlvqjvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
   
    await client.connect();
//     add your collection
 const brandCollection = client.db("brandCollection").collection("brand");

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );




    app.get("/", (req, res) => {
      res.send("assingment-10 running");
    });

    app.get("/brand", async (req, res) => {
      const result = await brandCollection.find().toArray();
      res.send(result);
    });

    app.get("/brand/:id", async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id),
      };
      const result = await brandCollection.findOne(query);
      console.log(result);
      res.send(result);
    });
    

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });




  } finally {
       // await client.close();
  }
}
run().catch(console.dir);





















// app.get("/brand/category/:category", async (req, res) => {
    //   const category = req.params.category;
    //   const query = {
    //     _category: category,
    //   };
    //   const result = await brandCollection.find(query);
    //   console.log(result);
    //   res.send(result);
    // });