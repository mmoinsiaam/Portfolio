import { useEffect, useState } from "react";

// id, size, x, y, opac, anim_dur - stars
// id, size, x, y, delay, anim_dur - meteors

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight) / 10000;
        
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }

        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 4;
        
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 2,
            });
        }

        setMeteors(newMeteors);
    };

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((stars) => (
            <div 
                key={stars.id} 
                className="star animate-pulse-subtle" style={{
                width: stars.size + "px",
                height: stars.size + "px",
                left:  stars.x + "%",
                top: stars.y + "%",
                opacity: stars.opacity,
                animationDuration: stars.animationDuration + "s",
            }} />
        ))}

        {meteors.map((meteors) => (
            <div 
                key={meteors.id} 
                className="meteor animate-meteor" style={{
                width: meteors.size * 50 + "px",
                height: meteors.size * 2 + "px",
                left:  meteors.x + "%",
                top: meteors.y + "%",
                animationDelay: meteors.delay,
                animationDuration: meteors.animationDuration + "s",
            }} />
        ))}
    </div>;
}