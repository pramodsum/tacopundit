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
import { Link } from "react-router-dom";

const Layout: React.FC = ({ children }) => (
  <>
    <AppBar position="static">
      <Toolbar>
        <IconButton>
          <Link to="/" className="title">
            <Typography variant="h6">Home</Typography>
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
    <Container maxWidth="lg">
      <Box py={4}>{children}</Box>
    </Container>
  </>
);

export default Layout;
