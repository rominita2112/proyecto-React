import './App.css';
import { Routes, Route } from 'react-router-dom';
import ImageSlider from "./components/Slider";
import Cards from './components/Cards';








function App() {
  return (
     <><Routes>
     <Route path="/" element={<h1 className="text-3xl font-bold underline"> </h1>} />
     <Route path="/products" element={<h1>Products</h1>} />
     
     </Routes>
     
     <div className="container mt-5 carousel">
     <h1 className="slider_title">Our Services</h1>
     <ImageSlider />
     </div>
    
    <div>
     <Cards>
      </Cards>     
    </div>
    
    
     
     </>
    
     


    
    
      
  );
}

 


export default App;

