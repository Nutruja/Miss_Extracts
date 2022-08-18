import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'

import Dashboard from './pages/Dashboard/Dashboard'

function App() {

  return (
    <div className="App">
      <BroweserRouter>
        <NavBar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </BroweserRouter>
    </div>
  )
}

export default App
