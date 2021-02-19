import { Container, FeedContainer, Page } from "./styles";

import CoverPhoto from "../../components/coverphoto";
import Header from "../../components/header";
import ProfileBox from "../../components/profilebox";

const Dashboard = () => {
  return (
    <>
      <Header />
      <CoverPhoto />
      <Page>
        <Container>
          <ProfileBox />
          <FeedContainer>
            <span className="title">Overview</span>
            <hr />
          </FeedContainer>
        </Container>
      </Page>
    </>
  );
};

export default Dashboard;
