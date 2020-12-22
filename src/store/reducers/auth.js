const INITIAL_STATE =
{
    authorized: false
}

export default function auth(state = INITIAL_STATE, action) {
    if(action.type === 'TOGGLE_AUTH'){
        return {
            ...state, 
            authorized: action.auth
        }
    }
    return state
}