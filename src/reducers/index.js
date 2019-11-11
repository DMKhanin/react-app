import { combineReducers } from 'redux';
import pictures from './pictures';
import workspace from './workspace';

export default combineReducers({
    pictures,
    workspace
});