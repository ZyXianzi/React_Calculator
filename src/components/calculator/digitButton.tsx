import * as React from "react";
import ACTIONS from "../../redux/actions";
import { connect } from "react-redux";
import { action } from "../../redux/reducer";

interface DigitButtonProps {
    digit: string;
    add_digit: (digit: string) => action;
}

const DigitButton: React.FunctionComponent<DigitButtonProps> = (props) => {
    return (
        <button
            className="light-color"
            onClick={() => props.add_digit(props.digit)}
        >
            {props.digit}
        </button>
    );
};

const mapDispatchToProps = {
    add_digit: (digit: string): action => {
        return {
            type: ACTIONS.ADD_DIGIT,
            digit: digit,
        };
    },
};

export default connect(null, mapDispatchToProps)(DigitButton);
