import fruitCards from "../fruitCards";
// import { useState } from "react";

function GameBoard(props) {
  props.board.forEach((element) => {
    console.log(element.id);
  });
  return (
    <div>
      <div class="container">
        <div class="row">
          <button id="0" className="card" onClick="clickButton(0)">
            <img src={props.board[0].image2}></img>
          </button>
          <button id="1" className="card" onClick="clickButton(1)">
            <img src={props.board[1].image2}></img>
          </button>
          <button id="2" className="card" onClick="clickButton(2)">
            <img src={props.board[2].image2}></img>
          </button>
          <button id="3" className="card" onClick="clickButton(3)">
            <img src={props.board[3].image2}></img>
          </button>
        </div>
        <div class="row">
          <button id="4" className="card" onClick="clickButton(4)">
            <img src={props.board[4].image2}></img>
          </button>
          <button id="5" className="card" onClick="clickButton(5)">
            <img src={props.board[5].image2}></img>
          </button>
          <button id="6" className="card" onClick="clickButton(6)">
            <img src={props.board[6].image2}></img>
          </button>
          <button id="7" className="card" onClick="clickButton(7)">
            <img src={props.board[7].image2}></img>
          </button>
        </div>
        <div class="row">
          <button id="8" className="card" onClick="clickButton(8)">
            <img src={props.board[8].image2}></img>
          </button>
          <button id="9" className="card" onClick="clickButton(9)">
            <img src={props.board[9].image2}></img>
          </button>
          <button id="10" className="card" onClick="clickButton(10)">
            <img src={props.board[10].image2}></img>
          </button>
          <button id="11" className="card" onClick="clickButton(11)">
            <img src={props.board[11].image2}></img>
          </button>
        </div>
        <div class="row">
          <button id="12" className="card" onClick="clickButton(13)">
            <img src={props.board[12].image2}></img>
          </button>
          <button id="13" className="card" onClick="clickButton(14)">
            <img src={props.board[13].image2}></img>
          </button>
          <button id="14" className="card" onClick="clickButton(15)">
            <img src={props.board[14].image2}></img>
          </button>
          <button id="15" className="card" onClick="clickButton(16)">
            <img src={props.board[15].image2}></img>
          </button>
        </div>
      </div>
      ;
    </div>
  );
}

export default GameBoard;
