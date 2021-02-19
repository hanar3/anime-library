import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 310px;
  width: 290px;
  background: rgb(32,32,36);
  padding: 20px;
  border-radius: 8px;
  span.username {
    color: #8b949e;
  }
  p.status-quote {
    color: #8b949e;
    font-style: italic;
    font-size: 13px;
  }
`;

export const Thumbnail = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: red;
  margin-bottom: 15px;
`;