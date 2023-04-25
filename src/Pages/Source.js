import { useParams } from "react-router-dom";
import { getSourceById } from "../Services/sourceOfMaterialService";
import { useEffect, useState } from "react";
export const Source = () => {
    const routeParams = useParams()
    const [source, setSource] = useState({})
    // const [user, setUser] = useState([])


    useEffect(() => {
        getSourceById(routeParams.id).then(res => {
            setSource(res)
            // setUser(res.userList)
        })
    }, [routeParams])


    return (
        <>
            <h4>{source.name}</h4>

        </>
    )

}