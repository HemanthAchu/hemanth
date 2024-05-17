
import './App.css'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Views from './components/Views'
import Nav from './components/Nav'
import Add from './components/Add'

function App() {


  return (
    <BrowserRouter>
    <Nav/>
 <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/views' element={<Views/>} />
  <Route path='/add' element={<Add/>} />

 </Routes>
    </BrowserRouter>
  )
}

export default App
