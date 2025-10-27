import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Link } from 'react-router-dom'
import Footer from '../sections/Footer.jsx'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
    const pageRef = useRef(null)
    const projectsRef = useRef([])

    // All projects data (including the ones from the main showcase)
    const allProjects = [
        {
            id: 1,
            title: "Alumni Network Platform",
            description: "A full-featured web platform for Colleges to engage alumni through networking, donations, job opportunities, success stories, and event management.",
            image: "/images/alumni.png",
            tech: ["React", "Vite", "TailwindCSS"],
            features: ["Alumni Networking", "Donation Management", "Job Opportunities", "Event Management"],
            category: "Web Application"
        },
        {
            id: 2,
            title: "Library Management Platform",
            description: "A comprehensive library management system with book tracking, user management, and automated notifications.",
            image: "/images/project2.png",
            tech: ["React", "Node.js", "MongoDB"],
            features: ["Book Management", "User Authentication", "Automated Notifications", "Search & Filter"],
            category: "Management System"
        },
        {
            id: 3,
            title: "AceWise AI Interview Platform",
            description: "An AI-powered interview platform that provides real-time feedback and practice sessions for job interviews.",
            image: "/images/acewise.png",
            tech: ["React", "Python", "TensorFlow", "WebRTC"],
            features: ["AI-Powered Feedback", "Real-time Practice", "Interview Analytics", "Video Recording"],
            category: "AI Application"
        },
        {
            id: 4,
            title: "E-Commerce Dashboard",
            description: "A comprehensive admin dashboard for managing e-commerce operations with real-time analytics, inventory management, and order processing.",
            image: "/images/project1.png",
            tech: ["React", "Node.js", "MongoDB", "Chart.js"],
            features: ["Real-time Analytics", "Inventory Management", "Order Processing", "User Management"],
            category: "Dashboard"
        },
        {
            id: 5,
            title: "Task Management App",
            description: "A collaborative task management application with team features, project tracking, and deadline management capabilities.",
            image: "/images/project2.png",
            tech: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
            features: ["Team Collaboration", "Project Tracking", "Deadline Management", "Real-time Updates"],
            category: "Productivity"
        },
        {
            id: 6,
            title: "Weather Analytics Platform",
            description: "A data visualization platform for weather analytics with interactive charts, historical data analysis, and predictive modeling.",
            image: "/images/project3.png",
            tech: ["D3.js", "Python", "Flask", "TensorFlow"],
            features: ["Data Visualization", "Historical Analysis", "Predictive Modeling", "Interactive Charts"],
            category: "Data Analytics"
        },
        {
            id: 7,
            title: "Social Media Scheduler",
            description: "An automated social media management tool with content scheduling, analytics tracking, and multi-platform posting capabilities.",
            image: "/images/acewise.png",
            tech: ["React Native", "Node.js", "Redis", "AWS"],
            features: ["Content Scheduling", "Analytics Tracking", "Multi-platform Posting", "Automation"],
            category: "Social Media"
        },
        {
            id: 8,
            title: "Real Estate Portal",
            description: "A modern real estate platform with property listings, virtual tours, and advanced search capabilities.",
            image: "/images/project1.png",
            tech: ["Next.js", "Prisma", "PostgreSQL", "Mapbox"],
            features: ["Property Listings", "Virtual Tours", "Advanced Search", "Map Integration"],
            category: "Real Estate"
        }
    ]

    useGSAP(() => {
        // Page entrance animation
        gsap.fromTo(
            pageRef.current,
            { opacity: 0, y: 50 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 1,
                ease: "power2.out"
            }
        )

        // Projects grid animation
        projectsRef.current.forEach((project, index) => {
            if (project) {
                gsap.fromTo(
                    project,
                    {
                        y: 50,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: 0.1 * index,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: project,
                            start: 'top bottom-=100',
                        }
                    }
                )
            }
        })
    }, [])

    const addToRefs = (el) => {
        if (el && !projectsRef.current.includes(el)) {
            projectsRef.current.push(el)
        }
    }

    return (
        <div ref={pageRef} className="min-h-screen bg-black pt-20">
            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        My <span className="text-white-50">Projects</span>
                    </h1>
                    <p className="text-white-50 text-lg md:text-xl max-w-3xl mx-auto">
                        A collection of my work showcasing various technologies, frameworks, and problem-solving approaches.
                    </p>
                </div>

                {/* Back to Home Button */}
                <div className="mb-12">
                    <Link 
                        to="/" 
                        className="inline-flex items-center text-white-50 hover:text-white transition-colors duration-200"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProjects.map((project, index) => (
                        <div 
                            key={project.id} 
                            ref={addToRefs}
                            className="bg-black-200 rounded-2xl p-6 hover:bg-black-50 transition-all duration-300 group cursor-pointer"
                        >
                            {/* Project Image */}
                            <div className="image-wrapper mb-6 rounded-xl overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Project Category */}
                            <div className="mb-3">
                                <span className="px-3 py-1 bg-white-10 text-white-50 text-xs rounded-full">
                                    {project.category}
                                </span>
                            </div>

                            {/* Project Title */}
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white-50 transition-colors duration-200">
                                {project.title}
                            </h3>

                            {/* Project Description */}
                            <p className="text-white-50 mb-4 text-sm leading-relaxed">
                                {project.description}
                            </p>
                            
                            {/* Technologies */}
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, techIndex) => (
                                        <span key={techIndex} className="px-3 py-1 bg-white-10 text-white-50 text-xs rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Key Features */}
                            <div>
                                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                                <ul className="text-white-50 text-xs space-y-1">
                                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            <span className="w-1.5 h-1.5 bg-white-50 rounded-full mr-2"></span>
                                            {feature}
                                        </li>
                                    ))}
                                    {project.features.length > 3 && (
                                        <li className="text-white-50 text-xs">
                                            +{project.features.length - 3} more features
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Projects
