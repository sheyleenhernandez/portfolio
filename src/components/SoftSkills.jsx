import React from "react";
import {Text, Image} from './index';

const Icon = ({ divClass, src, alt, imageClassName, textClassName, textContent }) => { 
    return (
        <div className={divClass}>
            <Image src={src} alt={alt} className={imageClassName} />
            <Text className={textClassName} textContent={textContent} />
        </div>
    );
};


export default Icon;