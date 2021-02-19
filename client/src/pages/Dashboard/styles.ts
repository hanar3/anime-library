import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: #121212;
  z-index: 10;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  padding: 40px 0;
  margin-top: -60px;
`;

export const FeedContainer = styled.div`
  margin-left: 50px;
  background: rgb(32, 32, 36);
  flex: 1;
  height: 600px;
  border-radius: 8px;
  padding: 15px;

  span.title {
    color: white;
    text-transform: uppercase;
    font-size: 32px;
    color: #8b949e;
    width: 100%;
  }

  hr {
    margin: 7px 0;
    border: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.32);
  }
`;
