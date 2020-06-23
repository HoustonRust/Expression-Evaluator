import React from "react";
import { connect } from "react-redux";
import {
  Box,
  Grid,
  Select,
  MenuItem,
  FormControl,
  TextField,
  Button,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import styles from "../styles";
import {
  UpdateOperand,
  PushInOperands,
  SetOperator,
  AddOperation,
} from "../store/actions/actions";

const useStyles = makeStyles((theme) => styles);

const ActionBar = (props) => {
  const style = useStyles();

  return (
    <Box>
      <Grid
        container
        spacing={0}
        alignItems="center"
        direction="column"
        justify="center"
      >
        <Grid
          container
          alignItems="center"
          justify="center"
          spacing={1}
          style={{
            position: "fixed",
            bottom: "20px",
            maxWidth: "1200px",
            paddingRight: "-20px",
          }}
        >
          <Grid item xs={5} md={3}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="operator-input">Operator</InputLabel>
              <Select
                labelId="operator-input"
                label="Operator"
                value={props.operator}
                onChange={(e) => props.onSetOperator(e.target.value)}
              >
                <MenuItem value=""> 
                  <em>None</em>
                </MenuItem>

                {props.operatorList.map((operator, index) => {
                  return (
                    <MenuItem value={operator} key={index}>
                      {operator}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={5} md={3}>
            <TextField
              fullWidth
              variant="outlined"
              label="Operand"
              className={style.btn}
              onChange={(e) => props.onUpdateOperand(e.target.value)}
              type="number"
            ></TextField>
          </Grid>
          <Grid item xs={10} md={3}>
            <Button
              variant="contained"
              className={style.btn}
              fullWidth
              color="primary"
              onClick={() =>
                props.onAddOperation({
                  operand: props.operand,
                  operator: props.operator,
                })
              }
              style={{ height: "56px" }}
              disabled={!props.operator || !props.operand}
            >
              Add Operation
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    operands: state.operands,
    operand: state.operand,
    operatorList: state.operatorList,
    operator: state.operator,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateOperand: (number) => dispatch(UpdateOperand(number)),
    onPushInOperands: (number) => dispatch(PushInOperands(number)),
    onSetOperator: (operator) => dispatch(SetOperator(operator)),
    onAddOperation: (operation) => dispatch(AddOperation(operation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);
