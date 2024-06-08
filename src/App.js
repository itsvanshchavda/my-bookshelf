import React from 'react'
import Home from './components/Home/Home.jsx'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import MyBooks from './components/BookShelf/MyBooks.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/'  element={<Home />}/>
        <Route path='/mybooks' element={<MyBooks />} />
      </Routes>
    </Router>
  )
}

export default App
