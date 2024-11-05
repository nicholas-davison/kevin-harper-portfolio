// components/Parallax.tsx
import { useEffect, useState, ReactNode } from 'react';

interface ParallaxProps {
    children: ReactNode;
    imageUrl: string;
    speed: number;
    cover: boolean
}

const Parallax: React.FC<ParallaxProps> = ({ children, imageUrl, speed, cover}) => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const parallaxStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: `center ${20 + scrollY * speed}%`, // Use speed prop to adjust effect
    };

    return (
        <div
            className={` ${cover ? "flex h-screen bg-cover bg-center justify-center items-center" : "h-auto p-16 bg-cover"} `}
            style={parallaxStyle}
        >
            {children}
        </div>
    );
};

export default Parallax;

