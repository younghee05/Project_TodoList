import { css } from "@emotion/react";

export const mainlayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin: 15px;
    
`;

export const input = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    width: 300px;
    height: 40px;
    border: none;
    margin: 0;

`;

export const mainPageInput = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    font-size: 18px;
`;

export const mainPageButton = css`
    box-sizing: border-box;
    width: 40%;
    height: 100%;
    border: 1px solid black;
    border-left: none;
`