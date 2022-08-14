import { useViewport } from "../../hooks/useViewport";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

const Navigation = () => {
  const { width } = useViewport();
  const WIDTH_VALUE = 1024;

  return width > WIDTH_VALUE ? <DesktopNavigation /> : <MobileNavigation />;
};

export default Navigation;
