const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser");
const cors = require("cors");

// midleware
app.use(
  cors({
    origin: [
      "https://car-doctor-practice-9032d.firebaseapp.com/",
      "https://car-doctor-practice-9032d.web.app/",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// console.log(process.env.DB_PASS)
// console.log(process.env.DB_USER)



// mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qlvqjvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
      const serviceCollection = client.db("serviceCollection").collection("service");
      const bookingCollection = client.db("bookingCollection").collection("booking");

      
    


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // auth releted appi

    app.post("/jwt", async(req, res) =>{
      const user = req.body;
      console.log(user)
      const token = jwt.sign(user, process.env.ACCES_TOKEN_SECRET, {expiresIn: "1h"})
      // res.send(user)
      res
        // send(token)
        .cookie("token", token, {
          httpOnly: true,
          secure: false,
          sameSite: "none",
        })

        .send({ success: true });
    })


    
 app.get("/", (req, res) => {
   res.send("car-doctor-running...");
 });

 app.get("/service", async (req, res) => {
   const result = await serviceCollection.find().toArray();
   res.send(result);
 });

  app.get("/service/:id", async (req, res) => {
    const id = req.params.id;
//     console.log("this is id", id)
    const query = {
      _id: (id),
    };
    // console.log("this is query",query)
    const result = await serviceCollection.findOne(query);
    // console.log("this service",result);
    res.send(result);
  });


  app.post("/booking", async (req, res) => {
    const user = req.body;
    //   console.log(user);
    const result = await bookingCollection.insertOne(user);
    // console.log(result);
    res.send(result);
  });

  app.delete("/booking/:id", async (req, res) => {
    const id = req.params.id;
    console.log("delete", id);
    const query = {
      _id: new ObjectId(id),
    };
    const result = await bookingCollection.deleteOne(query);
    console.log(result);
    res.send(result);
  });

  app.get("/booking", async (req, res) => {
    console.log("this is token", req.cookies.token);
    console.log("this is query",req.query.email)
    
    let query = {}
    if(req.query?.email){
      query = {email: req.query.email}
    }
    const result = await bookingCollection.find(query).toArray();
    // console.log(result)
    res.send(result);
  });



 app.listen(port, () => {
   console.log(`Simple Crud is Running on port ${port}`);
 });



  } finally {
    // Ensures that the client will close when you finish/error
//     await client.close();
  }
}
run().catch(console.dir);





