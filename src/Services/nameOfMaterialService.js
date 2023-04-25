import axios from 'axios'
// const baseUrl = 'https://cirqulor20230316144753.azurewebsites.net/api/base/list'
const baseUrl = "https://lneuchmmydtxvcohcjuj2prp4m0nxmaw.lambda-url.eu-north-1.on.aws/api"


//GET Services
const getAllNames = async () => {
    const request = await axios.get(baseUrl + "/NameOfMaterial")

    return request.data

    // return request.then(response => response.data)
}
const getNameById = (id) => {
    const request = axios.get(baseUrl + "/NameOfMaterial/" + id)
    return request.then(response => response.data)
}
const getAllNamesNonQuery = () => {
    const request = axios.get(baseUrl + "/NameOfMaterial/nonquery")

    return request.then(res => res.data)

}
const getAllNamesViaTypeName = () => {
    const request = axios.get(baseUrl + "/NameOfMaterial/ViaTypeName")
    return request.then(res => res.data)
}
const getNamesByTypeId = (id) => {
    const request = axios.get(baseUrl + "/NameOfMaterial/api/type/" + id)
    return request.then(res => res.data)
}
export { getAllNames, getNameById, getAllNamesNonQuery, getNamesByTypeId, getAllNamesViaTypeName }