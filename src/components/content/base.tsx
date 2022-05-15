import * as React from 'react';

interface BaseProps {
    children: React.ReactNode;
}
 
const Base: React.FunctionComponent<BaseProps> = (props) => {
    return (
        <React.Fragment>
            <div className="card" style={{marginTop: "20px"}}>
                <div className="card-body">
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Base;