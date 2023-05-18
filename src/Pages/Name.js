import { useParams } from "react-router-dom";
import { getNameById } from "../Services/nameOfMaterialService";
import { useEffect, useState } from "react";
import { getSourceById } from "../Services/sourceOfMaterialService";
import { getProducerById, getProducerSourceById } from "../Services/producerService";
export const Names = () => {
    const routeParams = useParams()
    const [names, setNames] = useState({})
    const [source, setSource] = useState([])
    const [users, setUsers] = useState([])
    useEffect(() => {
        getNameById(routeParams.id).then(res => {
            console.log(res)
            setNames(res)
            if (res.sourceOfMaterials !== null) {
                setSource(res.sourceOfMaterials)
            }
            if (res.users !== null) {
                setUsers(res.users)

            }
        })
    }, [routeParams])
    return (
        <>
            <div className="card">
                <div className="card-title"><h3>{names.name}</h3></div>
                <hr></hr>
                <div className="card-text">Description</div>
            </div>
            {users.map((user) => {
                return (
                    <Users id={user} key={user} />
                )

            })}


            <div className="card">
                <div className="card-title"><h5>Source</h5></div>
                <div className="row">
                    <div className="col">
                        {source.map(item => (
                            <SourceList id={item} key={item} />
                        ))}
                    </div>
                </div>
            </div>
        </>


    )
}
const Users = ({ id }) => {
    const [user, setUser] = useState({})
    const [source, setSource] = useState([])

    useEffect(() => {
        getProducerById(id).then(res => {
            setUser(res)
        })
        getProducerSourceById(id).then(res => {
            setSource(res.sourceOfMaterialList)
        })

    }, [id])
    console.log(source)

    return (
        <>
            <br />
            <div className="card mt-4 mb-4">
                <div className="card-title"><h5>Producer</h5></div>
                <div className="card-text">
                    <p className="fs-5">Name : {user.userName}</p>
                    {source.map((item) => (<p className="fs-5">Source : {item.name}</p>)
                    )}
                </div>
            </div>
        </>
    )
}
const SourceList = ({ id }) => {
    const [source, setSource] = useState({})
    useEffect(() => {
        getSourceById(id).then(res => setSource(res))
    }, [id])
    if (!source) {
        return (
            <><p>There is no source yet</p></>
        )
    }
    return (
        < >
            <a href={`/source/${id}`} className="btn btn-success m-2" style={{ minWidth: "18rem" }}>{source.name}</a>
        </>
    )

}