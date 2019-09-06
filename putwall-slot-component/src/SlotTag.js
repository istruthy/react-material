import React from "react";

const SlotTagComponent = ({ svgRef, ...props }) => (
    <svg {...props} width={298} height={143} viewBox="0 0 298 143" ref={svgRef}>
        <defs>
            <style>
                {
                    ".a{fill:#de5703;}.b{font-size:75px;font-family:Roboto-Bold, Roboto;font-weight:700;}.c{font-size:28px;font-family:Roboto-Light, Roboto;font-weight:300;}.d{fill:#fff;}"
                }
            </style>
        </defs>
        <rect className="a" width={298} height={143} rx={7} />
        <path
            d="M-78-455.654v87.6H-88.5l19.773,34.864L-49.9-368.052H-60.656v-87.6Z"
            transform="translate(99 470)"
        />
        <text className="b" transform="translate(81 93)">
            <tspan x={0} y={0}>
                {"B070"}
            </tspan>
        </text>
        <text className="c" transform="translate(118 29)">
            <tspan x={0} y={0}>
                {"W-A1-10"}
            </tspan>
        </text>
        <rect className="d" width={215} height={33} transform="translate(62 104)" />
    </svg>
);

const SlotTag = React.forwardRef((props, ref) => (
    <SlotTagComponent svgRef={ref} {...props} />
));
export default SlotTag;
