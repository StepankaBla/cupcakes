
export function counterReducer(state = 0, action, state2="VYHRÁL SI SUSIKCUP!!") {
  switch (action.type) {
    case "INCREMENT":
       while(state<99){
        return (state + 1);
       }
    return state2;
   
    case "VYHRA":
      
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
}
