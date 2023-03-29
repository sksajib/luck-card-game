import React from 'react';

import NumberCard from './NumberCard.js';

let interval_id;


class LuckyThree extends React.Component {
    constructor(props){
        super(props);
        this.state={
            numberCards:["Click","Click","Click"]
        };
        this.displayRandomNumbers = this.displayRandomNumbers.bind(this);
    }

    cardClickHandler=(msg,cardIndex)=>(e)=>{
       //console.log(msg)
        this.displayRandomNumbers(e,msg,cardIndex)
        //this.displayRandomNumbers();
    }
    displayRandomNumbers=(e,msg,cardIndex)=>{
        //document.getElementById(msg).innerText=msg;
        let maxNumber = 9;
        
        interval_id = setInterval(() => {
            //document.getElementById(msg).innerText=Math.floor(Math.random() * (maxNumber + 1));
            const state=this.state;
        state.numberCards[cardIndex]=Math.floor(Math.random() * (maxNumber + 1)).toString();
        this.setState=state;
        document.getElementById(msg).innerText=state.numberCards[cardIndex]
        console.log(state.numberCards[cardIndex],msg)
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
        const id1=this.props.idArr
        return ( 
            <div className="main-container">
                <div className="number-cards-container">
                    <NumberCard id={this.props.idArr[0]} color={this.props.colorsArr[0]} number={this.state.numberCards[0]} cardClickHandler={this.cardClickHandler(id1[0],0)}/>
                    <NumberCard id={this.props.idArr[1]} color={this.props.colorsArr[1]} number={this.state.numberCards[1]}cardClickHandler={this.cardClickHandler(id1[1],1)}/>
                    <NumberCard id={this.props.idArr[2]} color={this.props.colorsArr[2]} number={this.state.numberCards[2]} cardClickHandler={this.cardClickHandler(id1[2],2)}/>
                </div>
                <input id="tryYourLuckBtn" className="custom-btn" type="button" value="Try Your Luck" onClick={this.tryLuckClickHandler}/>
            </div>
        )
    }
}

export default LuckyThree;
