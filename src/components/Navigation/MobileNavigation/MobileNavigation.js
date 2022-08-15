import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./styles.css";
import { useAuthContext } from "../../../context/useAuth";
import { LinksList } from "../LinksList";
import { Logo } from "../Logo";
import StyledButton from "../../StyledButton";

const MobileNavigation = () => {
  const [open, setDrawerState] = useState(false);
  const { handleLogout } = useAuthContext();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    //changes the function state according to the value of open
    setDrawerState(open);
  };

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="lg" className="app-bar">
          <Toolbar>
            <Logo className="logo-container" />

            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            <Drawer anchor="left" open={open}>
              <Box
                className="box-drawer"
                sx={{ width: window.innerWidth * 0.5 }}
              >
                <Box className="box-close-button">
                  <IconButton
                    className="button-close"
                    onClick={toggleDrawer(false)}
                  >
                    <CloseIcon className="icon-close" />
                  </IconButton>
                </Box>

                <Divider />

                <Box className="links-box">
                  <LinksList toggleDrawer={toggleDrawer(false)} />
                </Box>

                <StyledButton
                  label="Log out"
                  onClickHandler={handleLogout}
                  className="button-logout"
                />
              </Box>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>

      <Outlet />
    </>
  );
};

export default MobileNavigation;
