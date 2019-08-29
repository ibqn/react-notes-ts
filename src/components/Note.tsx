import * as React from "react";


interface NoteState {
    editing: boolean;
    newText: string;
}

interface NoteProps {
    onChange(id: number, note: string): void;
    id: number;
    children: string;
}

export class Note extends React.Component {
    props: NoteProps;
    state: NoteState;
    style: { top: string, right: string }

    constructor(props: NoteProps) {
        super(props);

        this.state = {
            editing: false,
        } as NoteState;

        this.style = {
            top: `${this.randomBetween(0, window.innerHeight - 150)}px`,
            right: `${this.randomBetween(0, window.innerWidth - 150)}px`,
        };
    }

    static getDerivedStateFromProps(props: NoteProps, state: NoteState) {
        if (props.children !== state.newText) {
            return {
                newText: props.children,
            } as NoteState;
        }

        // Return null to indicate no change to state.
        return null;
    }

    private randomBetween(a: number, b: number): number {
        return a + Math.ceil(Math.random() * (b - a));
    }

    close() {
        console.log("close");
    }

    public edit(): void {
        this.setState((prevState, props) => ({ editing: true }));
    }

    public save(): void {
        this.props.onChange(this.props.id, this.state.newText)

        this.setState({ editing: false });
    }

    handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({ newText: e.target.value });
    }

    public renderForm() {
        const newText = this.state.newText;
        return(
            <div className="note" style={this.style}>
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
            <div className="note" style={this.style}>
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
