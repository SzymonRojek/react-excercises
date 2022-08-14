import React from "react";
import { Outlet } from "react-router-dom";

import "./styles.css";
import { useAuthContext } from "../../../../context/useAuth";
import Menu from "../Menu";
import StyledButton from "../../../StyledButton";
import { LinksList } from "../../LinksList";

import "./styles.css";
import { Logo } from "../../Logo";

const Header = () => {
  const { handleLogout } = useAuthContext();

  return (
    <>
      <Menu>
        <Logo className="logo-container" />

        <div className="links-button-container">
          <LinksList />

          <StyledButton
            label="log out"
            onClickHandler={handleLogout}
            className="button"
          />
        </div>
      </Menu>

      <Outlet />
    </>
  );
};

export default Header;
