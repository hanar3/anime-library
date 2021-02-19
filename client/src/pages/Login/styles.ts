import { Container as InputContainer } from '../../components/input/styles';
import background from '../../assets/background.jpg';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background: #121212;
  form {
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0 20px;
    max-width: 550px;

    h1{
      color: rgba(255,255,255,.88);
      padding: 10px;
      border-bottom: 3px solid rgba(255,255,255,.88);
      border-top: 3px solid rgba(255,255,255,.88);
      margin-bottom: 15px;
    }

    ${InputContainer} + ${InputContainer} {
      margin-top: 15px;
    }

    button {
      margin-top: 15px;
      width: 340px;
      height: 50px;
      background: #BB86FC;
      border: 0;
      color: #000000;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${background});
`;