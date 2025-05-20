import React from 'react';

interface TestimonialProps {
    name: string;
    title: string;
    message: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, title, message }) => (
    <div className="testimonial h-[400px] flex flex-row items-start gap-4 h-full relative overflow-hidden shadow-xl border-2 border-black/10 p-10 min-h-max min-w-[400px] z-[6] bg-primary-foreground">
        <div className="flex-shrink-0 pt-2 pl-2">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <text x="0" y="38" fontSize="48" fontWeight="bold" fill="gray" fontFamily="serif">&ldquo;</text>
            </svg>
            </div>
        <div className="flex flex-col justify-center h-full min-h-max">
            
            <p className="text-lg font-thin">
            {message}
            </p>
            <div className="mt-4">
            <span className="font-semibold">{name}</span>
            <span className="ml-2 text-gray-500"><br/>{title}</span>
            <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                ))}
            </div>
            </div>
        </div>
    </div>
);

export default Testimonial;