import { Container, Thumbnail } from "./styles";

const ProfileBox: React.FC = () => {
  return (
    <Container>
      <Thumbnail src="https://pbs.twimg.com/profile_images/1357508291639840768/YHIu0jXE_400x400.jpg" />
      <span className="username">hanare#7511</span>
      <p className="status-quote">A blank, void as empty as can be.</p>
    </Container>
  );
};

export default ProfileBox;
