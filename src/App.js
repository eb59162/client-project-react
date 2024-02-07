import logo from './logo.svg';
import './App.css';
import React,{Suspense} from 'react';
// import Accept from "./componnent/uploadImage"


import FormDialog from './componnent/dialog'
import ColorTabs from './componnent/NewHome';
import StandardImageList from './componnent/img';
import { Route, Routes,  Link} from 'react-router-dom';

// const Home = React.lazy(() => import("./componnent/Home"))
const NewHome = React.lazy(() => import("./componnent/NewHome"))

const ToDo= React.lazy(() => import("./componnent/ToDo"))
const Photo = React.lazy(() => import("./componnent/Photo"))
// const User = React.lazy(() => import("./componnent/User"))
const Post = React.lazy(() => import("./componnent/Posts"))

function App() {

  return (
    <>
  
    {/* <ColorTabs/> */}
    {/* <StandardImageList/> */}
    {/* <StandardImageList/> */}
      <div className="App">
        
        <h1 style={{color:"orange"}}>project client server </h1>
        <Routes>
          {/* <Route path='/' element={<Suspense fallback={<h1>loading..</h1>}><Home /></Suspense>} >  } */}
          <Route path='/' element={<Suspense fallback={<h1 style={{color:"orange"}}>loading..</h1>}><NewHome /></Suspense>} /> 

          <Route path='/ToDo' element={<Suspense fallback={<h1 style={{color:"orange"}}>loading..</h1>}><ToDo /></Suspense>} /> 
          <Route path='/Photo' element={<Suspense fallback={<h1 style={{color:"orange"}}>loading..</h1>}><Photo /></Suspense>} />
          <Route path='/Posts' element={<Suspense fallback={<h1 style={{color:"orange"}}>loading..</h1>}><Post /></Suspense>} />
       
        {/* <Route path='/' element={<ToDoList />} /> */}
        </Routes>
      </div> 
     
       {/* <FormDialog/> */}
       {/* <Accept/> */}
    </>
  );
}

export default App;
