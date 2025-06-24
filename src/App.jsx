import React from 'react'
import { ScrollTrigger,SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Cocktail from './components/Cocktail'
//split text for text animation and the scrool trogger for scroll animatin
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
       <main>
           <Navbar/>
           <Hero/>
           <Cocktail/>

         </main>
    )
}

export default App