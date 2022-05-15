import ACTIONS from "./actions";

export type state = {
    currentOperand: string;
    lastOperand: string;
    operation: string;
    overwrite: boolean;
};

export type action = {
    type: string;
    digit?: string;
    operation?: string;
};

const evaluate = (state: state) => {
    let last = parseFloat(state.lastOperand);
    let current = parseFloat(state.currentOperand);
    let operation = state.operation;

    let res = 0;
    switch (operation) {
        case "+":
            res = last + current;
            break;
        case "-":
            res = last - current;
            break;
        case "×":
            res = last * current;
            break;
        case "÷":
            res = last / current;
            break;
    }
    return res.toString();
};

const reducer = (
    state: state = {
        currentOperand: "0",
        lastOperand: "",
        operation: "",
        overwrite: false,
    },
    action: action
) => {
    switch (action.type) {
        case ACTIONS.ADD_DIGIT:
            if (state.overwrite) 
                return {
                    ...state,
                    currentOperand: action.digit as string,
                }
            if (state.currentOperand.length === 14) return state;
            if (action.digit === "." && state.currentOperand.includes("."))
                return state;
            return {
                ...state,
                currentOperand:
                    state.currentOperand === "0" && action.digit !== "."
                        ? action.digit as string
                        : state.currentOperand + action.digit,
            };
        case ACTIONS.DELETE_DIGIT:
            if (state.overwrite) 
                return {
                    ...state,
                    currentOperand: "0",
                    overwrite: false,
                }
            if (state.currentOperand.length === 1)
                return {
                    ...state,
                    currentOperand: "0",
                };
            return {
                ...state,
                currentOperand: state.currentOperand.slice(0, -1),
            };
        case ACTIONS.CHOOSE_OPERATION:
            if (state.lastOperand === "") {
                return {
                    ...state,
                    lastOperand: state.currentOperand,
                    operation: action.operation as string,
                    currentOperand: "",
                };
            }
            if (state.currentOperand === "") {
                return {
                    ...state,
                    operation: action.operation as string,
                };
            }
            return {
                ...state,
                lastOperand: evaluate(state),
                operation: action.operation as string,
                currentOperand: "",
            };
        case ACTIONS.CLEAR:
            return {
                ...state,
                currentOperand: "0",
                lastOperand: "",
                operation: "",
            };
        case ACTIONS.EVALUATE:
            if (
                state.currentOperand === "" ||
                state.lastOperand === "" ||
                state.operation === ""
            )
                return state;
            return {
                ...state,
                currentOperand: evaluate(state),
                lastOperand: "",
                operation: "",
                overwrite: true,
            }
        default:
            return state;
    }
};

export default reducer;
