let initial_state = {
    username: "",
    password: ""
}

const LogInReducer = (state = initial_state, action) => {
    switch(action.type)
    {
        case 'UPDATE_LOGIN_USERNAME_TEXT':
            state.username = action.text;
            return state;
        case 'UPDATE_LOGIN_PASSWORD_TEXT':
            state.password = action.text;
            return state;
        default:
            return state;
    }
}

export default LogInReducer;