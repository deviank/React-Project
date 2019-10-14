import React from 'react'
import ReactDOM from 'react-dom'

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontfamily: 'Arial'


}



ReactDOM.render(
    <div style={style}>
        <h1>Hello there</h1>
        <p>We're glad you came!</p>
    </div>,
    document.getElementById('root'),
)