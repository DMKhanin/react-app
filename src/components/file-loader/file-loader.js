import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux';
import './file-loader.css';

class FileLoader extends Component {

    constructor() {
        super();
        this.state = {
            isActive: false
        }
    }

    validateFile(file) {
        if (file.type === 'image/svg+xml' ||
            file.type === 'image/png' ||
            file.type === 'image/jpeg') {
            return true;
        }
        return false;
    }

    addPicture(acceptedFiles) {
        acceptedFiles.forEach(file => {
            if (this.validateFile(file)) {
                this.props.addPicture({
                    name: file.name,
                    data: URL.createObjectURL(file)
                });
            };
        })
    }

    setActiveClass() {
        this.setState({
            isActive: true
        })
    }

    usetActiveClass() {
        this.setState({
            isActive: false
        })
    }

    render() {
        return (
            <Dropzone 
            onDrop={acceptedFiles => { this.addPicture(acceptedFiles); this.usetActiveClass()} }
            onDragEnter={ () => { this.setActiveClass() }}
            onDragLeave={ () => { this.usetActiveClass() }}
            >
            {({getRootProps, getInputProps}) => (
                <div className={ this.state.isActive ? 'file-loader file-loader--active' : 'file-loader'} {...getRootProps()}>
                    <input className="file-loader__input" {...getInputProps()} />
                    <p className="file-loader__message file-loader__message--default">Drag 'n' drop some files here, or click to select files</p>
                    <p className="file-loader__message file-loader__message--active">Drop files</p>
                    <p className="file-loader__message file-loader__message--hover">Select files</p>
                </div>
            )}
            </Dropzone>
        )
    }
}


export default connect(
    state => ({
        pictures: state.pictures
    }),
    dispatch => ({
        addPicture: (picture) => {
            dispatch({
                type: 'ADD_PICTURE',
                payload: picture
            })
        }
    })
)(FileLoader);