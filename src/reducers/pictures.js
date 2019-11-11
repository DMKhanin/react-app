
const initialState = [];

export default function pictures (state = initialState, action) {
    switch (action.type) {
        case 'ADD_PICTURE':
            return [
                ...state,
                action.payload
            ];
        case 'REMOVE_PICTURE': 
            return [ ...state ]
        default: 
            return [ ...state ]
    }
}