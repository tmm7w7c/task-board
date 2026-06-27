import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('tasks')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  const [inputValue, setInputValue] = useState('')

  const addTask = () => {
    const trimmed = inputValue.trim()
    if (!trimmed) return
    setTasks([...tasks, { id: Date.now(), text: trimmed, done: false }])
    setInputValue('')
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTask()
  }

  return (
    <div className="container">
      <h1 className="title">Task Board</h1>

      <div className="input-area">
        <input
          type="text"
          className="task-input"
          placeholder="新しいタスクを入力..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="add-btn" onClick={addTask}>追加</button>
      </div>

      <ul className="task-list">
        {tasks.length === 0 && (
          <li className="empty">タスクがありません</li>
        )}
        {tasks.map(task => (
          <li key={task.id} className={`task-item ${task.done ? 'done' : ''}`}>
            <input
              type="checkbox"
              className="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />
            <span className="task-text">{task.text}</span>
            <button
              className="delete-btn"
              onClick={() => deleteTask(task.id)}
              aria-label="削除"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {tasks.length > 0 && (
        <p className="summary">
          {tasks.filter(t => t.done).length} / {tasks.length} 件完了
        </p>
      )}
    </div>
  )
}

export default App
