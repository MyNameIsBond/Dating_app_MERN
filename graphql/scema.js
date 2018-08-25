import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql/type';

import User from '../models/User';

var todoType = new GraphQLObjectType({
  name: 'todo',
  description: 'todo item',
  fields: () => ({
    itemId: {
      type: GraphQLInt,
      description: 'The id of the todo.'
    },
    item: {
      type: GraphQLString,
      description: 'The name of the todo.'
    },
    completed: {
      type: GraphQLBoolean,
      description: 'Completed todo? '
    }
  })
});
