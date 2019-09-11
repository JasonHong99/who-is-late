const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://JasonHong:Jason04231999%21@gettingstarted-8uszf.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("connected");
  // perform actions on the collection object
  client.close();
});
