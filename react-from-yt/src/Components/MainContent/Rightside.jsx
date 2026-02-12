import React from "react";
import Img from "./img";
const Rightside = () => {
    const imageData = [
        {
            imgurl: "https://images.unsplash.com/photo-1588026193712-31163b26c043?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            buttonText: "Underbanked",
            buttonColor: "red"
        },
        {
            imgurl: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            buttonText: "Satisfied",
            buttonColor: "blue"
        },
        {
            imgurl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            buttonText: "Dissatisfied",
            buttonColor: "green"
        }
    ];

    return (
        <div className="flex gap-6 p-10 flex-wrap">
            {imageData.map((item, i) => (
                <Img
                    key={i}
                    imgUrl={item.imgurl}
                    description={item.description}
                    buttonText={item.buttonText}
                    buttonColor={item.buttonColor}
                    index={i + 1}
                />
            ))}
        </div>
    );
};

export default Rightside;
