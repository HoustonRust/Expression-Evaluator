import {
  PUSH_IN_OPERANDS,
  UPDATE_OPERAND,
  SET_OPERATOR,
  ADD_OPERATION,
} from "./actionTypes";

export function PushInOperands(number) {
  return {
    type: PUSH_IN_OPERANDS,
    payload: number,
  };
}

export function UpdateOperand(number) {
  return {
    type: UPDATE_OPERAND,
    payload: number,
  };
}

export function SetOperator(operator) {
  return {
    type: SET_OPERATOR,
    payload: operator,
  };
}

export function AddOperation(operation) {
  return {
    type: ADD_OPERATION,
    payload: operation,
  };
}
