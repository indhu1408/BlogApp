import { useState } from 'react'

import Header from './Header'
import {Routes, Route} from 'react-router-dom';

import './App.css';
import Post from './Post';
import Layout from './Layout';
import IndexPage from './IndexPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
     
    <Route index element = {<IndexPage/>} />
    <Route path = '/login' element = {<LoginPage/>} />
    <Route path='/register' element = {<RegisterPage/> }/>


    </Route>
  </Routes>
  )
}

export default App;
