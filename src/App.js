
import './App.css';
import Boton from './componentes/Boton';

import Ficha from './componentes/Ficha';


function App() {
  return (
    <div className="App">
       <section style={{
               width:"100%",
               height:"180px",
               paddingTop:"0",
               backgroundColor:"#05a4e8",
               }}>
              <h1 style={{
                    fontFamily:"Bauhaus",                              
                    color: "white",
                    fontSize: "60px",
                    paddingLeft:"30px",
                    paddingTop:"30px",                    
              }}> Playmobil</h1>                                  
       </section>
              <div className='content'>
                   <Ficha><div className='container'>
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRecHGdbfR_ekm-ppiSNbGCeGaq5zWxW_5zQw&usqp=CAU' alt='Amazonia'></img>
                          <h3>10089-Amazona bella</h3>
                          <h4>$ 1000</h4>
                          <h5>Hasta 6 cuotas sin interes</h5><Boton/></div>
                   </Ficha>
                   <Ficha><div className='container'>                              
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rGdGy5bCarPRVw_DJ1AJdzZ_0siv8ahyQg&usqp=CAU' alt='Constructor'></img>
                          <h3>10056-Constructor de torre</h3>
                          <h4>$ 1000</h4>
                          <h5>Hasta 6 cuotas sin interes</h5><Boton/></div>
                    </Ficha>
                    <Ficha><div className='container'>
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAeyDBjv2jVbhdRcAHrEIjOKNe8LXXO4bDw&usqp=CAU' alt='Bomberito'></img>
                          <h3>10052-Bomberito loco</h3>
                          <h4>$ 1500</h4>
                          <h5>Hasta 6 cuotas sin interes</h5><Boton/></div>
                    </Ficha>
                    <Ficha><div className='container'>
                           <img src='https://d3ugyf2ht6aenh.cloudfront.net/stores/001/056/679/products/caballero-llavero10001-765ac051a705706e7316426241833349-480-0.png' alt='parrilla'></img>
                           <h3>10042-Llavero caballero</h3>
                           <h4>$ 1000</h4>
                           <h5>Hasta 6 cuotas sin interes</h5><Boton/></div>
                    </Ficha>
                    <Ficha><div className='container'>
                           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ18bSnYLQNIC1I3bUiRMuh8obMx2OjNE7DmA&usqp=CAU' alt='princesa' width="100%" height="180px"></img>
                           <h3>10084-Princesa del tiempo</h3>
                           <h4>$ 1000</h4>
                           <h5>Hasta 6 cuotas sin interes</h5><Boton/></div>
                    </Ficha>
                    <Ficha><div className='container'>
                           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYa9ljr0EHcm6UVF8ri4UdZsaxAaM9WjGEjw&usqp=CAU' alt='Volver al futuro'></img>
                           <h3>10047-Volver al futuro</h3>
                           <h4>$ 2000</h4>
                           <h5>Hasta 6 cuotas sin interes</h5><Boton/></div></Ficha>
                 </div>
        
      </div>
  );
}

export default App;


  

  

