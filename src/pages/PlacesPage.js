import withUser from "../HOC/withUser";
import { StyledWrapper } from "../components/StyledWrapper";

const PlacesPage = ({ userData }) => (
  <StyledWrapper>
    <h1>Places Page</h1>
    <h2>{userData.email}</h2>
  </StyledWrapper>
);

export default withUser(PlacesPage);
