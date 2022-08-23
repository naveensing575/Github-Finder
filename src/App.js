import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Users from "./Components/Pages/Users";
import NotFound from "./Components/Pages/NotFound";
import { GithubProvider } from "./Components/Context/GithubContext";

function App() {
  return (
    <GithubProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
      <Navbar/>
      <main className="container mx-auto px-3 pb-12">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/user/:login' element={<Users/>}/>
          <Route path='/notfound' element={<NotFound/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </main>
      <Footer/>
      </div>
    </Router>
    </GithubProvider>
  );
}

export default App; 