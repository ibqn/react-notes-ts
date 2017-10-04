import * as React from "react";


export interface HelloProps { compiler: string; framework: string; }

export class Note extends React.Component<HelloProps> {
    close () {
        alert("close");
    }
    render() {
        return (
            <div className="note">
                <p></p>
                <span>
                    <button onClick={()=> alert("edit")}>EDIT</button>
                    <button onClick={this.close}>X</button>
                </span>
            </div>
        );
    }
}