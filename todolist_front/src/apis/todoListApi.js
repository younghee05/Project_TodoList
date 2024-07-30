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
