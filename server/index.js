const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP  } = require('express-graphql');
const schema = require('./schema/schema');
const dbConnect = require('./config/db');
const port = process.env.PORT || 5000;



const app = express();

// db Connection


dbConnect();

app.use(cors());

app.use('/tsm', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))






app.listen(port, console.log(` TSM server running on ${port}`));