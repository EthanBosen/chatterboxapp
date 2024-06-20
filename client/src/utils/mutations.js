import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($email: String!, $username: String!, $password: String!) {
    addUser(email: $email, username: $username, password: $password) {
      token
      user {
        email
        username
        password
      }
    }
  }
`;

export const LOGIN_USER = gql`                            
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_MEMORY = gql`
mutation addMemory($memory: String!) {
  addMemory(memory: $memory) {
    _id
    memory
  }
}
`;