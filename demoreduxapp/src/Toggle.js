import React, {PureComponent} from "react"
import {connect} from "react-redux"

const Toggle =  (props)=>{
    console.log("toggle props", props)
    return(
        <div>
            {props.messageVisibility && <h1>Show/Hide message</h1>}
            <button onClick = {()=>props.dispatch({
                type : "Toggle"
            })}>Toggle

            </button>
        </div>
    )
}
const mapStateToProps= state=>({
    messageVisibility: state.ToggleReducer.messageVisibility
})  

export default connect(mapStateToProps, null)(Toggle)