let initial_state = {
    username: "__NOT__AUTHORISED__",
    password: ""
}

const HeaderReducer = (state = initial_state, action) => {
    switch(action.type)
    {
        case 'ENTER':
            state.username = action.username;
            return state;
        case 'QUIT':
            state.username = "__NOT__AUTHORISED__";
            return state;
        default:
            return state;
    }
};

export default HeaderReducer;