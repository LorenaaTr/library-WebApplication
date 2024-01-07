const Reducer = (state, action) => {
    switch (action.type) {
      case "USER":
        return {
          ...state,
          username: action.payload.username
        };
      case "TOKEN": 
        return {
          ...state,
          token: action.payload.token,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;
  