import { Background, Container } from './styles';
import { FaLock, FaUser } from 'react-icons/fa';
import { FormEvent, useCallback, useState } from "react";

import Input from '../../components/input';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/client'

const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    sessionCreate(input: {
      username: $username
      password: $password
    }) {
      ...on Session {
        token
      }
      ...on Error {
        message,
        code
      }
    }
  }
`;

const App: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [sessionCreate, { data }] = useMutation(LOGIN);
  
  const handleSubmit = useCallback(async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await sessionCreate({ variables: { username, password } });
    console.log(data); 
  }, [username, password])

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>
          ANIME LIBRARY
        </h1>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          id="username"
          icon={<FaUser/>}
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          name="password"
          id="password"
          icon={<FaLock />}
        />
        <button type="submit">Log In</button>
      </form>
      <Background />

    </Container>
  );
};

export default App;
