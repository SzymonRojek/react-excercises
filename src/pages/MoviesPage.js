import withUser from "../HOC/withUser";
import { StyledWrapper } from "../components/StyledWrapper";

const MoviesPage = ({ userData }) => (
  <StyledWrapper>
    <h1>Movies Page</h1>
    <h2>{userData.email}</h2>
  </StyledWrapper>
);

export default withUser(MoviesPage);
