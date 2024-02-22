
import Layout from "./components/layout";
import NavBar from "./components/navbar";
import {Navigate, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import Cursos from "./pages/cursos";
import Imagenes from "./pages/imagenes";
import Login from "./pages/login";
import Registro from "./registro";
import Footer from "./components/footer";

function App() {


  return (
    <>
      <div className="bg-secondary min-h-screen">
        <NavBar></NavBar>
        <Layout>

          <Routes>
            <Route path='/' element={<Inicio></Inicio>}></Route>
            <Route path='/cursos' element={<Cursos></Cursos>}></Route>
            <Route path='/imagenes' element={<Imagenes></Imagenes>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/registro' element={<Registro></Registro>}></Route>
            <Route path='/*' element={<Navigate to="/"></Navigate>}></Route>
          </Routes>


        </Layout>
        
        <Footer></Footer>

      </div>
    </>
  )
}

export default App
