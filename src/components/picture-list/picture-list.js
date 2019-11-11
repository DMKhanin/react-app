import React, { Component } from 'react';
import PictureItem from '../picture-item';
import './picture-list.css';

export default class PictureList extends Component {

    render () {
        return (
            <div className="picture-list">
                { this.props.pictures.map((picture, index) => 
                    <PictureItem picture={ picture }></PictureItem>
                )}
            </div>
        )
    }
}