import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Tasks from './pages/Tasks'
import PostsList from './features/posts/PostsList'
import Menu from './pages/Menu'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Menu/>}></Route>
        <Route path='tasks' element={<Tasks/>}></Route>
        <Route path='posts' element={<PostsList/>}></Route>
      </Routes>
    </div>
  )
}

export default App
