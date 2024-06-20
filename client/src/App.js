import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Friends from "./pages/Friends"
import Bookmarks from "./pages/Bookmarks"
import Notifications from "./pages/Notifications"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Comments from "./pages/Comments";
import Likes from "./pages/Likes"

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  uri: '/graphql',
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


export default function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path='/' element={< Login />} />
            <Route path='home' element={<Home />} />
            <Route path='profile' element={<Profile />} />
            <Route path='friends' element={<Friends />} />
            <Route path='bookmarks' element={<Bookmarks />} />
            <Route path='notifications' element={<Notifications />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='profile/comments' element={<Comments />} />
            <Route path='profile/likes' element={<Likes />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  )
} 
