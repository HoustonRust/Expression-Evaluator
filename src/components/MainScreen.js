import React from "react";
import styles from "../styles";
import { connect } from "react-redux";
import {
  Typography,
  TextField,
  Grid,
  Button,
  makeStyles,
} from "@material-ui/core";
import { UpdateOperand, PushInOperands } from "../store/actions/actions";

const useStyles = makeStyles((theme) => styles);

const Start = (props) => {
  const style = useStyles();

  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs={11} sm={6} md={6} lg={6} xl={6}>
        <Typography
          className={style.title}
          variant="h3"
          component="h1"
          gutterBottom
        >
          {props.title}
        </Typography>
      </Grid>

      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid item xs={10} sm={10} md={6} lg={6} xl={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Please enter a number"
            type="number"
            style={{ height: 80 + "px" }}
            onChange={(event) => props.onUpdateOperand(event.target.value)}
            inputProps={{
              style: {
                height: 80 + "px",
                padding: "0 14px",
              },
            }}
          ></TextField>
        </Grid>

        <Grid item xs={10} sm={10} md={4} lg={4} xl={4}>
          <Button
            onClick={() => props.onPushInOperands(props.operand)}
            className={style.btn}
            variant="contained"
            color="primary"
            style={{ height: "80px" }}
            fullWidth
            disabled={!props.operand}
          >
            Add number
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    title: state.title,
    operands: state.operands,
    operand: state.operand,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateOperand: (number) => dispatch(UpdateOperand(number)),
    onPushInOperands: (number) => dispatch(PushInOperands(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Start);
