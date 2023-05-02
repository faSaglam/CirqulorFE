import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getTypeById } from "../Services/typeOfMaterialService"
import { Container, ListGroup } from "react-bootstrap"
export const TypeOfMaterial = () => {
    const routeParams = useParams()
    const [type, setType] = useState([])
    useEffect(() => {
        getTypeById(routeParams.id).then(res => {
            setType(res)
        })

    }, [routeParams])
    if (!type) {
        return (
            <Container>
                <h4 className="text-warning">There is no data yet</h4>
            </Container>
        )
    }

    if (type && !type.id) {
        return (
            <Container>
                <h4 className="text-warning">Loading!..</h4>
            </Container>

        )
    }

    if (type.nameOfMaterialList === null)
        return (
            <Container>

                <h4 className="text-warning">There is no Supplier yet!</h4>

            </Container>
        )
    return (
        <Container>
            <ListGroup variant="flush">
                <ListGroup.Item style={{ backgroundColor: "transparent", borderBottom: "#84BB25 2px dotted" }}><h4 className="text-green-100">{type.name}</h4></ListGroup.Item>
                {type.nameOfMaterialList.map((item) => (
                    < NameOfMaterialList nameOfMaterial={item} />
                ))}

            </ListGroup>

        </Container >
    )

}
function NameOfMaterialList({ nameOfMaterial }) {
    const [name] = useState(nameOfMaterial);
    console.log("name of materials", name)

    if (name === null) {
        return <p className="fs-4 text-warning">Loading..!</p>
    }
    return (
        <>
            <ListGroup.Item style={{ backgroundColor: "transparent", borderBottom: "#84BB25 1px solid" }} className=" fw-bold fs-5" key={name.id}>
                {/* <a className="text-light" href={`/NameOfMaterial/${name.id}`} style={{ textDecoration: "none" }}>{name.name}</a> */}
                <a className="text-light" href={`/NameOfMaterial/${name.id}`} style={{ textDecoration: "none" }}>{name.name}</a>
            </ListGroup.Item>
        </>
    )

}
// function NameOfMaterialList({ typeId }) {
//     const [nameList, setNameList] = useState([])
//     useEffect(() => {
//         getNamesByTypeId(typeId).then(res =>
//             setNameList(res))
//     }, [typeId])
//     if (nameList !== []) {
//         return (
//             <>
//                 {nameList.map((item) => (
//                     <ListGroup.Item style={{ backgroundColor: "transparent", borderBottom: "#84BB25 2px solid" }} className=" fw-bold fs-5" key={item.id}>
//                         <a className="text-light" href={`/NameOfMaterial/${item.id}`} style={{ textDecoration: "none" }}>{item.name}</a>
//                     </ListGroup.Item>
//                 ))}

//             </>

//         )

//     }
//     return (
//         <>
//             <p className="text-light">There is No Name Of Material Yet!</p>
//         </>
//     )


// }