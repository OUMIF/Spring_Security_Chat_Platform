import { useState } from 'react'
import ListEmployeeComponent from './pages/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import EmployeeComponent from './pages/EmployeeComponent'

function App() {
  return (
    <BrowserRouter>
      <div className="App min-vh-100 d-flex flex-column">
        <HeaderComponent />
        <main className="flex-grow-1">
          <Routes>
            {/* http://localhost:3000 */}
            <Route path='/' element={<ListEmployeeComponent />} />
            {/* http://localhost:3000/employees */}
            <Route path='/employees' element={<ListEmployeeComponent />} />
            <Route path='/add-employee' element = {<EmployeeComponent/>}/>
            <Route path='/edit-employee/:id' element = {<EmployeeComponent/>} />
          </Routes>
        </main>
        <FooterComponent />
      </div>
    </BrowserRouter>
  )
}


export default App