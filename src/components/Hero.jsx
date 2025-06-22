import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'


const Hero = () => {


    useGSAP(() => {
        const heroSplit = new SplitText(".title", { type: "words , chars" });
        const paragraphSplit = new SplitText(".subtitle", { type: "lines" });


        heroSplit.chars.forEach((char) => {
            char.classList.add("text-gradient");
        });

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.1,
            delay: 0.5
        })
        gsap.from(paragraphSplit.lines, {
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.1,
            delay: 1,
            opacity: 0
        })
        gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                scrub: true,
                start: "top top",
                end: "bottom top",
            }
        })
            .to(".left-leaf", {
                y: -300,
                opacity: 0,
                duration: 1.5,
            })
            .to(".right-leaf", {
                y: 500,
                opacity: 0,
                duration: 1.5

            }, 0)
    })


    return (
        <>
            <section id='hero' className='noisy'>
                <h1 className='title'>
                    ZAMZAM
                </h1>
                <img src="/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf' />
                <img src="/images/hero-right-leaf.png" alt="right-leaf" className='right-leaf' />
                <div className='body'>
                    <div className='content'>
                        <div className='space=y=5 hidden md:block'>
                            <p>
                                Cool. Crisp. Classic
                            </p>
                            <p className='subtitle'>
                                Sip the Spirit <br></br> of Summer
                            </p>
                        </div>
                        <div className='view-cocktails'>
                            <p className='subtitle'>
                                Zamzam flows with a purity unmatched, cool and refreshing like a whisper from paradise.
                                Its taste is light yet deeply satisfying — as if each drop carries a blessing from the sacred.
                            </p>
                            <a href='#cocktails'>View Zamzam Collections

                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero