import React from 'react';

const numbers = (props) => {
    return(
        <div>
            <label>Enter a number:</label>
            <input type="number" 
                    value={props.num} 
                    onChange={props.change} /> 
            <button type="submit" onClick={props.click}>Check</button>
        </div>
    );
}

export default numbers;