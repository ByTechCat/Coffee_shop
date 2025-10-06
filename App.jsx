import React from 'react'
import "./App.css"
import Navbar from './Navbar'
import Header from './Header'
import Cards from './Cards'
import img1 from "./assets/cappucino.jpg";
import img2 from "./assets/espresso2.jpg";
import img3 from "./assets/iced-matcha-latte.jpg";
import img4 from "./assets/kopi-latte.jpg";
import img5 from "./assets/boba-2.jpg";
import Footer from './Footer'

function App() {
  return (
    <div>
   <Navbar/>
   <Header/>
   <div className="flex flex-wrap gap-6 justify-center left-10 right-10">
   <Cards heading="Cappucino" img={img1}/>
<Cards heading="Iced-Matcha-Latte" img={img3}/>
<Cards heading="Espresso" img={img2}/>
<Cards heading="Kopi Latte" img={img4}/>
<Cards heading="Milk Tea" img={img5}/>
</div>
<Footer />
  </div>
  
  )
}

export default App
