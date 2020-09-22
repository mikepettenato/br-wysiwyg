import React from "react";
import {makeStyles} from "@material-ui/styles";

export const Add = (props) => (
    // <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6" className={props.className}>
            <title>ChevronDownMedium</title>
            <rect id="ToDelete" fill="#000000" opacity="0" />
            <line strokeLinecap="undefine" strokeLinejoin="undefined" id="svg_3" y2="7.0" x2="5" y1="-1.0" x1="5" strokeWidth="1.5" stroke="#ffffff" fill="none"/>
            <line strokeLinecap="undefined" strokeLinejoin="undefined" id="svg_3" y2="3" x2="1" y1="3" x1="9" strokeWidth="1.5" stroke="#ffffff" fill="none"/>
        </svg>
    // </div>
)

export const Arrow = () =>(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6">
        <title>ChevronDownMedium</title>
        <rect id="ToDelete" fill="#ff13dc" opacity="0"/>
        <path
            d="M9.99,1.01A.9999.9999,0,0,0,8.28266.30327L5,3.58594,1.71734.30327A.9999.9999,0,1,0,.30327,1.71734L4.29266,5.69673a.99965.99965,0,0,0,1.41468,0L9.69673,1.71734A.99669.99669,0,0,0,9.99,1.01Z"/>
    </svg>
)

export const ArrowUp = () => (
    <svg viewBox="0 0 24 24">
        <title>Arrow Up</title>
        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
    </svg>
)

export const Button = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-link">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
)

export const Checkmark = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <title>S Checkmark 18 N</title>
        <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18"/>
        <path className="a"
              d="M15.656,3.8625l-.7275-.5665a.5.5,0,0,0-.7.0875L7.411,12.1415,4.0875,8.8355a.5.5,0,0,0-.707,0L2.718,9.5a.5.5,0,0,0,0,.707l4.463,4.45a.5.5,0,0,0,.75-.0465L15.7435,4.564A.5.5,0,0,0,15.656,3.8625Z"/>
    </svg>
)

export const Customize = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <defs>
        </defs>
        <title>S Edit 18 N</title>
        <rect id="Canvas" opacity="0"/>
        <path className="a"
              d="M16.7835,4.1,13.9,1.216a.60751.60751,0,0,0-.433-.1765H13.45a.6855.6855,0,0,0-.4635.203L2.542,11.686a.49494.49494,0,0,0-.1255.211L1.0275,16.55c-.057.1885.2295.4255.3915.4255a.12544.12544,0,0,0,.031-.0035c.138-.0315,3.933-1.172,4.6555-1.389a.486.486,0,0,0,.207-.1245L16.7565,5.014a.686.686,0,0,0,.2-.4415A.61049.61049,0,0,0,16.7835,4.1ZM5.7,14.658c-1.0805.3245-2.431.7325-3.3645,1.011L3.34,12.304Z"/>
    </svg>
)

export const Delete = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <defs>
            <style>
            </style>
        </defs>
        <title>S Delete 18 N</title>
        <rect id="Canvas" fill="#ff13dc" opacity="0"/>
        <path className="a"
              d="M15.75,3H12V2a1,1,0,0,0-1-1H6A1,1,0,0,0,5,2V3H1.25A.25.25,0,0,0,1,3.25v.5A.25.25,0,0,0,1.25,4h1L3.4565,16.55a.5.5,0,0,0,.5.45H13.046a.5.5,0,0,0,.5-.45L14.75,4h1A.25.25,0,0,0,16,3.75v-.5A.25.25,0,0,0,15.75,3ZM5.5325,14.5a.5.5,0,0,1-.53245-.46529L5,14.034l-.5355-8a.50112.50112,0,0,1,1-.067l.5355,8a.5.5,0,0,1-.46486.53283ZM9,14a.5.5,0,0,1-1,0V6A.5.5,0,0,1,9,6ZM11,3H6V2h5Zm1,11.034a.50112.50112,0,0,1-1-.067l.5355-8a.50112.50112,0,1,1,1,.067Z"/>
    </svg>
)

export const Edit = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
        <defs>
            <style>
            {/*    .a {*/}
            {/*    fill: #707070;*/}
            {/*}*/}
            </style>
        </defs>
        <title>S Edit 18 N</title>
        <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18"/>
        <path className="a"
              d="M16.7835,4.1,13.9,1.216a.60751.60751,0,0,0-.433-.1765H13.45a.6855.6855,0,0,0-.4635.203L2.542,11.686a.49494.49494,0,0,0-.1255.211L1.0275,16.55c-.057.1885.2295.4255.3915.4255a.12544.12544,0,0,0,.031-.0035c.138-.0315,3.933-1.172,4.6555-1.389a.486.486,0,0,0,.207-.1245L16.7565,5.014a.686.686,0,0,0,.2-.4415A.61049.61049,0,0,0,16.7835,4.1ZM5.7,14.658c-1.0805.3245-2.431.7325-3.3645,1.011L3.34,12.304Z"/>
    </svg>
)

export const Layers = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <defs>
            <style>
            </style>
        </defs>
        <title>S Layers 18 N </title>
        <rect id="Canvas" opacity="0"/>
        <path className="a"
              d="M14.144,9.969,9.2245,13.3825a.3945.3945,0,0,1-.45,0L3.856,9.969.929,12a.1255.1255,0,0,0,0,.2055l7.925,5.5a.2575.2575,0,0,0,.292,0l7.925-5.5a.1255.1255,0,0,0,0-.2055Z"/>
        <path className="a"
              d="M8.85,11.494.929,6a.1245.1245,0,0,1,0-.205L8.85.297a.265.265,0,0,1,.3,0l7.921,5.496a.1245.1245,0,0,1,0,.205L9.15,11.494A.265.265,0,0,1,8.85,11.494Z"/>
    </svg>

)


export const Move = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <defs>
            <style>
            </style>
        </defs>
        <title>S Move 18 N</title>
        <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18"/>
        <path className="a"
              d="M17,9a.25.25,0,0,0-.0565-.158L16,8.0145V8h-.0165L14.927,7.0735A.245.245,0,0,0,14.75,7a.25.25,0,0,0-.25.25V8H10V3.5h.75A.25.25,0,0,0,11,3.25a.24448.24448,0,0,0-.0735-.175L10,2.0165V2H9.9855L9.158,1.0565a.25.25,0,0,0-.316,0L8.0145,2H8v.0165L7.0735,3.073A.24449.24449,0,0,0,7,3.25a.25.25,0,0,0,.25.25H8V8H3.5V7.25A.25.25,0,0,0,3.25,7a.245.245,0,0,0-.175.0735L2.0165,8H2v.0145l-.9435.8275a.25.25,0,0,0,0,.316L2,9.9855V10h.0165l1.0565.926A.24552.24552,0,0,0,3.25,11a.25.25,0,0,0,.25-.25V10H8v4.5H7.25a.25.25,0,0,0-.25.25.24352.24352,0,0,0,.0735.175L8,15.9835V16h.0145l.8275.9435a.25.25,0,0,0,.316,0L9.9855,16H10v-.0165l.9265-1.057A.24349.24349,0,0,0,11,14.75a.25.25,0,0,0-.25-.25H10V10h4.5v.75a.25.25,0,0,0,.25.25.24549.24549,0,0,0,.175-.074L15.9835,10H16V9.9855l.9435-.8275A.25.25,0,0,0,17,9Z"/>
    </svg>
)


export const Square = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-square">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    </svg>
)

export const Text = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-type">
        <polyline points="4 7 4 4 20 4 20 7"></polyline>
        <line x1="9" y1="20" x2="15" y2="20"></line>
        <line x1="12" y1="4" x2="12" y2="20"></line>
    </svg>
)

export const Youtube = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-youtube">
        <path
            d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
)
