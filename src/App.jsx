import React from 'react'
import { ScrollTrigger,SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/cocktail'
//split text for text animation and the scrool trogger for scroll animatin
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
       <main>
           <Navbar/>
           <Hero/>
           <Cocktails/>

         </main>
    )
}

export default App