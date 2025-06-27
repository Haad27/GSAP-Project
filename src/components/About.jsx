import { useGSAP } from '@gsap/react';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const titleSplit = new SplitText("#about h2", {
      type: "words",
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    })
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
        duration: 1,
      })
      .from(".top-grid div, .bottom-grid div", {
        opacity: 0,
        stagger: 0.04,
        duration: 1,
        ease: "power1.inOut",
      },"-=0.05");
  }, []);

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Juices</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>
              farm-picked fruits to the final pour
            </h2>
          </div>

          <div className="sub-content">
            <p>
Every juice at Juice Zone is crafted with purpose — from the first slice to the final pour. It's this attention to freshness that turns every sip into something unforgettable.            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="grid-img-2" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="grid-img-5" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="grid-img-3" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="grid-img-4" />
        </div>
      </div>
    </div>
  );
};

export default About;
