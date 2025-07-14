import React, {useRef} from 'react'
import { gsap } from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const ShowCaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
    projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
            y : 50,
            opacity : 0
        },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100',
                }
        });
    })
        gsap.fromTo(
            sectionRef.current,
            {opacity: 0 },
            { opacity: 1, duration: 1.5}
        )
    }, [])

    return (
        <section id='work' ref={sectionRef} className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                    <div ref={project1Ref} className='first-project-wrapper'>
                        <div className='image-wrapper'>
                            <img
                                src='/images/alumni.png'
                                alt='Ryde'
                            />
                        </div>
                        <div className='text-content'>
                            <h2>A full-featured web platform for Colleges to engage alumni through networking, donations, job opportunities, success stories, and event management.</h2>
                            <p className='text-white-50 md:text-xl'>
                                An app built with React, Vite, & TailwindCSS for a fast, user-friendly experience.
                            </p>
                        </div>
                    </div>

                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project' ref={project2Ref}>
                            <div className='image-wrapper bg-black'>
                            {/* bg-[#ffefdb] */}
                                <img
                                    src='/images/project2.png'
                                    alt='Library Management Platform'
                                />
                            </div>
                            <h2>Library Management Platform</h2>
                        </div>

                        <div className='project' ref={project3Ref}>
                            <div className='image-wrapper bg-black'>
                            {/* bg-[#ffe7eb] */}
                                <img
                                    src='/images/acewise.png'
                                    alt='YC Directory'
                                />
                            </div>
                            <h2>AceWise an AI powered Interview Platform</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowCaseSection
