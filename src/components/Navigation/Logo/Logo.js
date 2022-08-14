import LogoDevIcon from "@mui/icons-material/LogoDev";
import { Link } from "react-router-dom";

const Logo = ({ className }) => (
  <div className={className}>
    <Link to="/">
      <LogoDevIcon className="logo" style={styles.logo} />
    </Link>
  </div>
);

const styles = {
  logo: { fontSize: 50, cursor: "pointer", color: "#fff" },
};

export default Logo;
