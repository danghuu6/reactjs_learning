import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
    
    return (
        <div id = "wrapper">
            <h1>Hello ReactJs</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)