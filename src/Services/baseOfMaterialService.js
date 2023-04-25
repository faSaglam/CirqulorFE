import axios from 'axios'
// const baseUrl = 'https://cirqulor20230316144753.azurewebsites.net/api/base/list'
// const baseUrl = 'http://localhost:13542/api'
const baseUrl = process.env.baseUrl;


//GET Services
const getAllBases = async () => {

    const request = await axios.get(baseUrl + "/BaseOfMaterial")

    return request.data

    // return request.then(response => response.data)
}
const getBaseById = (id) => {
    const request = axios.get(baseUrl + "/BaseOfMaterial/" + id)
    return request.then(response => response.data)
}
export { getAllBases, getBaseById }