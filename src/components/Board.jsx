import Square from "./Square";
import { useState } from "react";
export default function Board(){
    const [eachBoxState,setEachBoxState] = useState(Array(9).fill(null));
    const[isXTurn,setIsXTurn] = useState(true);

    function checkWinner(){
        const winningCondition = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];

        for (const winningLine of winningCondition) {
            const[a,b,c] = winningLine;
            if(eachBoxState[a] !== null && eachBoxState[a] === eachBoxState[b] && eachBoxState[a] === eachBoxState[c]){
                return eachBoxState[a];
            }
            
        }

        return false;
    }

    const isWinner = checkWinner();

    function handleReset(){
        setEachBoxState(Array(9).fill(null));
    }



    function handleClick(index){
        if(eachBoxState[index] !== null){
            return;
        }
        const currentState = [...eachBoxState];
        currentState[index] = isXTurn ? "❌":"⭕";
        setEachBoxState(currentState);
        setIsXTurn(!isXTurn);

    }
    return (

        <div className="board-container">
            {isWinner ? (<>{isWinner} won the game <button className="Reset-btn" onClick={handleReset}>Play Againn</button> </>) : (
                <>
                <h4 className="player-turn">😎Player {isXTurn ? "❌" : "⭕"} Please Move It Is Your Turn😎</h4>
                 <div className="board-row">
                <Square onClick={()=> handleClick(0)} value={eachBoxState[0]} />
                <Square onClick={()=> handleClick(1)} value={eachBoxState[1]}/>
                <Square onClick={()=> handleClick(2)} value={eachBoxState[2]}/>
            </div>
            <div className="board-row">
                <Square onClick={()=> handleClick(3)} value={eachBoxState[3]}/>
                <Square onClick={()=> handleClick(4)} value={eachBoxState[4]}/>
                <Square onClick={()=> handleClick(5)} value={eachBoxState[5]}/>
            </div>
            <div className="board-row">
                <Square onClick={()=> handleClick(6)} value={eachBoxState[6]}/>
                <Square onClick={()=> handleClick(7)} value={eachBoxState[7]}/>
                <Square onClick={()=> handleClick(8)} value={eachBoxState[8]}/>
            </div>
                
                </>
            )}
           
        </div>

    );
}