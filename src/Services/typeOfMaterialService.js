import axios from 'axios'
// const baseUrl = 'https://cirqulor20230316144753.azurewebsites.net/api/base/list'
const baseUrl = "https://lneuchmmydtxvcohcjuj2prp4m0nxmaw.lambda-url.eu-north-1.on.aws/api"

//GET Services
const getAllTypes = async () => {
    const request = await axios.get(baseUrl + "/TypeOfMaterial")

    return request.data

    // return request.then(response => response.data)
}
const getTypeById = (id) => {
    const request = axios.get(baseUrl + "/TypeOfMaterial/" + id)
    return request.then(response => response.data)
}
export { getAllTypes, getTypeById }