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