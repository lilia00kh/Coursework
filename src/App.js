import React, {useEffect} from 'react';
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";
import Loader from "./Loader";

function App() {
    const [todos,setTodos] = React.useState([])
    const [loading,SetLoading] = React.useState(true)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(()=>{setTodos(todos)},2000   )
                SetLoading(false)

            })
    },[])
    function toggleTodo(id) {
        setTodos(
            todos.map(todo =>{
                if(todo.id===id)
                {
                    todo.complited= !todo.complited
                }
                return todo
                }
            )
        )
    }
    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    function addTodo(title) {
        setTodos(todos.concat([
            {
                title,
                id: Date.now(),
                complited: false
            }
        ]))
    }
  return (
      <Context.Provider value={{removeTodo:removeTodo}}>
          <div className="wrapper">
              <h1>Hello!</h1>
              <AddTodo onCreate={addTodo}/>

              {loading && <Loader/> /* якщо грузиться - показувати Loader*/ }
              {todos.length?(<TodoList todos={todos} onToggle={toggleTodo}/>):loading?null:(<p>No todos</p>)}

          </div>
      </Context.Provider>
  );
}

export default App;
