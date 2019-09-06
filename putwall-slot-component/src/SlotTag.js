import React from "react";
import './SlotTag.css';
import arrow from './arrow.svg';

const SlotTag = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="item"><img src={arrow} className="arrow-down" alt="arrow" /></div>
                <div className="item item2">
                    <div className="wall-number">w-a1-10</div>
                    <div className="slot-number">B070</div>
                    <div className="bar-code-placement">||||||||||||||||||||</div>
                </div>
            </div>
        </div>
    )
}
export default SlotTag;
