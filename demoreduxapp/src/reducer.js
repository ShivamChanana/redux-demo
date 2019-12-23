const initialState = {
    messageVisibility = false
}

const ToggleReducer = (state=initialState, action)=>{
    switch(action.type){
        case "Toggle":
        return {messageVisibility: !state.messageVisibility}
        default:
            return {...state}
    }
}