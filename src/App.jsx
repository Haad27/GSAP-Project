import React from 'react'
import { ScrollTrigger,SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktail'
import About from './components/About'
import Art from './components/Art'
import Menu from './components/Menu'
import Contact from './components/Contact'
//split text for text animation and the scrool trogger for scroll animatin
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
       <main>
           <Navbar/>
           <Hero/>
           <Cocktails/>
           <About/>
           <Art/>
           <Menu/>
           <Contact/>
         </main>
    )
}

export default App