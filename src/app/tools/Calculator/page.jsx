'use client';
import { useReducer } from "react";
import "./calculator.css";
// import '../../globals.css';

const Calculator = () => {
  const initialState = {
    currentOperand: "",
    previousOperand: "",
    operation: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "addDigit":
        if (state.overwrite == true) {
          return {
            ...state,
            currentOperand: action.payload,
            overwrite: false,
          };
        }
        if (action.payload === "0" && state.currentOperand === "0")
          return state;
        if (action.payload === "." && state.currentOperand.includes("."))
          return state;
        return {
          ...state,
          currentOperand: `${state.currentOperand || ""}${action.payload}`,
        };

      case "clear":
        return initialState;

      case "operation":
        if (state.currentOperand === "" && state.previousOperand === "") {
          return state;
        }

        if (state.previousOperand === "") {
          return {
            ...state,
            previousOperand: state.currentOperand,
            operation: action.payload,
            currentOperand: "",
          };
        }

        if (state.currentOperand === "") {
          if (action.payload === "-") {
            return {
              ...state,
              currentOperand: "-",
            };
          }
          console.log(state);

          return {
            ...state,
            operation: action.payload,
          };
        }

        if (state.currentOperand === "-") {
          return {
            ...state,
            operation: action.payload,
            currentOperand:""
          };
        }
        return {
          ...state,
          previousOperand: evaluate(state),
          operation: action.payload,
          currentOperand: "",
        };

      case "equals":
        if (
          state.currentOperand === "" ||
          state.previousOperand === "" ||
          state.operation === null
        ) {
          return state;
        }
        return {
          ...state,
          overwrite: true,
          currentOperand: evaluate(state),
          previousOperand: "",
          operation: null,
        };

      default:
        return state;
    }
  };

  const evaluate = (state) => {
    const curr = parseFloat(state.currentOperand);
    const prev = parseFloat(state.previousOperand);

    if (isNaN(curr) || isNaN(prev)) return "";

    let result = "";
    switch (state.operation) {
      case "+":
        result = prev + curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "*":
        result = prev * curr;
        break;
      case "/":
        result = prev / curr;
        break;
      default:
        return "";
    }
    return result.toString();
  };

  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="container">
      <div className="calculator-Grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand} {operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button
        id="clear"
        className="span-three"
        onClick={() => dispatch({ type: "clear" })}
      >
        AC
      </button>
      <button
        id="divide"
        onClick={() => dispatch({ type: "operation", payload: "/" })}
      >
        /
      </button>
      <button
        id="one"
        onClick={() => dispatch({ type: "addDigit", payload: "1" })}
      >
        1
      </button>
      <button
        id="two"
        onClick={() => dispatch({ type: "addDigit", payload: "2" })}
      >
        2
      </button>
      <button
        id="three"
        onClick={() => dispatch({ type: "addDigit", payload: "3" })}
      >
        3
      </button>
      <button
        id="multiply"
        onClick={() => dispatch({ type: "operation", payload: "*" })}
      >
        *
      </button>
      <button
        id="four"
        onClick={() => dispatch({ type: "addDigit", payload: "4" })}
      >
        4
      </button>
      <button
        id="five"
        onClick={() => dispatch({ type: "addDigit", payload: "5" })}
      >
        5
      </button>
      <button
        id="six"
        onClick={() => dispatch({ type: "addDigit", payload: "6" })}
      >
        6
      </button>
      <button
        id="add"
        onClick={() => dispatch({ type: "operation", payload: "+" })}
      >
        +
      </button>
      <button
        id="seven"
        onClick={() => dispatch({ type: "addDigit", payload: "7" })}
      >
        7
      </button>
      <button
        id="eight"
        onClick={() => dispatch({ type: "addDigit", payload: "8" })}
      >
        8
      </button>
      <button
        id="nine"
        onClick={() => dispatch({ type: "addDigit", payload: "9" })}
      >
        9
      </button>
      <button
        id="subtract"
        onClick={() => dispatch({ type: "operation", payload: "-" })}
      >
        -
      </button>
      <button
        id="decimal"
        onClick={() => dispatch({ type: "addDigit", payload: "." })}
      >
        .
      </button>
      <button
        id="zero"
        onClick={() => dispatch({ type: "addDigit", payload: "0" })}
      >
        0
      </button>
      <button
        id="equals"
        className="span-two"
        onClick={() => dispatch({ type: "equals", payload: "=" })}
      >
        =
      </button>
    </div>
    </div>
    
  );
};

export default Calculator;
