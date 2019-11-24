let initial_state = {
    city: ""
};

const MainPageReducer = (state = initial_state, action) => {
    switch(action.type)
    {
        case 'CHANGE_CITY':
            state.city = action.city;
            return state;
        default:
            return state;
    }
};

export default MainPageReducer;