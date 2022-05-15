import * as React from "react";
import Base from "./base";

interface CalculatorProps {}

const Calculator: React.FunctionComponent<CalculatorProps> = () => {
    return (
        <Base>
            <div className="calculator">
                <div className="output">
                    <div className="last-output">123 *</div>
                    <div className="current-output">96</div>
                </div>
                <button className="button-ac deep-color">AC</button>
                <button className="deep-color">Del</button>
                <button className="deep-color">/</button>
                <button className="light-color">7</button>
                <button className="light-color">8</button>
                <button className="light-color">9</button>
                <button className="deep-color">*</button>
                <button className="light-color">4</button>
                <button className="light-color">5</button>
                <button className="light-color">6</button>
                <button className="deep-color">-</button>
                <button className="light-color">1</button>
                <button className="light-color">2</button>
                <button className="light-color">3</button>
                <button className="deep-color">+</button>
                <button className="light-color">0</button>
                <button className="light-color">.</button>
                <button className="button-equal">=</button>
            </div>
        </Base>
    );
};

export default Calculator;
