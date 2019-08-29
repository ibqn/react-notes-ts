import * as React from 'react';

import {
    Note,
} from "./Note";


interface BoardProps { count: number; }

interface NoteEntry {
    id: number,
    note: string
}

interface BoardState { notes: NoteEntry[]; }

export class Board extends React.Component {
    props: BoardProps;
    state: BoardState;

    constructor(props: BoardProps) {
        super(props);

        this.state = {
            notes: [
                { id: 0, note: 'kiss your wife' },
                { id: 1, note: 'call back' },
                { id: 2, note: 'hug her twice' },
                { id: 3, note: 'Hello People'},
            ],
        };
    }

    update = (id: number, note: string) => {
        const notes = this.state.notes.map((n, i) => {
            return (n.id !== id) ? n : {
                ...n,
                note: note
            };
        });
        this.setState({notes});
    }

    render() {
        return (
            <div className='board'>
                {this.state.notes.map((note, i) => {
                    return <Note key={i} id={i} onChange={this.update}>
                        {note.note}
                    </Note>
                })}
                <button>+</button>
            </div>
        );
    }

}
