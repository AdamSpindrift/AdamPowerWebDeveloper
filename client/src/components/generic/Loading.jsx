import React from "react";

function Loading () {

    return (
        <div className="loading">
            <h3 className="loading__message">Please wait...</h3>
            <img className="loading__spinner" src="../images/Spinner_v1.png" alt="Loading"></img>
        </div>
    )
      
};

export default Loading;