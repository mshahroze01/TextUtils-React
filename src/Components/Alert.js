import React from 'react'

function Alert(props) {

    const capital = (word)=>{
        return (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }

    return (
        props.alert != null && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
            <strong>{capital(props.alert.typ)}</strong>: {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert
