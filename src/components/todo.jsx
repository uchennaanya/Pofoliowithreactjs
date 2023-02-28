import React from 'react'

const main = {
    maxWidth: '75vw',
    margin: 'auto'
}

const Todo = () => {
    return (
        <main style={main}>
            <div data-testid="todo-1"> Hello </div>
        </main>
    )
}

export default Todo