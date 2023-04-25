import axios from 'axios'
// const baseUrl = 'https://cirqulor20230316144753.azurewebsites.net/api/base/list'
const baseUrl = "https://lneuchmmydtxvcohcjuj2prp4m0nxmaw.lambda-url.eu-north-1.on.aws/api"

//GET Services
const getAllSources = async () => {
    const request = await axios.get(baseUrl + "/SourceOfMaterial")

    return request.data

    // return request.then(response => response.data)
}
const getSourceById = (id) => {
    const request = axios.get(baseUrl + "/SourceOfMaterial/" + id)
    return request.then(response => response.data)
}

export { getAllSources, getSourceById }