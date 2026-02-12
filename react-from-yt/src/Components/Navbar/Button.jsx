import React from "react";

const colorMap = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    black: "bg-black",
    gray: "bg-gray-400",
};

const Button = ({ bg = "red", text }) => {
    const bgClass = colorMap[bg] || colorMap.red;

    return (
        <button className={`${bgClass} text-white rounded-full px-5 py-2 shadow-md`}>
            {text}
        </button>
    );
};

export default Button;
