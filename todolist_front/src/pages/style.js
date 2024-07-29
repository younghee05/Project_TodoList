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
    margin: 20px;

    
`;

export const mainPageInput = css`
    box-sizing: border-box;
    display: flex;
    width: 300px;
    height: 40px;
    border: none;

`;

export const input = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    font-size: 18px;
    border: 1px solid #000000;

`;

export const mainPageButton = css`
    box-sizing: border-box;
    width: 50px;
    border: 1px solid #000000;
    border-left: none;
    cursor: pointer;

`