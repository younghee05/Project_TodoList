import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 700px;
    margin: 10px;
    border: 2px solid #dbdbdb;
    border-top: none;
`;

export const modalLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

export const titleBox = css`
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #000000;
`;

export const h2Title = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`;

export const listLayout = css`
    box-sizing: border-box;
    display: flex;
    margin-top: 12px;
    width: 100%;
`;

export const checkList = css`
    box-sizing: border-box;
    width: 100%;
`;

export const updateButton = css`
    box-sizing: border-box;
    margin: 0px 6px 0px 0px;
    padding: 3px 5px;
    width: 49px;
    border: none;
`;

export const deleteButton = css`
    box-sizing: border-box;
    margin: 0px 7px 0px 0px;
    padding: 3px 5px;
    width: 49px;
    border: none;
`;