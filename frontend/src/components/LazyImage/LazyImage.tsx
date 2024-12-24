import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useInView } from "react-intersection-observer";
import "react-lazy-load-image-component/src/effects/blur.css";

interface LazyImageProps {
    src: string;
    alt: string;
    placeholder?: string;
    animationClass?: string; // Tailwind or custom animation classes
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, placeholder, animationClass }) => {
    const [loaded, setLoaded] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className={`relative overflow-hidden ${animationClass}`}>
            {/* Placeholder */}
            {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                    <span className="text-gray-500 text-sm">Loading...</span>
                </div>
            )}

            {/* Lazy-Loaded Image */}
            {inView && (
                <LazyLoadImage
                    src={src}
                    alt={alt}
                    effect="blur" // Blur effect during load
                    afterLoad={() => setLoaded(true)}
                    className={`transition-opacity duration-700 ${
                        loaded ? "opacity-100" : "opacity-0"
                    }`}
                />
            )}
        </div>
    );
};

export default LazyImage;
