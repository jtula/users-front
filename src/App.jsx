import {Routes, Route, Link} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages/Home";
import CreatePage from "./pages/Create";
import EditPage from "./pages/Edit";

function App() {

  return (
    <div>
      <nav className="bg-slate-900 h-14">
        <div className="container mx-auto p-2 relative">
          <Link to="/"><h2 className="absolute right-0 text-white text-2xl font-bold">Home</h2></Link>
        </div>
      </nav>  

      <div className="container mx-auto p-2 h-full">     
        <Routes>
          <Route index element={<HomePage/>}></Route>
          <Route path="/create" element={<CreatePage/>}></Route>
          <Route path="/edit/:id" element={<EditPage/>}></Route>
        </Routes>
      </div>
      <ToastContainer/>

    </div>
  )
}

export default App
