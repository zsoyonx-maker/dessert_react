import React, { useEffect, useRef } from "react";
import { imageTextData } from "../data/imageTextData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ImageText = (props) => {
    const imageTextRef = useRef(null);
    const textRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            textRef.current,
            {
                y: 300,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,

                scrollTrigger: {
                    trigger: imageTextRef.current,
                    start: "top 80%",
                },
            },
        );
    });

    return (
        <section id="imgTextType" className="section">
            <h2 className="blind">{props.title}</h2>
            <div className="imgText_inner container" ref={imageTextRef}>
                <div className="imgText_txt">
                    <div className="small">{imageTextData.subtitle}</div>
                    <h3 className={`title ${props.color}`}>{imageTextData.title}</h3>
                    <div className="desc">{imageTextData.desc}</div>
                    <ul className="list">
                        {imageTextData.list.map((list, index) => (
                            <li key={index}>
                                <a href="/">{list}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {imageTextData.recipes.map((recipe, index) => (
                    <div
                        className={`imgText_img ${recipe.className}`}
                        key={recipe.id}
                        ref={(el) => (textRef.current[index] = el)}
                    >
                        <a href="/" className={recipe.btnClass}>
                            {recipe.text}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ImageText;
