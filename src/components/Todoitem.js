import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle=()=>{
        return{
            color:'white',
            backgroundColor:'olive',
            padding:'10px',
            border:'1px #ccc dotted',
            textDecoration:this.props.todo.completed? 'line-through':'none'
        }
    }

    render() {

        const {id,title}=this.props.todo;
        return (
            <div style={this.getStyle()}>
               <p>
                   <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {' '}
                   {title}
                   <button style={btnStyle} onClick={this.props.removeTodo.bind(this,id)}>x</button>
                </p>
            </div>
        )
    }
}

//Proptypes
TodoItem.propTypes={
    todo:PropTypes.object.isRequired,
    onChange:PropTypes.func.isRequired,
    onClick:PropTypes.func.isRequired,
}
const btnStyle={
    backgroundColor:'red',
    color:'white',
    border:'none',
    padding:'5px 10px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}

export default TodoItem
