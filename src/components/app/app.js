import React, { Component } from 'react';
import PictureList from '../picture-list';
import Workspace from '../workspace';
import FileLoader from '../file-loader';
import { connect } from 'react-redux';
import './app.css';

class App extends Component {

    render () {
        return (
            <div className="application">
                <div className="application__row">
                    <div className="application__col">
                        <div className="application__sitebar">
                            <PictureList pictures={ this.props.pictures }></PictureList>
                            <FileLoader></FileLoader>
                        </div>
                    </div>
                    <div className="application__col application__col--area">
                        <Workspace 
                            pictures={ this.props.workspace.items } 
                            drag={ this.props.workspace.drag }>
                        </Workspace>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        pictures: state.pictures,
        workspace: state.workspace
    }),
)(App);