import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getById } from "../Services/materialsOfProducerService"
import { Container, Col, Row } from "react-bootstrap"

export const MaterialsOfProducer = () => {
    const routeParams = useParams()

    useEffect(() => {

        getById(routeParams.id).then(res => {
            setMaterial(res)

            setProperties(
                res.properties
            )
        })
    }, [routeParams])
    const [material, setMaterial] = useState([])

    const [properties, setProperties] = useState([])
    if (material === null && properties === null) {
        return (
            <p>Loading</p>
        )
    }
    console.log(material)


    return (
        <Container>
            <Row>
                <Col>
                    <img src={material.photoUrl} alt="material" style={{ minWidth: "600px" }} />
                    <h3 className="text-green-100">Notes </h3>
                    <hr style={{ borderBottom: "#84BB25  5px solid" }} />
                    <p className="text-light text-start fw-bold fs-4">{material.notes}</p>
                </Col>
                <Col>
                    <h3 className="text-green-100">{material.nameOfMaterialName} </h3>
                    <hr style={{ borderBottom: "#84BB25  2px dotted" }} />
                    <h3 className="text-light">{material.producerName}  </h3>

                    <PhysicalProp x={properties.PhysicalProperties} />
                    <br />
                    <ThermalProp x={properties.ThermalProperties} />
                    <br />
                    <DescriptiveProperties x={properties.DescriptiveProperties} />
                    <br />
                    <MechanicalProperties x={properties.MechanicalProperties} />
                    <br />
                    <OpticalProperties x={properties.OpticalProperties} />
                    <br />
                    <ElectricalProperties x={properties.ElectricalProperties} />
                    <br />
                    <ProcessingProperties x={properties.ProcessingProperties} />

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
                            <Col><p className="text-green-100 fw-bold fs-4">{key}</p></Col>
                            <Col><p className="text-light fw-bold fs-4">{val}</p></Col>
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
                            <Col><p className="text-green-100 fw-bold fs-4">{key}</p></Col>
                            <Col><p className="text-light fw-bold fs-4">{val}</p></Col>
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
                            <Col><p className="text-green-100 fw-bold fs-4">{key}</p></Col>
                            <Col><p className="text-light fw-bold fs-4">{val}</p></Col>
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
                            <Col><p className="text-green-100 fw-bold fs-4">{key}</p></Col>
                            <Col><p className="text-light fw-bold fs-4">{val}</p></Col>
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
                            <Col><p className="text-green-100 fw-bold fs-4">{key}</p></Col>
                            <Col><p className="text-light fw-bold fs-4">{val}</p></Col>
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
                            <Col><p className="text-green-100 fw-bold fs-4">{key}</p></Col>
                            <Col><p className="text-light fw-bold fs-4">{val}</p></Col>
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
                            <Col><p className="text-green-100 fw-bold fs-4">{key}</p></Col>
                            <Col><p className="text-light fw-bold fs-4">{val}</p></Col>
                        </Row>
                    </Container>
                ))}
            </div>
        </>

    )

}
