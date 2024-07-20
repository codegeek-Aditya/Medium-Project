import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Singup'
import { Blogs } from './pages/Blogs'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/blogs' element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App