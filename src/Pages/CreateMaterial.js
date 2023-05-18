import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
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

    useEffect(() => {
        getAllNamesNonQuery().then(res => {
            setListNOM(res)
            console.log(res)
        })


    }, [])


    const addMaterial = (event) => {
        event.preventDefault()
        const materialObj = {
            NameOfMaterial: newNameOfMaterial,
            Producer: producer,
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
        console.log(e.target.value)
    }
    const handleDenstiy = (e) => {
        setNewDensity(e.target.value)
        console.log(e.target.value)

    }

    const handleThickness = (e) => {
        setnewThickness(e.target.value)
        console.log(e.target.value)

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


        <Form onSubmit={addMaterial}>
            <Form.Select aria-label="Name Of Material" onChange={handleNOM}>

                {listNameOfMaterial.map((item) => {
                    return (
                        <option value={item.id} >{item.name}</option>
                    )
                })}
            </Form.Select>
            <Form.Group className="mb-3" controlId="density">
                <Form.Label>Density</Form.Label>
                <Form.Control type="text" placeholder="Density" value={newDensity} onChange={handleDenstiy} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="thickness">
                <Form.Label>Density</Form.Label>
                <Form.Control type="text" placeholder="Thickness" value={newThickness} onChange={handleThickness} />
            </Form.Group>



            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>


    )

}