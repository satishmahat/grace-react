import React, { useState, useEffect } from "react";
import './testimonials.css'

const testimonials = [
    {
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D", 
        title: "MY GRACE EXPERIENCE",
        description:
            "As a military-friendly school, Winthrop University helped ease Martha Selmon’s path to working in healthcare. Her military service enabled her to move around the country and to live overseas. Now, she's completed her bachelor’s degree and is working on a graduate degree.",
        name: "Martha Selmon '23",
        problem: "New alumna",
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
        title: "MY GRACE EXPERIENCE",
        description:
            "The support and resources provided by the university have been incredible. I’ve made lifelong friends and learned invaluable skills.",
        name: "Rahul Sharma '24",
        problem: "Graduate student",
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
        title: "MY GRACE EXPERIENCE",
        description:
            "From academics to extracurricular activities, my time here has been transformative. I’ve grown so much as a person and as a professional.",
        name: "Anjali Mehta '23",
        problem: "Alumna",
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJ3xlbnwwfHwwfHx8MA%3D%3D",
        title: "MY GRACE EXPERIENCE",
        description:
            "The faculty and facilities here are top-notch, providing an environment that fosters both personal and academic growth.",
        name: "Rohit Gupta '25",
        problem: "Undergraduate student",
    },
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Update the slide index every 4.5 seconds
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
            }, 4500);
            return () => clearInterval(interval);
        }
    }, [isPaused]);

    const handlePrev = () => {
        setCurrentIndex(
            currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % testimonials.length);
    };

    return (
        <>
        <div
            className="testimonial-slider"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="testimonial-content">
                <img src={testimonials[currentIndex].image} alt="testimonial" className="testimonial-image" />
                <div className="testimonial-text">
                    <h2>{testimonials[currentIndex].title}</h2>
                    <p>{testimonials[currentIndex].description}</p>
                    <h4>{testimonials[currentIndex].name}</h4>
                    <p className="problem">{testimonials[currentIndex].problem}</p>
                </div>
            </div>
            <div className="testimonial-controls">
                <button onClick={handlePrev}>&lt;</button>
                <button onClick={handleNext}>&gt;</button>
            </div>
        </div>
        </>
    );
};

export default TestimonialSlider;
