
const initialState = {
    items: [],
    drag: false
};

export default function workspace (state = initialState, action) {
    switch (action.type) {
        case 'ADD_PICTURE_TO_WORKSPACE':
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            };
        case 'SET_DRAG_STATE' :
            return {
                ...state,
                ...action.payload
            };
        case 'REMOVE_PICTURE_IN_WORKSPACE':
            return { ...state }
        default: 
            return { ...state }
    }
}