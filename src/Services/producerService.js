import axios from 'axios'
// const baseUrl = 'https://cirqulor20230316144753.azurewebsites.net/api/base/list'
const baseUrl = "https://lneuchmmydtxvcohcjuj2prp4m0nxmaw.lambda-url.eu-north-1.on.aws/api"

//GET Services

const getProducerById = (id) => {
    const request = axios.get(baseUrl + "/User/" + id)
    return request.then(response => response.data)
}
const getProducerSourceById = (id) => {
    const request = axios.get(baseUrl + "/User/source/" + id)
    return request.then(response => response.data)

}

export { getProducerById, getProducerSourceById }