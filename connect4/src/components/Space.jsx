import React from "react"

export default function Space(props){
    let styles = {
        backgroundColor: props.color
    }
    return(
        <div className="space" style={styles} onClick={props.clickHandler}>
            <h1></h1>
        </div>
    )
}