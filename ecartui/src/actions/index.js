export const SET_USER = 'SET_USER';
export const GET_USER = 'GET_USER';

export function set_user(user){
    return{
        type: SET_USER,
        payload:user
    }
}

export function get_user() {
    return{
        type: GET_USER
    }
}