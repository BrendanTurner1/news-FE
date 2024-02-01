import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import FullArticle from '../FullArticle/FullArticle';

function App() {


  return (
    <main className="App">
      <header>
        <NavLink className='navLink' to='/'>News</NavLink>
      </header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/article/:id' element={<FullArticle />}></Route>
      </Routes>
    </main>
  );
}

export default App;
