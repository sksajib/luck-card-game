import React from 'react';
import "./App.css"

import LuckyThree from './LuckyThree.js';

const idArr = ["numberCard1", "numberCard2", "numberCard3"];
const colorsArr = ["#ff5e5e", "#66b266", "#5d5dff"];

const App =  ()=> {
  return (
    <LuckyThree idArr={idArr} colorsArr={colorsArr} />
  )
}

export default App;