import * as React from "react";
import Base from "./base";
import { connect } from "react-redux";
import { state } from "../../redux/reducer";
import ACTIONS from "../../redux/actions";
import { action } from "../../redux/reducer";
import DigitButton from "../calculator/digitButton";
import OperationButton from "../calculator/operationButton";

interface CalculatorProps {
    lastOperand: string;
    operation: string;
    currentOperand: string;
    delete_digit: () => action;
    clear: () => action;
    evaluate: () => action;
}

const Calculator: React.FunctionComponent<CalculatorProps> = (props) => {
    return (
        <Base>
            <div className="calculator">
                <div className="output">
                    <div className="last-output">
                        {props.lastOperand}
                        {props.operation}
                    </div>
                    <div className="current-output">{props.currentOperand}</div>
                </div>
                <button className="button-ac deep-color" onClick={props.clear}>
                    AC
                </button>
                <button className="deep-color" onClick={props.delete_digit}>
                    Del
                </button>
                <OperationButton operation="÷" />
                <DigitButton digit={"7"} />
                <DigitButton digit={"8"} />
                <DigitButton digit={"9"} />
                <OperationButton operation="×" />
                <DigitButton digit={"4"} />
                <DigitButton digit={"5"} />
                <DigitButton digit={"6"} />
                <OperationButton operation="-" />
                <DigitButton digit={"1"} />
                <DigitButton digit={"2"} />
                <DigitButton digit={"3"} />
                <OperationButton operation="+" />
                <DigitButton digit={"0"} />
                <DigitButton digit={"."} />
                <button className="button-equal" onClick={props.evaluate}>=</button>
            </div>
        </Base>
    );
};

const mapStateToProps = (state: state) => {
    return {
        currentOperand: state.currentOperand,
        lastOperand: state.lastOperand,
        operation: state.operation,
    };
};

const mapDispatchToProps = {
    delete_digit: (): action => {
        return {
            type: ACTIONS.DELETE_DIGIT,
        };
    },
    clear: (): action => {
        return {
            type: ACTIONS.CLEAR,
        };
    },
    evaluate: (): action => {
        return {
            type: ACTIONS.EVALUATE,
        };
    },
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
