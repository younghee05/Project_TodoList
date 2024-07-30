import api from "./instance";

export async function postTodoApi(todo) {
    let response = null;

    try {
        response = await api.post("/todo", todo); 
    } catch(e) {
        console.error(e);
        response = e.response.data;
    }

    return response;
}

export async function getTodoListApi(date) {
    let response = null;

    try {
        response = await api.get(`/todolist/${date}`);
    } catch (e) {
        console.error(e);
    }
    return response;
}