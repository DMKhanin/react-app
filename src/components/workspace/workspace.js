import React, { Component } from 'react';
import './workspace.css';
import WorkspacePicture from '../workspace-picture';

export default class Workspace extends Component {

    constructor() {
        super();
        this.workspace = React.createRef();
        this.state = {
            mouse: {
                x: 0,
                y: 0
            }
        };
    }

    mouseMove(event) {
        this.setState({
            mouse: {
                x: event.pageX,
                y: event.pageY
            }
        });
    }

    render () {
        return (
            <div className="workspace">
                <div className={ this.props.drag ? 'workspace__field workspace__field--active' : 'workspace__field'} onMouseMove={ event => { this.mouseMove(event) } } ref={this.workspace}>
                    { this.props.pictures.map((picture) => 
                        <WorkspacePicture mouseMovePosition={ this.state.mouse } workspace={ this.workspace } picture={ picture }></WorkspacePicture>
                    )}
                </div>
            </div>
        )
    }
}