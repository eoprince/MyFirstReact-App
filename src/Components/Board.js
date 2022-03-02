import React, { Component } from 'react';
import '../css/Board.css';
import Note from './Note';

class Board extends Component {
    constructor() {
        super();
    }  

    render() {
        return (
            <div>
                <div className="div-board">
                    <div className="row">  
                         <Note title="My first Book" body="The very Hungry Caterpillar" />
                         <Note title="My first Vacation" body="Sedona" />
                         <Note title="My first Movie" body="Lion King" />
                    </div>
                </div>
                <div>
                    <button className="btn btn-success add-button">add</button>
                </div>
            </div>
        )   
    }
}

export default Board;