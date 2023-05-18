import { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { getAllNamesNonQuery } from '../Services/nameOfMaterialService';
import { postMaterial } from '../Services/materialsOfProducerService';

export const CreateMaterial = () => {

    const producer = "e60e044e-b441-48c4-b10a-983a71782dff";
    const [listNameOfMaterial, setListNOM] = useState([])
    const [newNameOfMaterial, setNewNameOfMaterial] = useState()
    const [newDensity, setNewDensity] = useState()
    const [newThickness, setnewThickness] = useState()
    const [newMAE, setNewMAE] = useState()
    const [newAL, setNewAL] = useState()
    const [newMVT, setNewMVT] = useState()
    const [newWVT, setNewWVT] = useState()
    const [newOT, setNewOT] = useState()
    const [newNT, setNewNT] = useState()
    const [newCT, setNewCT] = useState()
    const [newMaxMC, setNewMaxMC] = useState()
    const [newLinearMS, setNewLMS] = useState()
    const [newLinearMST, setNewLinearMST] = useState()
    const [newMeltFlow, setNewMeltFlow] = useState()
    const [newPhotoUrl, setNewPhotoUrl] = useState();
    const [newNotes, setNewNotes] = useState();


    useEffect(() => {
        getAllNamesNonQuery().then(res => {
            setListNOM(res)

        })


    }, [])

    const handlePhotoUrl = (e) => {
        setNewPhotoUrl(e.target.value)
    }
    const handleNotes = (e) => {
        setNewNotes(e.target.value)
    }


    const addMaterial = (event) => {
        event.preventDefault()
        const materialObj = {
            NameOfMaterial: newNameOfMaterial,
            Producer: producer,
            photoUrl: newPhotoUrl,
            Properties: {
                PhysicalProperties: {
                    Density: newDensity,
                    Thickness: newThickness,
                    MoistureAbsorptionatEquilibrium: newMAE,
                    AdditiveLoading: newAL,
                    MoistureVaporTransmission: newMVT,
                    WaterVaporTransmission: newWVT,
                    OxygenTransmission: newOT,
                    NitrogenTransmission: newNT,
                    CarbonDioxideTransmission: newCT,
                    MaximumMoistureContent: newMaxMC,
                    LinearMoldShrinkage: newLinearMS,
                    LinearMoldShrinkageTransverse: newLinearMST,
                    MeltFlow: newMeltFlow
                }

            }
        }
        postMaterial(materialObj)

    }
    const handleNOM = (e) => {
        setNewNameOfMaterial(e.target.value)

    }
    const handleDenstiy = (e) => {
        setNewDensity(e.target.value)


    }

    const handleThickness = (e) => {
        setnewThickness(e.target.value)


    }
    const handleMAE = (e) => {
        setNewMAE(e.target.value)

    }
    const handleAL = (e) => {
        setNewAL(e.target.value)

    }
    const handleMVT = (e) => {
        setNewMVT(e.target.value)

    }
    const handleWVT = (e) => {
        setNewWVT(e.target.value)

    }
    const handleOT = (e) => {
        setNewOT(e.target.value)

    }
    const handleNT = (e) => {
        setNewNT(e.target.value)

    }
    const handleCT = (e) => {
        setNewCT(e.target.value)

    }
    const handleMaxMC = (e) => {
        setNewMaxMC(e.target.value)

    }
    const handleLinearMST = (e) => {
        setNewLinearMST(e.target.value)

    }
    const handleLinearMS = (e) => {
        setNewLMS(e.target.value)

    }
    const handleMeltFlow = (e) => {
        setNewMeltFlow(e.target.value)

    }


    return (
        <Container>

            <Form onSubmit={addMaterial}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3 " controlId="photoUrl">
                            <Form.Label className='text-green-100 fs-4'>Photo Url</Form.Label>
                            <Form.Control type="text" placeholder="Photo Url" className='fs-4' value={newPhotoUrl} onChange={handlePhotoUrl} />
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="notes">
                            <Form.Label className='text-green-100 fs-4'>Notes</Form.Label>
                            <Form.Control type="text" placeholder="Notes" className='fs-4' value={newNotes} onChange={handleNotes} />
                        </Form.Group>
                        <Form.Label className='text-green-100 fs-4'>Name Of Material</Form.Label>
                        <Form.Select aria-label="Name Of Material" className='fs-4' onChange={handleNOM}>
                            <option>Select A Material</option>

                            {listNameOfMaterial.map((item) => {
                                return (
                                    <option value={item.id} >{item.name}</option>
                                )
                            })}
                        </Form.Select>
                    </Col>
                    <Col>

                        <Form.Group className="mb-3 " controlId="density">
                            <Form.Label className='text-green-100 fs-4'>Density</Form.Label>
                            <Form.Control type="text" placeholder="Density" className='fs-4' value={newDensity} onChange={handleDenstiy} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="thickness">
                            <Form.Label className='text-green-100 fs-4'>Thickness</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Thickness" value={newThickness} onChange={handleThickness} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Moisture Absorption at Equilibrium">
                            <Form.Label className='text-green-100 fs-4'>Moisture Absorption at Equilibrium</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Moisture Absorption at Equilibrium" value={newMAE} onChange={handleMAE} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Additive Loading">
                            <Form.Label className='text-green-100 fs-4'>Additive Loading</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Additive Loading" value={newAL} onChange={handleAL} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Moisture Vapor Transmission">
                            <Form.Label className='text-green-100 fs-4'>Moisture Vapor Transmissio</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Moisture Vapor Transmission" value={newMVT} onChange={handleMVT} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Water Vapor Transmission">
                            <Form.Label className='text-green-100 fs-4'>Water Vapor Transmission</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Water Vapor Transmission" value={newWVT} onChange={handleWVT} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Oxygen Transmission">
                            <Form.Label className='text-green-100 fs-4'>Oxygen Transmission</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Oxygen Transmission" value={newOT} onChange={handleOT} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Nitrogen Transmission">
                            <Form.Label className='text-green-100 fs-4'>Nitrogen Transmission</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Nitrogen Transmission" value={newNT} onChange={handleNT} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Carbon Dioxide Transmission">
                            <Form.Label className='text-green-100 fs-4'>Carbon Dioxide Transmission</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Carbon Dioxide Transmission" value={newCT} onChange={handleCT} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Maximum Moisture Content">
                            <Form.Label className='text-green-100 fs-4'>Maximum Moisture Content</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Maximum Moisture Content" value={newMaxMC} onChange={handleMaxMC} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Linear Mold Shrinkage">
                            <Form.Label className='text-green-100 fs-4'>Linear Mold Shrinkage</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Linear Mold Shrinkage" value={newLinearMS} onChange={handleLinearMS} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Linear Mold Shrinkage Transverse">
                            <Form.Label className='text-green-100 fs-4'>Linear Mold Shrinkage Transverse</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Linear Mold Shrinkage Transverse" value={newLinearMST} onChange={handleLinearMST} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Melt Flow">
                            <Form.Label className='text-green-100 fs-4'>Melt Flow</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Melt Flow" value={newMeltFlow} onChange={handleMeltFlow} />
                        </Form.Group>




                    </Col>
                </Row>
                <div className="d-grid"> <Button variant="primary" type="submit" className='mb-5 mt-3 fs-4'>
                    Submit

                </Button>
                </div>


            </Form>


        </Container>




    )

}