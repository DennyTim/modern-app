import {GraphQLScalarType, Kind} from "graphql";
import GraphQLJSON from "graphql-type-json";

export const resolverMap = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    // Value from the client
    serialize(value: Date) {
      return value.getTime();
    },
    // Value send to the client
    parseValue(value: string) {
      return new Date(value);
    },
    // ast value is always in string format
    // Invalid hard-coded value (not an integer)
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return new Date(ast.value);
      }
      return null;
    },
  }),
  JSON: GraphQLJSON,
};
