import React from "react";
import Img from "./img";
import "../../index.css";

const Rightside = () => {
    const imageData = [
        {
            imgurl: "https://images.unsplash.com/photo-1588026193712-31163b26c043",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            buttonText: "Underbanked",
            buttonColor: "red",
        },
        {
            imgurl: "https://images.unsplash.com/photo-1600275669439-14e40452d20b",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            buttonText: "Satisfied",
            buttonColor: "blue",
        },
        {
            imgurl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            buttonText: "Dissatisfied",
            buttonColor: "green",
        },
        {
            imgurl: "https://images.unsplash.com/photo-1588026193712-31163b26c043",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            buttonText: "Underbanked",
            buttonColor: "red",
        },
        {
            imgurl: "https://images.unsplash.com/photo-1600275669439-14e40452d20b",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            buttonText: "Satisfied",
            buttonColor: "blue",
        },
        {
            imgurl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            buttonText: "Dissatisfied",
            buttonColor: "green",
        },
    ];

    // duplicate list → makes seamless loop
    const loopData = [...imageData, ...imageData];

    return (
        <div className="w-2/3 overflow-x-auto scrollbar-visible">

            {/* moving rail */}
            <div className="flex flex-nowrap gap-10 p-6 w-max animate-scrollX">
                {loopData.map((item, i) => (
                    <Img
                        key={i}
                        imgUrl={item.imgurl}
                        description={item.description}
                        buttonText={item.buttonText}
                        buttonColor={item.buttonColor}
                        index={(i % imageData.length) + 1}
                    />
                ))}
            </div>

        </div>
    );
};

export default Rightside;
