import React from "react";
import { connect } from "react-redux";
import { Container, Box, Grid} from "@material-ui/core";
import ActionBar from "./components/ActionBar";
import MainScreen from "./components/MainScreen";
import SecondaryScreen from "./components/SecondaryScreen";

const App = (props) => {

  return (
    <Container style={{ maxWidth: "1200px" }}>
      <Box>
        <Grid
          container
          spacing={0}
          direction="column"
          justify="center"
          style={{ minHeight: "100vh", paddingBottom: "180px" }}
        >
          {props.operands.length === 0 ? (
            <MainScreen></MainScreen>
          ) : (
            <SecondaryScreen></SecondaryScreen>
          )}
        </Grid>

        {props.operands.length !== 0 ? <ActionBar></ActionBar> : null}
      </Box>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    operands: state.operands,
  };
};

export default connect(mapStateToProps)(App);
