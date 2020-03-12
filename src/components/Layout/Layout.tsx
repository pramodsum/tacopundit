import React from "react";
import "typeface-roboto";

import {
  Container,
  AppBar,
  Typography,
  Toolbar,
  Box,
  IconButton
} from "@material-ui/core";

import "./Layout.css";

const Layout: React.FC = ({ children }) => (
  <>
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={() => window.location.assign("/")}>
          <Typography className="title" variant="h6">
            Home
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
    <Container maxWidth="lg">
      <Box py={4}>{children}</Box>
    </Container>
  </>
);

export default Layout;
