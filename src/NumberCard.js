import React from 'react';

const NumberCard = function (props) {
   
    // TODO 3: Add the onClick handler to the div tag and assign it the value (cardClickHandler) which is passed down as props
    return (
        <div id={props.id} className="card-container" style={{ color: (props.color), position: "relative",justifyContent:"center", transform:"inherit" }} onClick={()=>props.cardClickHandler(props.id)}>
            <span>Click</span>
        </div>
    )
}

export default NumberCard;