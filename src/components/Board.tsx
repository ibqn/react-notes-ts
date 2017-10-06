import * as React from 'react';

import { Note } from "./Note";


export interface BoardProps { count: number; }

export interface BoardState { notes: string[]; }

export class Board extends React.Component<BoardProps, BoardState> {
    props: BoardProps;
    state: BoardState;

    constructor() {
        super();

        this.state = {
            notes: [
                'one',
                'two',
                'three',
            ],
        };
    }

    render() {
        return (
            <div className='board'>
                {this.state.notes.map((note, i) => {return <Note key={i}>{note}</Note>})}
            </div>
        );
    }

}