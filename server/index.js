const express = require ('express');
require('dotenv').config();
const cors = require ('cors');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')
const colors = require('colors')
const app = express();
const connectDb = require('./config/db.js')


app.use(cors());

//Connect to database
connectDb();

const port = process.env.PORT || 5000;

app.use('/graphql', graphqlHTTP(
    {
        schema,
        graphiql: process.env.NODE_ENV === 'development'
    })
);

app.listen(port, ()=> console.log(`Server running on ${port}`));



