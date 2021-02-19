import { FormEvent, useCallback, useState } from "react";

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

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [sessionCreate, { data }] = useMutation(LOGIN);
  
  const handleSubmit = useCallback(async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await sessionCreate({ variables: { username, password } });
    console.log(data); 
  }, [username, password])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <span>Login</span>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          id="username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          name="password"
          id="password"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Register;
