import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Card from './components/Card/Card'
import Dashboard from './pages/Dashboard'
import User from './pages/User'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Case from './components/Case'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Case>
      <div className='bg-gray-900 flex items-center justify-center min-h-screen'>
          <div className="bg-gray-800 border-t border-gray-600 shadow rounded-lg max-w-lg w-full p-6">
              <h4 className='text-white text-2xl'>Hello Sir</h4>
              <p className='text-lg text-gray-400 leading-relaxed'>My name is Muhamad Ardan Fadhillah, u can call me Ardan</p>
          </div>
      </div>
    </Case>

      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/user' element={<User/>} />
        </Routes>
      </BrowserRouter> */}

      {/* <Dashboard/> */}

      {/* <User/> */}

      {/* Self closing tag */}
      {/* <Card/> */}

      {/* Tag buka dan tutupnya */}

      {/* menggunakan props children */}
      {/* <Card>
        <ul>
          <li>1 - 1 x 0 + 1 = 2</li>
        </ul>
      </Card>

      <Card>
        <ol>
          <li>tabel 2</li>
        </ol>
      </Card> */}

      {/* <Card nama="cinaEdan" rombel="PPLG XI-5" rayon="Ciawi 5"/>
      <Card nama="Mewing" rombel="PPLG XI-5" rayon="Cicurug 1"/>
      <Card nama="KING" rombel="PPLG XI-5" rayon="Cicurug 4"/> */}

      {/* <div>
        <h1>Ard</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
