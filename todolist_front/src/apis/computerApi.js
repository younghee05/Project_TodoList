import api from "./instance";

export async function getComputerApi(id) {
    let response = null;

    try {
        response = await api.get(`/computer/${id}`); 
    } catch(e) {
        console.error(e);
        response = e.response.data;
    }

    return response;

}

export async function getTodoApi(todoDate) {
    let response = null;

    try {
        response = await api.get(`/todolist/${todoDate}`, {todoDate}); 
    } catch(e) {
        console.error(e);
        response = e.response.data;
    }

    return response;

}