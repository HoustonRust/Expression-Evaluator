import {
  PUSH_IN_OPERANDS,
  UPDATE_OPERAND,
  SET_OPERATOR,
  ADD_OPERATION,
} from "./actions/actionTypes";
import ExecAction from "../helpers";

const initialState = {
  title: "Expression Evaluator",
  operands: [],
  operand: 0,
  selectedOperator: "",
  operator: "",
  result: 0,
  operatorList: ["+", "-", "*", "/"],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_IN_OPERANDS: {
      if (!action.payload) return state;

      return {
        ...state,
        operands: [...state.operands, action.payload],
        result: action.payload,
        operand: "",
      };
    }

    case ADD_OPERATION: {
      const operation = action.payload;

      let operands = [...state.operands];

      if (state.result) {
        operands = [];

        operands.push(state.result, operation.operand);
      } else {
        operands.push(operation.operand);
      }

      return {
        ...state,
        operands,
        result: ExecAction(action.payload.operator, operands[0], operands[1]),
        selectedOperator: action.payload.operator,
      };
    }

    case UPDATE_OPERAND: {
      return {
        ...state,
        operand: action.payload,
      };
    }

    case SET_OPERATOR: {
      return {
        ...state,
        operator: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
