const ExecAction = (operator, operandOne, operandTwo) => {
  switch (operator) {
    case "+":
      return Number(operandOne) + Number(operandTwo);

    case "-":
      return Number(operandOne) - Number(operandTwo);

    case "/":
      if (Number(operandTwo) === 0) {
        return 0;
      }

      return Number(operandOne) / Number(operandTwo);

    case "*":
      return Number(operandOne) * Number(operandTwo);

    default: {
      return 0;
    }
  }
};

export default ExecAction;
