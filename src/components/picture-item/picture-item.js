import React, { Component } from 'react';
import { connect } from 'react-redux';
import './picture-item.css';

class PictureItem extends Component {
    
    addPictureToWorkspace(picture) {
        this.props.addPictureToWorspace({
            ...picture,
            x: 0,
            y: 0,
        });
    }

    render () {
        return (
            <div className="picture-item" onClick={ () => { this.addPictureToWorkspace(this.props.picture) } }>
                <img src={this.props.picture.data} alt={this.props.picture.name} className="picture-item__picture"/>
            </div>
        )
    }
}

export default connect(
    state => ({
        workspace: state.workspace
    }),
    dispatch => ({
        addPictureToWorspace: (picture) => {
            dispatch({
                type: 'ADD_PICTURE_TO_WORKSPACE',
                payload: picture
            })
        }
    })
)(PictureItem);