import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
//import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import './index.css'


const client = new ApolloClient({
  uri: 'http://localhost:4005/graphql',
  cache: new InMemoryCache(),
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <div className='app'>
      <App  />
    </div>
  </ApolloProvider>
  , document.getElementById('root'));
