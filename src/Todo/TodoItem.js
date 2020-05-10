import React,{useContext} from "react";
import PropTypes from "prop-types"
import Context from "../context";

const style ={
    li:{
        display:'flex',
        justifyContent:'space-between',
        alignItem:'center',
        padding:'5rem 1rem',
        border:'1px solid #ccc',
        borderRadius:'4px',
        marginBottom:'.5rem'
    }
}

function TodoItem ({todo,index,onChange}) {
    const {removeTodo} = useContext(Context)
    const classes = []
    if(todo.complited)
    {
        classes.push('done')
    }
    return(
        <li style={style.li}>
            <span className={classes.join(' ')}>
                <input type='checkBox' checked={todo.complited} onChange={()=>onChange(todo.id)} />
                {index + 1}
                { todo.title}
                <button onClick={()=>removeTodo(todo.id)}>x</button>
            </span>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange:PropTypes.func.isRequired
}

export default  TodoItem