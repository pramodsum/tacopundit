import React from "react";
import "typeface-roboto";
import { Typography, Box } from "@material-ui/core";

import Layout from "../components/Layout/Layout";

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        pt={9}
      >
        <Typography variant="h3">AWKO TACO</Typography>
        <Typography variant="h6">Looks like this page doesn't exist</Typography>
        <img
          alt="dancing-taco"
          src="https://media1.tenor.com/images/e051d1974d1319a134223480614ffbc8/tenor.gif?itemid=10576778"
        />
      </Box>
    </Layout>
  );
};

export default NotFoundPage;
