import React from 'react';

import NumberCard from './NumberCard.js';

let interval_id;


class LuckyThree extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id:""
        };
        this.displayRandomNumbers = this.displayRandomNumbers.bind(this);
    }

    cardClickHandler=(msg)=>{
        this.displayRandomNumbers(msg)
        //this.displayRandomNumbers();
    }
    displayRandomNumbers=(msg)=>{
        //document.getElementById(msg).innerText=msg;
        let maxNumber = 9;
    
        interval_id = setInterval(() => {
            document.getElementById(msg).innerText=Math.floor(Math.random() * (maxNumber + 1));
        },100);
        document.getElementById(msg).style.fontSize="50px"
        document.getElementById(msg).style.fontWeight="700"
        document.getElementById(msg).style.position="relative"
        document.getElementById(msg).style.textAlign="center"
    }
    // displayRandomNumbers = (event)=>{
    //     console.log(event.currentTarget.childNodes[0])
    //     this.setState({id:event.currentTarget.childNodes[0]});
    //     let maxNumber = 9;
    
    //     interval_id = setInterval(() => {
    //         event.currentTarget.childNodes[0].innerText=Math.floor(Math.random() * (maxNumber + 1));
    //     },200);
    // }
    
    tryLuckClickHandler=()=>{
        this.checkAllCards()
    }
    
    checkAllCards = () => {
        for (let i = 1; i <= interval_id; i++) {
            window.clearInterval(i);
        }
        for (let i = 1; i < this.props.idArr.length; i++) {
            if (document.getElementById(this.props.idArr[i]).innerText !== document.getElementById(this.props.idArr[i-1]).innerText) {
                alert("Ohh! You lost!");
                return;
            }
        }
        alert("Yay! You won!");
    }

    render() {
        return (
            <div className="main-container">
                <div className="number-cards-container">
                    <NumberCard id={this.props.idArr[0]} color={this.props.colorsArr[0]} cardClickHandler={this.cardClickHandler}/>
                    <NumberCard id={this.props.idArr[1]} color={this.props.colorsArr[1]} cardClickHandler={this.cardClickHandler}/>
                    <NumberCard id={this.props.idArr[2]} color={this.props.colorsArr[2]} cardClickHandler={this.cardClickHandler}/>
                </div>
                <input id="tryYourLuckBtn" className="custom-btn" type="button" value="Try Your Luck" onClick={this.tryLuckClickHandler}/>
            </div>
        )
    }
}

export default LuckyThree;
