import Author from '../Author';
import { authors, poem } from '../../poemsApi';
import RootQuery from './rootQuery.graphql';

export const resolvers = {
  RootQuery: {
    author(_, { name }) {
      return { name };
    },
    authors() {
      return authors().then(res => res.authors);
    },
    poem(_, { author, title }) {
      return poem(author, title);
    },
  },
};

export default () => [RootQuery, Author];