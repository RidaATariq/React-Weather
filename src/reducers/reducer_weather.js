import { FETCH_WEATHER } from "../actions";

export default function(state = [], action) {
    console.log('Action Received', action)

    switch(action.type) {
        case FETCH_WEATHER:
        // code bellow is the same as the one we used
        // return state.concat([action.payload.data]);
        // This also puts the new data at the front, just need to swap
        // them to add it at the end
        return [ action.payload.data, ...state ];
    }

    return state;
}