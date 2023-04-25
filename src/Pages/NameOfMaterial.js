import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getNameById } from "../Services/nameOfMaterialService"
import { Container, ListGroup } from "react-bootstrap"
export const NameOfMaterial = () => {
    const routeParams = useParams()
    const [name, setName] = useState([])
    const [supplierList, setSuplierList] = useState([])
    useEffect(() => {
        getNameById(routeParams.id).then(
            res => {
                setName(res)

                setSuplierList(res.materialOfSuppliersList)

            }
        )

    }, [routeParams])
    console.log("supllier", supplierList)
    if (supplierList === null) {
        return (
            <Container>
                <h3 className="text-light"> Name Of Material {name.name}</h3>
                <h4 className="text-warning">There is no Suplier yet!</h4>

            </Container>
        )
    }


    return (
        <Container>
            <h3> Name Of Material {name.name}</h3>
            {supplierList.map((item) => (
                <p className="text-light">{item.userName}</p>
            )

            )}
            <ListGroup variant="flush">
                <ListGroup.Item style={{ backgroundColor: "transparent", borderBottom: "#84BB25 5px dotted" }}><h4 className="text-green-100 fw-bold fs-3">{name.name}</h4></ListGroup.Item>
                {supplierList.map((user) => (
                    <ListGroup.Item style={{ backgroundColor: "transparent", borderBottom: "#84BB25 2px solid" }}>

                        <a className="text-light fs-4 fw-bold" href={`/MaterialsOfProducer/${user.id}`} style={{ textDecoration: "none" }}>{user.producerName}</a>
                    </ListGroup.Item>

                ))}

            </ListGroup>
        </Container>

    )
}