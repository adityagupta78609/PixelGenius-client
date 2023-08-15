
import './App.css';
import {BrowserRouter as Browser , Link , Route , Routes } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import Header from './components/Header';
import Loader from './components/Loader'
function App() {
  return (
    <div className="App">
<Browser>


    <Header/>
    <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)] '>
{/* <Loader/> */}
<Routes>
  <Route path="/home" element={<Home/>} />
  <Route path="" element={<Home/>} index/>
  <Route path="/create-post" element={<CreatePost/>} />
  
 
</Routes>
</main>
</Browser>

    </div>
  );
}

export default App;
