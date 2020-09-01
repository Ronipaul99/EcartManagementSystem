import {SET_USER,GET_USER} from '../actions';

const initialstate={
    user:{},
    login:false
}

export default function reducer(state= initialstate , action) {
    switch (action.type) {
        case SET_USER:
            return{
                ...state,
                user:action.payload,
                login:true
            }
        case GET_USER:
            return{
                ...state,
                user:state.user
            }
        default:
            return{
                ...state
            }
    }
}