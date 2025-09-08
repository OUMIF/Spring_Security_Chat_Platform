import { useState } from 'react'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  return (
    <div className="App min-vh-100 d-flex flex-column">
      <HeaderComponent />
      <main className="flex-grow-1">
        <ListEmployeeComponent />
      </main>
         <FooterComponent/>
    </div>
 
  )
}

export default App