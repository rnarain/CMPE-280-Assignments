var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose= require('mongoose')
app.set('view engine', 'ejs');

const Schema = mongoose.Schema;

app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(express.json());


//Allow Access Control
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', null);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });

  //mongodb connection
var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 500,
    bufferMaxEntries: 0
};

mongoose.connect('mongodb+srv://admin:jordan(1)@handshake-cluster-atnfw.mongodb.net/handshake?retryWrites=true&w=majority', options, (err, res) => {
    if (err) {
        console.log(err);
        console.log(`MongoDB Connection Failed`);
    } else {
        console.log(`MongoDB Connected`);
    }
});

var locationSchema = new Schema({
    type: String,
    address: String,
    latitude:Number,
    longitude:Number,
    revenue: Number
}
,
{
versionKey: false
});


var location = mongoose.model('location', locationSchema);

app.get('/locations',(req,res)=>{
    location.find({}, (error, result) => {
        if (error) {
          res.send(error);
        }
        console.log(result);
        res.send(result);
    })
})

//start your server on port 3001
module.exports = app.listen(3001);
console.log("Server Listening on port 3001");