import logo from './logo.svg';
import './App.css';
import React,{Suspense} from 'react';
import { Route, Routes} from 'react-router-dom';

const NewHome = React.lazy(() => import("./componnent/Home"))

const ToDo= React.lazy(() => import("./componnent/ToDo"))
const Post = React.lazy(() => import("./componnent/Posts"))

function App() {

  return (
    <>
      <div className="App">
        
        <h1 style={{color:"orange"}}>project client server </h1>
        <Routes>
          <Route path='/' element={<Suspense fallback={<h1 style={{color:"orange"}}>loading..</h1>}><NewHome /></Suspense>} /> 
          <Route path='/ToDo' element={<Suspense fallback={<h1 style={{color:"orange"}}>loading..</h1>}><ToDo /></Suspense>} /> 
          <Route path='/Posts' element={<Suspense fallback={<h1 style={{color:"orange"}}>loading..</h1>}><Post /></Suspense>} />  
        </Routes>
      </div> 
     
    </>
  );
}

export default App;
