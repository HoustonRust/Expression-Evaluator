import React from "react";
import styles from "../styles";
import { connect } from "react-redux";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { UpdateOperand, PushInOperands } from "../store/actions/actions";

const useStyles = makeStyles((theme) => styles);

const SecondaryScreen = (props) => { 
  const style = useStyles();

  return (
    <>
      <Grid container alignItems="center" justify="center">
        <Grid
          container
          alignItems="center"
          justify="center"
          spacing={2}
          style={{ maxWidth: "580px" }}
        >
          {props.operands.map((operand, index) => {
            return (
              <Grid item xs={3} key={index}>
                <Paper className={style.paper} elevation={0}>
                  <Typography
                    variant="h4"
                    component="span"
                    style={{ color: "#414145" }}
                  >
                    {operand}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}

          {props.selectedOperator ? (
            <Grid item xs={3}>
              <Paper className={style.paper} elevation={0}>
                <Typography
                  variant="h4"
                  component="span"
                  style={{ color: "#414145" }}
                >
                  {props.selectedOperator}
                </Typography>
              </Paper>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <Typography
          variant="h3"
          component="span"
          style={{ color: "#414145", marginTop: "30px", fontWeight: "100" }}
        >
          =
        </Typography>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <Typography
          variant="h2"
          component="span"
          color="primary"
          style={{ marginTop: "30px", fontWeight: "100" }}
        >
          {props.result}
        </Typography>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    operands: state.operands,
    selectedOperator: state.selectedOperator,
    result: state.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateOperand: (number) => dispatch(UpdateOperand(number)),
    onPushInOperands: (number) => dispatch(PushInOperands(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondaryScreen);
