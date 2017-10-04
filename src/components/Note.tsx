import * as React from "react";


export interface NoteProps {
    editing?: boolean;
}

export interface NoteState {
    editing: boolean;
}

export class Note extends React.Component<undefined, NoteState> {
    state : NoteState;

    constructor () {
        super();
        this.state  = { editing: true };
    }

    close() {
        alert("close");
    }

    edit = () => {
        this.setState((prevState, props) => ({editing:true}));
    }

    save = () => {
        this.setState({editing: false });
    }

    public renderForm() {
        return(
            <div className="note">
                <textarea></textarea>
                <span>
                    <button onClick={this.save}>SAFE</button>
                </span>
            </div>
        );
    }

    public renderDisplay() {
        return(
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit}>EDIT</button>
                    <button onClick={this.close}>X</button>
                </span>
            </div>
        );
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}
