import React from "react";
import Button from "../Navbar/Button";

const Img = ({ imgUrl, description, buttonText, buttonColor = "blue", index }) => {
    return (
        <div className="relative w-[320px] h-[560px] rounded-3xl overflow-hidden shadow-xl">

            {/* Background Image */}
            <img
                src={imgUrl}
                alt="card"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            {/* Index badge */}
            {index !== undefined && (
                <div className="absolute top-4 left-4 bg-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                    {index}
                </div>
            )}

            {/* Content */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="mb-4 leading-relaxed text-sm">
                    {description}
                </p>

                <Button text={buttonText} bg={buttonColor} />
            </div>
        </div>
    );
};

export default Img;
