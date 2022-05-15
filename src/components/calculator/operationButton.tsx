import * as React from "react";
import { connect } from "react-redux";
import ACTIONS from "../../redux/actions";
import { action } from "../../redux/reducer";

interface OperationButtonProps {
    operation: string;
    choose_operation: (operation: string) => action;
}

const OperationButton: React.FC<OperationButtonProps> = (props) => {
    return (
        <button
            className="deep-color"
            onClick={() => props.choose_operation(props.operation)}
        >
            {props.operation}
        </button>
    );
};

const mapDispatchToProps = {
    choose_operation: (operation: string): action => {
        return {
            type: ACTIONS.CHOOSE_OPERATION,
            operation: operation,
        };
    },
};

export default connect(null, mapDispatchToProps)(OperationButton);
