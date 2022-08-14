import withUser from "../HOC/withUser";
import { StyledWrapper } from "../components/StyledWrapper";

const HomePage = ({ userData }) => (
  <StyledWrapper>
    <h1>Home Page</h1>
    <h2>Welcome {userData.name}</h2>
  </StyledWrapper>
);

export default withUser(HomePage);
