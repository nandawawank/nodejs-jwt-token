const mongo = require('mongoose');
require('dotenv').config();

mongo.connect(process.env.MONGO_URL, {
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err)=>{
    if(!err){
        console.log('Connection to mongo successful');
    }else{
        console.log('No Connection');
    }
});