import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';


function App() {

  return (
    <>
      <BrowserRouter>
          <section className='flex main'>
            <div className="sidebarWrapper w-[15%] md:block hidden">
              <Sidebar/> 
            </div>

            <div className="content_Right w-[85%] px-3">
              <Routes>
                <Route path='/' element={<Dashboard/>}></Route>
                <Route path='/products' element={<Products/>}></Route>
                <Route path='/products/:id' element={<ProductDetail/>}></Route>
              </Routes>
            </div>
          </section>
      </BrowserRouter>
    </>
  )
}

export default App
