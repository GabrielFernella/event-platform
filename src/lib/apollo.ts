import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4p2lzm11lim01xk4gqffg2j/master',
  cache: new InMemoryCache(),
});
