import { useEffect, useState } from "react"
import { getAllBioBased, getBioBasedById } from "../Services/bioBasedMaterialService"
import { Container, ListGroup } from "react-bootstrap"

export const BioBasedMaterialsList = () => {
    const [bioBase, setBioBases] = useState([])

    useEffect(() => {
        getAllBioBased().then(res => {
            setBioBases(res)

        }
        )
    }, [])

    return (
        <Container>

            {bioBase.map((item) =>
            (
                <BioBase key={item.id} id={item.id} />
            )
            )}

        </Container>
    )
}
function BioBase({ id }) {
    const [bioBase, setBioBase] = useState({})
    const [types, setTypes] = useState([])
    useEffect(() => {
        getBioBasedById(id).then(res => {
            setBioBase(res)
            setTypes(res.typeOfMaterialList)
        }

        )
    }, [id])


    return (
        <ListGroup variant="flush" >
            <ListGroup.Item style={{ backgroundColor: "transparent", borderBottom: "#84BB25 2px dotted" }}><h2 className="text-green-100 fw-bold">{bioBase.name}</h2></ListGroup.Item>
            {types.map((item) => (
                <ListGroup.Item style={{ backgroundColor: "transparent", borderBottom: "#84BB25 1px solid" }} className="text-light fs-4" key={item.id}>
                    <a className="text-light" href={`/TypeOfMaterial/${item.id}`} style={{ textDecoration: "none" }}>{item.name}</a>
                </ListGroup.Item>
            ))}
        </ListGroup>

    )

}