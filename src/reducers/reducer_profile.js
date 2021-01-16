import {FORBES_FETCHED} from '../actions/actions_profile'
const forbes = (state = {}, action) => {
    switch (action.type) {
        case FORBES_FETCHED: return action.payload
        default: return state
    }
}
export default forbes