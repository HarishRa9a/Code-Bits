import { useEffect, useState } from 'react'
import './App.css'
import { Todoprovider } from './contexts'
import Form from './components/Form'
import Item from './components/Item'

function App() {
  const [todos, settodos] = useState([]);

  const add = (todo) => {
    settodos((prev) => [...prev, { id: Date.now(), todo: todo, isdone: false }]);
    console.log(todos)
    console.log(todos)
  }

  const upd = (id, todo) => {
    settodos((prev) => (prev.map((ctodo) => ctodo.id === id ? todo : ctodo)))
  }

  const del = (id) => {
    settodos((prev) => (prev.filter((ctodo) => ctodo.id !== id)))
  }

  const done = (id) => {
    settodos((prev) => (prev.map((ctodo) => (ctodo.id === id ? { ...ctodo,isdone:!ctodo.isdone } : ctodo))))
    console.log(todos)
  }

  useEffect(() => {
    const cur = JSON.parse(localStorage.getItem("todos"));
    if (cur && cur.length > 1) {
      settodos(cur);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <Todoprovider value={{ todos, add, upd, del, done }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <Form />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <Item todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Todoprovider>
  )
}

export default App