import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"

import { Container, ListGroup, Row, Col, Button, Image } from "react-bootstrap";


import { getNameById } from "../../Services/nameOfMaterialService"


export const SearchWithName = () => {

    const [supplier, setSupplier] = useState([])
    const [nom, setNom] = useState("")

    function handleSupplierList(supList) {
        setSupplier(supList)
    }
    function handleNom(supplier2) {
        setNom(supplier2)
    }
    if (nom === "") {
        return (
            <Container style={{ minHeight: "62vh" }} fluid>
                <Row>
                    <Col xs={4}>
                        <Name onSupplier={handleSupplierList} onNom={handleNom} />
                    </Col>
                </Row>
            </Container>
        )
    }
    return (
        <Container fluid >
            <Row>
                <Col xs={4}>
                    <Name onSupplier={handleSupplierList} onNom={handleNom} />
                </Col>
                <Col xs={8}>
                    <Material material={nom} />
                </Col>
            </Row>
        </Container>

    )
}

function Name({ onSupplier, onNom }) {
    const routeParams = useParams()
    const [name, setName] = useState({})

    useEffect(() => {
        getNameById(routeParams.id).then(res => {
            setName(res)
            onSupplier(res.materialOfSuppliersList)
        })
    }, [routeParams, onSupplier])

    if (name === undefined) {

        return (<p className="text-warning">Loading</p>)
    }
    if (Object.keys(name).length !== 0) {

        return (
            <>
                <h3 className="text-light">{name.name}</h3>

                <>
                    {name.materialOfSuppliersList.map((item) => (
                        <SupplierList materialOfSuppliersList={item} key={item.id} onNom={onNom} />
                    ))}
                </>

            </>
        )

    }

}
function SupplierList({ materialOfSuppliersList, onNom }) {
    const [supplier] = useState(materialOfSuppliersList)

    const handleMaterial = (e) => {
        let obj = e.target.value
        onNom(JSON.parse(obj))
    }


    return (
        <ListGroup.Item style={{ backgroundColor: "transparent", borderBottom: "#84BB25 2px solid" }} key={supplier.id}>

            <Row>
                <Col xs={10}>
                    <Button variant="link" className="text-light fs-2 "
                        style={{ textDecoration: "none" }}
                        onClick={handleMaterial}
                        value={JSON.stringify(supplier)}>
                        {supplier.producerName}
                    </Button>
                </Col>
                <Col xs={2} className="d-flex align-items-center justify-content-end p-2">
                    <Button
                        variant="link" className="text-light fs-1"
                        style={{ textDecoration: "none" }}
                        onClick={handleMaterial}
                        value={JSON.stringify(supplier)}>►</Button></Col>

            </Row>
        </ListGroup.Item >
    )
}
export const Material = ({ material }) => {

    const [properties, setProperties] = useState({})
    useEffect(() => {
        setProperties(material.properties)


    }, [material])

    // if (material === null && properties === null) {
    //     return (
    //         <p>Loading</p>
    //     )
    // }


    return (
        <Container>
            <Row>
                <Col xl={4} className="mt-4">
                    <Image src={material.photoUrl} alt="material" fluid />
                    <h3 className="text-green-100">Notes </h3>
                    <hr style={{ borderBottom: "#84BB25  5px solid" }} />

                    <p className="text-light text-start fw-bold fs-5">{material.notes}</p>
                </Col>
                <Col xl={8}>
                    <h3 className="text-light">{material.producerName}  </h3>
                    <PhysicalProp x={properties.physicalProperties} />
                    <br />
                    <ThermalProp x={properties.thermalProperties} />
                    <br />
                    <DescriptiveProperties x={properties.descriptiveProperties} />
                    <br />
                    <MechanicalProperties x={properties.mechanicalProperties} />
                    <br />
                    <OpticalProperties x={properties.opticalProperties} />
                    <br />
                    <ElectricalProperties x={properties.electricalProperties} />
                    <br />
                    <ProcessingProperties x={properties.processingProperties} />

                </Col>


            </Row>

        </Container>

    )

}
function PhysicalProp({ x }) {
    if (!x) {
        return (<></>)
    }

    let keys = Object.entries(x)



    return (
        <>
            <h4 className="text-green-100">Physical Properties</h4>
            <hr style={{ borderBottom: "#84BB25  5px solid" }} />
            <div >
                {keys.map(([key, val]) => (

                    <Container key={key}>
                        <Row>
                            <Col><p className="text-green-100 fw-semibold fs-6">{key.replace(/([A-Z])/g, ' $1')
                                .replace(/^./, function (s) { return s.toUpperCase(); })}</p></Col>
                            <Col><p className="text-light fw-semibold fs-6">{val}</p></Col>
                        </Row>
                    </Container>
                ))}
            </div>
        </>
    )

}
function ThermalProp({ x }) {
    if (!x) {
        return (<></>)
    }

    let keys = Object.entries(x)
    return (
        <>
            <h4 className="text-green-100">Thermal Properties</h4>
            <hr style={{ borderBottom: "#84BB25  5px solid" }} />
            <div >
                {keys.map(([key, val]) => (

                    <Container key={key}>
                        <Row>
                            <Col>
                                <p className="text-green-100 fw-semibold fs-6">
                                    {key.replace(/([A-Z])/g, ' $1')
                                        .replace(/^./, function (s) { return s.toUpperCase(); })}
                                </p>
                            </Col>
                            <Col><p className="text-light fw-semibold fs-6">{val}</p></Col>
                        </Row>
                    </Container>
                ))}
            </div>
        </>
    )

}
function DescriptiveProperties({ x }) {
    if (!x) {
        return (<></>)
    }

    let keys = Object.entries(x)
    return (
        <>
            <h4 className="text-green-100">Descriptive Properties</h4>
            <hr style={{ borderBottom: "#84BB25  5px solid" }} />
            <div >
                {keys.map(([key, val]) => (

                    <Container key={key}>
                        <Row>
                            <Col>
                                <p className="text-green-100 fw-semibold fs-6">
                                    {key.replace(/([A-Z])/g, ' $1')
                                        .replace(/^./, function (s) { return s.toUpperCase(); })}
                                </p>
                            </Col>
                            <Col><p className="text-light fw-semibold fs-6">{val}</p></Col>
                        </Row>
                    </Container>
                ))}
            </div>
        </>
    )

}
function MechanicalProperties({ x }) {
    if (!x) {
        return (<></>)
    }
    let keys = Object.entries(x)
    return (
        <>
            <h4 className="text-green-100">Mechanical Properties</h4>
            <hr style={{ borderBottom: "#84BB25  5px solid" }} />
            <div >
                {keys.map(([key, val]) => (

                    <Container key={key}>
                        <Row>
                            <Col>
                                <p className="text-green-100 fw-semibold fs-6">
                                    {key.replace(/([A-Z])/g, ' $1')
                                        .replace(/^./, function (s) { return s.toUpperCase(); })}
                                </p>
                            </Col>
                            <Col><p className="text-light fw-semibold fs-6">{val}</p></Col>
                        </Row>
                    </Container>
                ))}
            </div>
        </>

    )

}
function OpticalProperties({ x }) {
    if (!x) {
        return (<></>)
    }
    let keys = Object.entries(x)
    return (
        <>
            <h4 className="text-green-100">Optical Properties</h4>
            <hr style={{ borderBottom: "#84BB25  5px solid" }} />
            <div >
                {keys.map(([key, val]) => (

                    <Container key={key}>
                        <Row>
                            <Col>
                                <p className="text-green-100 fw-semibold fs-6">
                                    {key.replace(/([A-Z])/g, ' $1')
                                        .replace(/^./, function (s) { return s.toUpperCase(); })}
                                </p>
                            </Col>
                            <Col><p className="text-light fw-semibold fs-6">{val}</p></Col>
                        </Row>
                    </Container>
                ))}
            </div>
        </>

    )

}
function ProcessingProperties({ x }) {
    if (!x) {
        return (<></>)
    }
    let keys = Object.entries(x)
    return (
        <>
            <h4 className="text-green-100">Processing Properties</h4>
            <hr style={{ borderBottom: "#84BB25  5px solid" }} />
            <div >
                {keys.map(([key, val]) => (

                    <Container key={key}>
                        <Row>
                            <Col>
                                <p className="text-green-100 fw-semibold fs-6">
                                    {key.replace(/([A-Z])/g, ' $1')
                                        .replace(/^./, function (s) { return s.toUpperCase(); })}
                                </p>
                            </Col>
                            <Col><p className="text-light fw-semibold fs-6">{val}</p></Col>
                        </Row>
                    </Container>
                ))}
            </div>
        </>

    )

}
function ElectricalProperties({ x }) {
    if (!x) {
        return (<></>)
    }
    let keys = Object.entries(x)
    return (
        <>
            <h4 className="text-green-100">Electrical Properties</h4>
            <hr style={{ borderBottom: "#84BB25  5px solid" }} />
            <div >
                {keys.map(([key, val]) => (

                    <Container key={key}>
                        <Row>
                            <Col>
                                <p className="text-green-100 fw-semibold fs-6">
                                    {key.replace(/([A-Z])/g, ' $1')
                                        .replace(/^./, function (s) { return s.toUpperCase(); })}
                                </p>
                            </Col>
                            <Col><p className="text-light fw-semibold fs-6">{val}</p></Col>
                        </Row>
                    </Container>
                ))}
            </div>
        </>

    )

}
