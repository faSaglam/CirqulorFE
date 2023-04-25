import axios from 'axios'
// const baseUrl = 'https://cirqulor20230316144753.azurewebsites.net/api/base/list'
const baseUrl = "https://lneuchmmydtxvcohcjuj2prp4m0nxmaw.lambda-url.eu-north-1.on.aws/api"
const withOutApi = "https://lneuchmmydtxvcohcjuj2prp4m0nxmaw.lambda-url.eu-north-1.on.aws"
const getListByName = async (name) => {
    const request = await axios.get(withOutApi + "/nameofmaterials/" + name)

    return request.data
}
const getById = async (id) => {
    const req = await axios.get(baseUrl + "/MaterialsOfProducer/" + id)
    return req.data


}
const getAllSuppliers = async () => {
    const req = await axios.get(baseUrl + "/MaterialsOfProducer")
    return req.data
}
export { getListByName, getById, getAllSuppliers }