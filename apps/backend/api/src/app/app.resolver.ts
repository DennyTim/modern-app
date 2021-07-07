import {GraphQLScalarType, Kind} from "graphql";
import GraphQLJSON from "graphql-type-json";

export const resolverMap = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    // Value from the client
    serialize(value) {
      return value.getTime();
    },
    // Value send to the client
    parseValue(value) {
      return new Date(value);
    },
    // ast value is always in string format
    // Invalid hard-coded value (not an integer)
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(parseInt(ast.value, 10));
      }
      return null;
    },
  }),
  JSON: GraphQLJSON,
};
