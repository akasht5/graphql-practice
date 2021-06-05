import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-boost';
import { typeDefs,resolvers } from './graphql/resolvers'
import { default as initialData } from './graphql/initial-data'

import { store, persistor } from './redux/store';

import './index.css';
import AppContainer from './App/App.container';

const httpLink = createHttpLink({
  uri : 'https://crwn-clothing.com'
})

const cache = new InMemoryCache();

const client = new ApolloClient({
  link : httpLink,
  cache,
  typeDefs,
  resolvers
})

client.writeData({
  data : initialData
})

ReactDOM.render(
  <ApolloProvider client={client}>
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </BrowserRouter>
  </Provider>
  </ApolloProvider>
  ,
  document.getElementById('root')
);
