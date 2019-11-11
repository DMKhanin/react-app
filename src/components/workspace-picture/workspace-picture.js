import React, { Component } from 'react';
import { connect } from 'react-redux';
import './workspace-picture.css';

class WorkspacePicture extends Component {

    constructor() {
        super();
        this.element = React.createRef();
        this.state = {
            draggable: false,
            x: 0,
            y: 0,
            xMove: 0,
            yMove: 0,
        } 
    }

    setPosition(x, y) {
        this.element.current.style.left =  `${x}px`;
        this.element.current.style.top =  `${y}px`;
    }

    calculatePosition(mouseX, mouseY) {
        const workspaceNode = this.props.workspace.current;
        const workspacePosition = workspaceNode.getBoundingClientRect();
        return {
            x: (mouseX - workspacePosition.x) + this.state.xMove,
            y: (mouseY - workspacePosition.y) + this.state.yMove
        }
    }

    moveStart(event) {
        const elementNode = this.element.current;
        const elementPosition = elementNode.getBoundingClientRect();
        
        const xMove = elementPosition.x - event.pageX;
        const yMove = elementPosition.y - event.pageY;

        this.setState({
            draggable: true,
            xMove,
            yMove
        });

        this.props.setWorkspaceState({
            drag: true,
        });
    }

    moveEnd(event) {
        this.setState({
            draggable: false,
        });

        this.props.setWorkspaceState({
            drag: false,
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.draggable) {
            const { x, y } = this.calculatePosition(nextProps.mouseMovePosition.x, nextProps.mouseMovePosition.y);
            this.setPosition(x, y)
        }   
        return true;
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    render () {
        return (
            <img 
                draggable="false" 
                ref={ this.element }
                src={this.props.picture.data} 
                alt={this.props.picture.name} 
                style={ { 'left': this.props.picture.x, 'top': this.props.picture.y } } 
                onMouseDown={ event => { this.moveStart(event) } } 
                onMouseUp={ event => { this.moveEnd(event)} }
                className={this.state.draggable ? 'workspace-picture workspace-picture--draggable' : 'workspace-picture' }/>
        )
    }
}

export default connect(
    state => ({
        drag: state.drag
    }),
    dispatch => ({
        setWorkspaceState: (drag) => {
            dispatch({
                type: 'SET_DRAG_STATE',
                payload: drag
            })
        }
    })
)(WorkspacePicture);