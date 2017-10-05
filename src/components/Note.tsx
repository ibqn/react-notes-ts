import * as React from "react";


export interface NoteState {
    editing: boolean;
    newText: string;
    style: { top: string, right: string}
}

export class Note extends React.Component<undefined, NoteState> {
    state: NoteState;

    constructor() {
        super();
        this.state = { editing: false, newText: 'noo' } as NoteState;
    }

    componentWillMount()
    {
        this.state.style = {
            top: `${this.randomBetween(0, window.innerHeight - 150)}px`,
            right: `${this.randomBetween(0, window.innerWidth - 150)}px`,
        };
    }

    private randomBetween(a: number, b: number): number {
        return a + Math.ceil(Math.random() * (b - a));
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
            <div className="note" style={this.state.style}>
                <textarea
                    value={newText}
                    onChange={e => this.handleChange(e)}/>
                <span>
                    <button onClick={() => this.save()}>save</button>
                </span>
            </div>
        );
    }

    public renderDisplay() {
        return(
            <div className="note" style={this.state.style}>
                <p>{this.props.children}</p>
                <span>
                    <button onClick={() => this.edit()}>edit</button>
                    <button onClick={this.close}>x</button>
                </span>
            </div>
        );
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}
