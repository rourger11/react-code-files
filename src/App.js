import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from'./Components/Home/Login'
import Basicinfo from './Components/Basic/Basicinfo.jsx';
import Qualification from './Components/qualification/Qualification';
import Document from './Components/file/Document';
// import Navbar from './Components/Navigation/Navbar';
import Notfound from './Components/Notfound/Notfound'
import Protected from './Components/Protected';
import Review from './Components/Review';

function App() {
  return (
    <>
     <div>
    <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
      {/* <Route path="/"index element={<Home/>}></Route> */}
      <Route path='/'element={<Login/>} />
      <Route path='/Basicinfo' element={<Protected  Component= {Basicinfo}/>} />
      <Route path='/Qualification' element={<Protected  Component= {Qualification}/>} />
      <Route path='/Document' element={<Protected  Component= {Document}/>} />
      <Route path='/Review' element={<Protected  Component= {Review}/>} />

      <Route path='/*' element={<Notfound />} />

    </Routes>
    </BrowserRouter>

</div>
    </>
  );
}

export default App;
