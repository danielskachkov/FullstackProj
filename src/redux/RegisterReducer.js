const initial_state = {
    username: "",
    email: "",
    password: ""
}

const RegisterReducer = (state = initial_state, action) => {
    switch(action.type)
    {
        case 'UPDATE_REGISTER_EMAIL_TEXT':
            state.email = action.text;
            return state;
        case 'UPDATE_REGISTER_USERNAME_TEXT':
            state.username = action.text;
            return state;
        case 'UPDATE_REGISTER_PASSWORD_TEXT':
            state.password = action.text;
            return state;
        default:
            return state;
    }
}

export default RegisterReducer;