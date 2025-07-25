import React from 'react'
import { navLinks } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const navbar = () => {


    useGSAP(() => {
        const navTween = gsap.timeline(
          {
            scrollTrigger : {
                //when the element of nav comes then this triggger will  be done
                trigger : "nav",
                start : "bottom top",
                
            }
          }    
        );
        navTween.fromTo(
            "nav",{
                backgroundColor:"transaparent"
            },{
                backgroundColor:"#00000050",
                nackgroundFilter:"blur(10px)",
                duration:1,
                ease:"power1.inOut"
            }
        );
    })

    return (
        <nav>
            <div>
                <a className='flex items-center gap-2' href='#home'>
                    <img src="/images/image-removebg-preview (1).png" alt="logo" className='w-10 h-10 object-contain' />
                    <p>
                        Juice Zone
                    </p>
                </a>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>)
}

export default navbar