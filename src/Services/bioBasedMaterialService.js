import axios from 'axios'
// const baseUrl = 'https://cirqulor20230316144753.azurewebsites.net/api/base/list'
// const baseUrl = 'http://localhost:13542/api'
const baseUrl = "https://lneuchmmydtxvcohcjuj2prp4m0nxmaw.lambda-url.eu-north-1.on.aws/api"
//GET Services
const getAllBioBased = async () => {

    const request = await axios.get(baseUrl + "/BioBasedMaterial")

    return request.data

    // return request.then(response => response.data)
}
const getBioBasedById = (id) => {
    const request = axios.get(baseUrl + "/BioBasedMaterial/" + id)
    return request.then(response => response.data)
}

export { getAllBioBased, getBioBasedById }