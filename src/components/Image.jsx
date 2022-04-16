import React from "react";

export default function Image({className, src, alt, height, width}) {
    return (
        <div>
            <img className="img-responsive w-100 h-s" src={src} alt={alt} />
        </div>
    )
}