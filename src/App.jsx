
import './App.css'
import { Route, Routes } from 'react-router-dom'
import TaskList from './Components/Task/TaskList.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
 <div className="App">
  <Routes>
    <Route  path='/' element={<TaskList/>} ></Route>
  </Routes>
 </div>
  )
}

export default App
