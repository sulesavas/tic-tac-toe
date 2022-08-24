import React from 'react'

function Square({ value, handleClick }) {


    return (
        <button className="btn btn-secondary square"
            onClick={() => {
                if (value === '')
                    handleClick();
            }} >
            {value}
        </button>
    );

}




export default Square;
