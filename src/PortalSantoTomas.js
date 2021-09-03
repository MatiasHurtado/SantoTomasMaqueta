import React from 'react'
import logo from './assets/logo/marca.png'
import santoTomas from './assets/logo/marca_st.png'
import iconLogin from './assets/iconos_cafe/CUENTA.png'
import pieDeLimon from './assets/imagenes/apple-pie-3723444_1920.jpg'
import jardineria from './assets/marketplace/1.jpg'
import empanadas from './assets/marketplace/2.jpg'
import mufin from './assets/marketplace/3.jpg'
import fletes from './assets/marketplace/4.jpg'
import dulces from './assets/marketplace/5.jpg'
import slice  from './assets/slider.png'
import manchaSlider  from './assets/mancha_slider.png'

export default function PortalSantoTomas() {




   return (
      <>
   <header className="HeaderPrincipal pt-4">
      <img className="fondo" src={slice}></img>
      <img className="fondo2" src={manchaSlider}></img>
      <div className="header">
            
            <div className="HeaderLogos"> 
                  <img className="logo1" src={logo}  alt="Logo" /> 
               <div className="logosss">
                     <img className="logo2" src={iconLogin}/>
                     <p>INGRESAR A PERFIL</p>    
               </div>
                     
            </div>
                        
         <nav class="navbar navbar-expand-lg navbar-light  ">
               <div class="container-fluid">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                     <ul class="navbar-nav">
                        <li class="nav-item">
                           <a className="nav-link active" aria-current="page" href="#">INICIO</a>
                        </li>
                        <li class="nav-item">
                           <a className="nav-link" href="#">PUBLICACIONES</a>
                        </li>
                        <li class="nav-item">
                           <a className="nav-link" href="#">PROGRAMACION DE INFORMACION</a>
                        </li>
                        <li class="nav-item">
                           <a className="nav-link" href="#">MARKETPLACE</a>
                        </li>
                        <li class="nav-item">
                           <a className="nav-link" href="#">QUIENES SOMOS?</a>
                        </li>

                     </ul>
                  </div>
               </div>
         </nav>
      </div> 
   </header>


{/* Cartas de noticias */}


<div className="container-Default container ">
   <h1>Noticias</h1>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
   <div class="carousel-inner">
    
    

    
      <div class="cardNoticia carousel-item active ">
      <div class="card-group">
      <div class="card card-noticias">
               <img src={pieDeLimon} class="card-img" alt="..."/>
               <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <button className="btn btn-purple">SABER MÁS</button>
               </div>
             </div>
           
            <div class="card card-noticias">
               <img src={pieDeLimon} class="card-img" alt="..."/>
               <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <button className="btn btn-purple">SABER MÁS</button>
               </div>
            </div>
            <div class="card card-noticias">
               <img src={pieDeLimon} class="card-img" alt="..."/>
               <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <button className="btn btn-purple">SABER MÁS</button>
               </div>
            </div>
         </div>
      </div>
     
     



      <div class="carousel-item">
      <div class="card-group">
            
            <div class="card card-noticias">
               <img src={pieDeLimon} class="card-img" alt="..."/>
               <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <button className="btn btn-purple">SABER MÁS</button>
               </div>
             </div>
           
            <div class="card card-noticias">
               <img src={pieDeLimon} class="card-img" alt="..."/>
               <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <button className="btn btn-purple">SABER MÁS</button>
               </div>
            </div>
            <div class="card card-noticias">
               <img src={pieDeLimon} class="card-img" alt="..."/>
               <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <button className="btn btn-purple">SABER MÁS</button>
               </div>
            </div>
         </div>
      </div>
     

     
      <div class="carousel-item">
      <div class="card-group">
            <div class="card card-noticias">
               <img src={pieDeLimon} class="card-img" alt="..."/>
               <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <button className="btn btn-purple">SABER MÁS</button>
               </div>
            </div>
            <div class="card card-noticias">
               <img src={pieDeLimon} class="card-img" alt="..."/>
               <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <button className="btn btn-purple">SABER MÁS</button>
               </div>
            </div>
            <div class="card card-noticias">
               <img src={pieDeLimon} class="card-img" alt="..."/>
               <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <button className="btn btn-purple">SABER MÁS</button>
               </div>
            </div>
         </div>
      </div>
   
   
   
   </div>
   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
   </button>
   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
   </button>
   </div>
</div>



 






{/* Cartas de noticiasFin */}




{/* Noticia Responsive */}
<div className="container responsive-Noticias">
   <h1>Noticias</h1>
      <div id="carouselExampleControls-3" class="carousel slide" data-bs-ride="carousel">
   <div class="carousel-inner">
    
    

    
      <div class="cardNoticia carousel-item active ">
      <div class="card-group">
            <div class="card card-noticias">
               <img src={pieDeLimon} class="card-img " alt="..."/>
               <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <button className="btn btn-purple">SABER MÁS</button>
               </div>
            </div>
          
         </div>
      </div>
     
     



      <div class=" cardNoticia carousel-item">
      <div class="card-group">
            
           
           
            <div class="card card-noticias">
               <img src={pieDeLimon} class="card-img" alt="..."/>
               <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <button className="btn btn-purple">SABER MÁS</button>
               </div>
            </div>
         </div>
      </div>
     

     
      <div class=" cardNoticia carousel-item">
      <div class="card-group">

            <div class="card card-noticias">
               <img src={pieDeLimon} class="card-img" alt="..."/>
               <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <button className="btn btn-purple">SABER MÁS</button>
               </div>
            </div>
         </div>
      </div>
   
   
   
   </div>
   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls-3" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
   </button>
   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls-3" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
   </button>
   </div>
</div>


{/* Noticia Responsive Fin*/}



{/* Card Destacados Marketplace */}
<div className="container-marketplace marketplace-default">
      <h1>Destacados De Marketplace</h1>
   <div id="carouselExampleControls-1" class="carousel slide" data-bs-ride="carousel">
   <div class="carousel-inner">
      <div class="carousel-item active">
      <div class="row  row-cols-1  g-1">
               <div class="col-3">
                  <div class="card card-marketplace h-100">
                     <div className="logito"> 
                        <p>PRODUCTO</p>      
                     </div>
                        <img src={mufin} class="card-img-top card-img-marketplace" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">Muffins</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                     </div>
                     <div class="card-footer">
                        <p>$ 19.900</p>
                     </div>
                  </div>
         </div>
  <div class="col-3">
      <div class="card card-marketplace  h-100 ">
         <div className="logito"> 
            <p>PRODUCTO</p>      
         </div>
            <img src={empanadas} class="card-img-top" alt="..."/>
         <div class="card-body">
            <h5 class="card-title">Empanadas</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
         </div>
         <div class="card-footer">
               <p>$ 19.900</p>
         </div>
      </div>
  </div>
  <div class="col-3">
         <div class="card  card-marketplace  h-100">
         <div className="logito"> 
            <p>PRODUCTO</p>      
         </div>
            <img src={jardineria} class="card-img-top" alt="..."/>
         <div class="card-body">
            <h5 class="card-title">Jardineria</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
         </div>
         <div class="card-footer">
            <p>$ 50.000</p>
         </div>
      </div>
  </div>

      <div class="col-3">
            <div class="card card-marketplace  h-100">
            <div className="logito"> 
            <p>PRODUCTO</p>      
         </div>
                  <img src={fletes} class="card-img-top" alt="..."/>
            <div class="card-body">
               <h5 class="card-title">Fletes</h5>
               <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer">
                  <p>$ 50.000</p>
            </div>
         </div>
      </div>
   </div>
      </div>
      <div class="carousel-item">
      <div class="row  row-cols-1  g-1">
               <div class="col-3">
                  <div class="card card-marketplace h-100">
                     <div className="logito"> 
                        <p>PRODUCTO</p>      
                     </div>
                        <img src={mufin} class="card-img-top card-img-marketplace" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">Muffins</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                     </div>
                     <div class="card-footer">
                        <p>$ 19.900</p>
                     </div>
                  </div>
         </div>
  <div class="col-3">
      <div class="card card-marketplace  h-100 ">
         <div className="logito"> 
            <p>PRODUCTO</p>      
         </div>
            <img src={empanadas} class="card-img-top" alt="..."/>
         <div class="card-body">
            <h5 class="card-title">Empanadas</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
         </div>
         <div class="card-footer">
               <p>$ 19.900</p>
         </div>
      </div>
  </div>
  <div class="col-3">
         <div class="card  card-marketplace  h-100">
         <div className="logito"> 
            <p>PRODUCTO</p>      
         </div>
            <img src={jardineria} class="card-img-top" alt="..."/>
         <div class="card-body">
            <h5 class="card-title">Jardineria</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
         </div>
         <div class="card-footer">
            <p>$ 50.000</p>
         </div>
      </div>
  </div>

      <div class="col-3">
            <div class="card card-marketplace  h-100">
            <div className="logito"> 
            <p>PRODUCTO</p>      
         </div>
                  <img src={fletes} class="card-img-top" alt="..."/>
            <div class="card-body">
               <h5 class="card-title">Fletes</h5>
               <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer">
                  <p>$ 50.000</p>
            </div>
         </div>
      </div>
   </div>
      </div>
      <div class="carousel-item">
      <div class="row  row-cols-1  g-1">
               <div class="col-3">
                  <div class="card card-marketplace h-100">
                     <div className="logito"> 
                        <p>PRODUCTO</p>      
                     </div>
                        <img src={mufin} class="card-img-top card-img-marketplace" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">Muffins</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                     </div>
                     <div class="card-footer">
                        <p>$ 19.900</p>
                     </div>
                  </div>
         </div>
  <div class="col-3">
      <div class="card card-marketplace  h-100 ">
         <div className="logito"> 
            <p>PRODUCTO</p>      
         </div>
            <img src={empanadas} class="card-img-top" alt="..."/>
         <div class="card-body">
            <h5 class="card-title">Empanadas</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
         </div>
         <div class="card-footer">
               <p>$ 19.900</p>
         </div>
      </div>
  </div>
  <div class="col-3">
         <div class="card  card-marketplace  h-100">
         <div className="logito"> 
            <p>PRODUCTO</p>      
         </div>
            <img src={jardineria} class="card-img-top" alt="..."/>
         <div class="card-body">
            <h5 class="card-title">Jardineria</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
         </div>
         <div class="card-footer">
            <p>$ 50.000</p>
         </div>
      </div>
  </div>

      <div class="col-3">
            <div class="card card-marketplace  h-100">
            <div className="logito"> 
            <p>PRODUCTO</p>      
         </div>
                  <img src={fletes} class="card-img-top" alt="..."/>
            <div class="card-body">
               <h5 class="card-title">Fletes</h5>
               <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer">
                  <p>$ 50.000</p>
            </div>
         </div>
      </div>
   </div>
      </div>
   </div>
   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls-1" data-bs-slide="prev">
      <span class="carousel-control-prev-icon marketplace-arrow" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
   </button>
   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls-1" data-bs-slide="next">
      <span class="carousel-control-next-icon marketplace-arrow" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
   </button>
   </div>
</div>










{/* Carrusel Marketplace responsive */}










<div className="container-marketplace responsive-marketplace">
      <h1>Destacados De Marketplace</h1>
   <div id="carouselExampleControls-2" class="carousel slide" data-bs-ride="carousel">
   <div class="carousel-inner">




    
      
      <div class="carousel-item active market">

      <div class="row  row-cols-1  g-1">
            <div class="col-12">
                  <div class="card card-marketplace h-100">
                     <div className="logito"> 
                        <p>PRODUCTO</p>      
                     </div>
                        <img src={mufin} class="card-img-top card-img-marketplace" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">Muffins</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                     </div>
                     <div class="card-footer">
                        <p>$ 19.900</p>
                     </div>
                  </div>
                  
         </div>
      
      </div>
     
     
     
     
      </div>
   
      <div class="carousel-item">
      
      <div class="row  row-cols-1  g-1">
            <div class="col-12">
                  <div class="card card-marketplace h-100">
                     <div className="logito"> 
                        <p>PRODUCTO</p>      
                     </div>
                        <img src={fletes} class="card-img-top card-img-marketplace" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">Muffins</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                     </div>
                     <div class="card-footer">
                        <p>$ 19.900</p>
                     </div>
                  </div>
                  
         </div>
      
      </div>
         
      
      </div>
 

      <div class="carousel-item">
      
      <div class="row  row-cols-1  g-1">
            <div class="col-12">
                  <div class="card card-marketplace h-100">
                     <div className="logito"> 
                        <p>PRODUCTO</p>      
                     </div>
                        <img src={dulces} class="card-img-top card-img-marketplace" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">Muffins</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                     </div>
                     <div class="card-footer">
                        <p>$ 19.900</p>
                     </div>
                  </div>
                  
         </div>
      
      </div>
         
      
      </div>


      <div class="carousel-item">
      
      <div class="row  row-cols-1  g-1">
            <div class="col-12">
                  <div class="card card-marketplace h-100">
                     <div className="logito"> 
                        <p>PRODUCTO</p>      
                     </div>
                        <img src={empanadas} class="card-img-top card-img-marketplace" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">Muffins</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                     </div>
                     <div class="card-footer">
                        <p>$ 19.900</p>
                     </div>
                  </div>
                  
         </div>
      
      </div>
         
      
      </div>

      <div class="carousel-item">
      
      <div class="row  row-cols-1  g-1">
            <div class="col-12">
                  <div class="card card-marketplace h-100">
                     <div className="logito"> 
                        <p>PRODUCTO</p>      
                     </div>
                        <img src={jardineria} class="card-img-top card-img-marketplace" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">Muffins</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                     </div>
                     <div class="card-footer">
                        <p>$ 19.900</p>
                     </div>
                  </div>
                  
         </div>
      
      </div>
         
      
      </div>

   </div>
   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls-2" data-bs-slide="prev">
      <span class="carousel-control-prev-icon marketplace-arrow" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
   </button>
   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls-2" data-bs-slide="next">
      <span class="carousel-control-next-icon marketplace-arrow" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
   </button>
   </div>
</div>






















{/* Carrusel Marketplace responsive */}






  {/* Card Destacados Marketplace Fin */}

  
   <div className="footerSub ">
      <img className="logo3" src={logo}  alt="Logo" /> 
      <img className="logo4" src={santoTomas}  alt="Logo" /> 
   </div>
   
   <footer className="footerSantoTomas">
      <div className="footerN1">
         <h4>SOBRE NOSOTROS</h4>
         <p>This card has supporting text below</p>
      </div>
      <div className="footerN2">
         <h4>CONTACTANOS</h4>
         <p ><span className="correo"></span>  contacto@geroemprende.cl</p>
         <p>REDES SOCIALES</p>
         <div>
            <span className="instagram"></span>

            <span className="facebook"></span>
         </div>
      </div>
      <div className="footerN3">
         <h4>SUSCRIBETE</h4>
         <input className="email" type="email"/>
         <p>Te Invitamos a dejar tu correo para Recivir todas nuestras</p>
      </div>
   </footer>
 
</>
   )
}
