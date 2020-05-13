import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div style={headerStyle}>
            <header>
                <h1>TodoList App</h1>
                <Link style={{color:'#fff',textDecorationStyle:'none'}} to='/'>Home</Link> |{ ' '}
                <Link style={{color:'#fff',textDecorationStyle:'none'}} to='/about'>About</Link>
            </header>
        </div>
    )
}

const headerStyle={
    textAlign:'center',
    color:'#fff',
    textDecorationStyle:'dashed',
    backgroundColor:'#333',
    padding:'10px'
}
