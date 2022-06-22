import React from "react";
import './ProgressBar.css'




const ProgressBar = (props) => {
    const { bgcolor, completed, name, priority, status } = props;

    const containerStyles = {
        height: 20,
        width: 500,
        backgroundColor: "#91908F",
        borderRadius: 50,
        margin: 25
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out',
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }



    return (
        <>
            <div className="info">
                <div className="taskname">{name}</div>
                <div className="taskpriority">Priority : {priority}</div>
                <div className="taskname">{status}</div>
            </div>
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>{`${completed}%`}</span>
                </div>
            </div>
        </>
    );
};

export default ProgressBar;