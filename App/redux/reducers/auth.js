const defaultState = {
    isLoggedIn: false,
    username: '',
    password: ''
};
 
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'LOGIN': 
            return  {
                isLoggedIn: true,
                username: action.username,
                password: action.password
            }
        case 'LOGOUT':
            return  { 
                isLoggedIn: false,
                username: '',
                password: ''
            }
        default:
            return state;
    }
}