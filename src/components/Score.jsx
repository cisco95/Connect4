import React from "react"

export default function Score(props){
    return (
        <div className= {props.color + " score"}>
            Score: {props.score}
        </div>
    )
}