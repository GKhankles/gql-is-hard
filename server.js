var fs = require('fs');
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(fs.readFileSync('schema.gql').toString());
 
// The root provides a resolver function for each API endpoint
var root = require('./resolver.js');

//const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');