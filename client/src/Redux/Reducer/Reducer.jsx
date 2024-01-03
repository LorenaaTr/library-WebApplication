const Reducer = (state, action) => {

    switch (action.type) {
        case "USER":
            return ({
                ...state,
                username: action.payload.username
            });

        default:
            return state;
    }
};

export default Reducer;
