import * as React from "react";


export interface NoteState {
    editing: boolean;
    newText: string;
}

export class Note extends React.Component<undefined, NoteState> {
    state: NoteState;

    constructor() {
        super();
        this.state = { editing: false, newText: 'noo' };
    }

    close() {
        console.log("close");
    }

    public edit() : void {
        this.setState((prevState, props) => ({ editing: true }));
    }

    public save() : void {
        console.log(`text is ${this.state.newText}`);

        this.setState({ editing: false });
    }

    handleChange(e : React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({newText: e.target.value});
    }

    public renderForm() {
        const newText = this.state.newText;
        return(
            <div className="note">
                <textarea
                    value={newText}
                    onChange={e => this.handleChange(e)}/>
                <span>
                    <button onClick={() => this.save()}>SAFE</button>
                </span>
            </div>
        );
    }

    public renderDisplay() {
        return(
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onClick={() => this.edit()}>EDIT</button>
                    <button onClick={this.close}>X</button>
                </span>
            </div>
        );
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}
