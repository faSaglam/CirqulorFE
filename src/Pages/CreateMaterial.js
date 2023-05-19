import { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { getAllNamesNonQuery } from '../Services/nameOfMaterialService';
import { postMaterial } from '../Services/materialsOfProducerService';

export const CreateMaterial = () => {



    //#region description
    const producer = "e60e044e-b441-48c4-b10a-983a71782dff";
    const [listNameOfMaterial, setListNOM] = useState([])
    const [newPhotoUrl, setNewPhotoUrl] = useState();
    const [newNotes, setNewNotes] = useState();
    //#endregion

    //#region  physical properties
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
    //#endregion

    //#region descriptive properties
    const [newFSR, setNewFSR] = useState();
    const [newRTH, setNewRTH] = useState();
    const [newRTO, setNewRTO] = useState();
    const [newSW, setNewSW] = useState();
    //#endregion

    //#region  thermal prop
    const [CTELinear, setCTELinear] = useState();
    const [ThermalConductivity, setThermalConductivity] = useState();
    const [MeltingPoint, setMeltingPoint] = useState();
    const [MaximumServiceTemperatureAir, setMaximumServiceTemperatureAir] = useState();
    const [DeflectionTemperatureAt66psi, setDeflectionTemperatureAt66psi] = useState();
    const [DeflectionTemperatureAt264psi, setDeflectionTemperatureAt264psi] = useState();
    const [VicatSofteningPoint, setVicatSofteningPoint] = useState();
    const [GlassTransitionTempTg, setGlassTransitionTempTg] = useState();
    const [FlammabilityUL94, setFlammabilityUL94] = useState();
    //#endregion


    //#region Mechanical Properties
    const [HardnessRockwellR, setHardnessRockwellR] = useState();
    const [BallIndentationHardness, setBallIndentationHardness] = useState();
    const [TensileStrengthUltimate, setTensileStrengthUltimate] = useState();
    const [FilmTensileStrengthAtYieldMD, setFilmTensileStrengthAtYieldMD] = useState();
    const [FilmTensileStrengthAtYieldTD, setFilmTensileStrengthAtYieldTD] = useState();
    const [TensileStrengthYield, setTensileStrengthYield] = useState();
    const [FilmElongationAtBreakMD, setFilmElongationAtBreakMD] = useState();
    const [ElongationAtBreak, setElongationAtBreak] = useState();
    const [ElongationAtYield, setElongationAtYield] = useState();
    const [ModulusOfElasticity, setModulusOfElasticity] = useState();
    const [Tenacity, setTenacity] = useState();
    const [FlexuralYieldStrength, setFlexuralYieldStrength] = useState();
    const [FlexuralModulus, setFlexuralModulus] = useState();
    const [FlexuralStrainAtBreak, setFlexuralStrainAtBreak] = useState();
    const [SecantModulus, setSecantModulus] = useState();
    const [SecantModulusMD, setSecantModulusMD] = useState();
    const [SecantModulusTD, setSecantModulusTD] = useState();
    const [IzodImpactNotchedISO, setIzodImpactNotchedISO] = useState();
    const [IzodImpactUnnotchedISO, setIzodImpactUnnotchedISO] = useState();
    const [CharpyImpactUnnotched, setCharpyImpactUnnotched] = useState();
    const [CharpyImpactNotched, setCharpyImpactNotched] = useState();
    const [CoefficientOfFriction, setCoefficientOfFriction] = useState();
    const [CoefficientOfFrictionStatic, setCoefficientOfFrictionStatic] = useState();
    const [TearStrength, setTearStrength] = useState();
    const [ElmendorfTearStrengthMD, setElmendorfTearStrengthMD] = useState();
    const [ElmendorfTearStrengthTD, setElmendorfTearStrengthTD] = useState();
    const [DartDropTotalEnergy, setDartDropTotalEnergy] = useState();
    const [DartDropTest, setDartDropTest] = useState();
    const [FilmTensileStrengthAtBreakMD, setFilmTensileStrengthAtBreakMD] = useState();
    const [FilmTensileStrengthAtBreakTD, setFilmTensileStrengthAtBreakTD] = useState();
    const [HardnessShoreA, setHardnessShoreA] = useState();
    const [HardnessShoreD, setHardnessShoreD] = useState();
    const [FilmElongationAtBreakTD, setFilmElongationAtBreakTD] = useState();
    const [IzodImpactNotched, setIzodImpactNotched] = useState();
    const [IzodImpactUnnotched, setIzodImpactUnnotched] = useState();
    //#endregion


    useEffect(() => {
        getAllNamesNonQuery().then(res => {
            setListNOM(res)

        })


    }, [])
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
                },
                DescriptiveProperties: {
                    FlameSupportResistance: newFSR,
                    ResistanceToHydrocarbons: newRTH,
                    ResistanceToOil: newRTO,
                    StandartWidth: newSW

                },
                ThermalProperties: {
                    CTELinear: CTELinear,
                    ThermalConductivity: ThermalConductivity,
                    MeltingPoint: MeltingPoint,
                    MaximumServiceTemperatureAir: MaximumServiceTemperatureAir,
                    DeflectionTemperatureAt264psi: DeflectionTemperatureAt264psi,
                    DeflectionTemperatureAt66psi: DeflectionTemperatureAt66psi,
                    VicatSofteningPoint: VicatSofteningPoint,
                    GlassTransitionTempTg: GlassTransitionTempTg,
                    FlammabilityUL94: FlammabilityUL94

                },
                MechanicalProperties: {
                    HardnessRockwellR: HardnessRockwellR,
                    BallIndentationHardness: BallIndentationHardness,
                    TensileStrengthUltimate: TensileStrengthUltimate,
                    FilmTensileStrengthAtBreakMD: FilmElongationAtBreakMD,
                    FilmTensileStrengthAtYieldTD: FilmTensileStrengthAtYieldTD,
                    FilmTensileStrengthAtYieldMD: FilmTensileStrengthAtYieldMD,
                    FilmTensileStrengthAtBreakTD: FilmTensileStrengthAtBreakTD,
                    TensileStrengthYield: TensileStrengthYield,
                    FilmElongationAtBreakMD: FilmElongationAtBreakMD,
                    ElongationAtBreak: ElongationAtBreak,
                    ElongationAtYield: ElongationAtYield,
                    ModulusOfElasticity: ModulusOfElasticity,

                    Tenacity: Tenacity,
                    FlexuralYieldStrength: FlexuralYieldStrength,
                    FlexuralModulus: FlexuralModulus,
                    FlexuralStrainAtBreak: FlexuralStrainAtBreak,
                    SecantModulus: SecantModulus,
                    SecantModulusMD: SecantModulusMD,
                    SecantModulusTD: SecantModulusTD,
                    IzodImpactNotchedISO: IzodImpactNotchedISO,
                    IzodImpactUnnotchedISO: IzodImpactUnnotchedISO,
                    CharpyImpactUnnotched: CharpyImpactUnnotched,
                    CharpyImpactNotched: CharpyImpactNotched,
                    CoefficientOfFriction: CoefficientOfFriction,
                    CoefficientOfFrictionStatic: CoefficientOfFrictionStatic,
                    TearStrength: TearStrength,
                    ElmendorfTearStrengthMD: ElmendorfTearStrengthMD,
                    ElmendorfTearStrengthTD: ElmendorfTearStrengthTD,
                    DartDropTotalEnergy: DartDropTotalEnergy,
                    DartDropTest: DartDropTest,

                    HardnessShoreA: HardnessShoreA,
                    HardnessShoreD: HardnessShoreD,
                    FilmElongationAtBreakTD: FilmElongationAtBreakTD,
                    IzodImpactNotched: IzodImpactNotched,
                    IzodImpactUnnotched: IzodImpactUnnotched



                }

            }
        }
        postMaterial(materialObj)

    }

    //#region  description handlers

    const handlePhotoUrl = (e) => {
        setNewPhotoUrl(e.target.value)
    }
    const handleNotes = (e) => {
        setNewNotes(e.target.value)
    }



    const handleNOM = (e) => {
        setNewNameOfMaterial(e.target.value)

    }
    //#endregion

    //#region phys. properties


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
    //#endregion

    //#region  descriptive handlers
    const handleFSR = (e) => {
        setNewFSR(e.targer.value)
    }
    const handleRTH = (e) => {
        setNewRTH(e.target.value)
    }
    const handleRTO = (e) => {
        setNewRTO(e.targer.value)
    }
    const handleSW = (e) => {
        setNewSW(e.target.value)
    }
    //#endregion

    //#region thermal handlers
    const handleCTELinear = (e) => {
        setCTELinear(e.target.value)
    }
    const handleThermalConductivity = (e) => {
        setThermalConductivity(e.target.value)
    }
    const handleMeltingPoint = (e) => {
        setMeltingPoint(e.target.value)
    }
    const handleMaximumServiceTemperatureAir = (e) => {
        setMaximumServiceTemperatureAir(e.target.value)
    }
    const handleDeflectionTemperatureAt264psi = (e) => {
        setDeflectionTemperatureAt264psi(e.target.value)
    }
    const handleDeflectionTemperatureAt66psi = (e) => {
        setDeflectionTemperatureAt66psi(e.target.value)
    }
    const handleVicatSofteningPoint = (e) => {
        setVicatSofteningPoint(e.target.value)
    }

    const handleGlassTransitionTempTg = (e) => {
        setGlassTransitionTempTg(e.target.value)
    }
    const handleFlammabilityUL94 = (e) => {
        setFlammabilityUL94(e.target.value)
    }
    //#endregion

    //#region  mechanical properties
    const handleHardnessRockwellR = (e) => {
        setHardnessRockwellR(e.target.value)
    }
    const handleBallIndentationHardness = (e) => {
        setBallIndentationHardness(e.target.value)
    }
    const handleTensileStrengthUltimate = (e) => {
        setTensileStrengthUltimate(e.target.value)
    }
    const handleFilmTensileStrengthAtYieldMD = (e) => {
        setFilmTensileStrengthAtYieldMD(e.target.value)
    }
    const handleFilmTensileStrengthAtYieldTD = (e) => {
        setFilmTensileStrengthAtYieldTD(e.target.value)
    }
    const handleTensileStrengthYield = (e) => {
        setTensileStrengthYield(e.target.value)
    }
    const handleFilmElongationAtBreakMD = (e) => {
        setFilmElongationAtBreakMD(e.target.value)
    }
    const handleElongationAtBreak = (e) => {
        setElongationAtBreak(e.target.value)
    }
    const handleElongationAtYield = (e) => {
        setElongationAtYield(e.target.value)
    }
    const handleModulusOfElasticity = (e) => {
        setModulusOfElasticity(e.target.value)
    }
    const handleTenacity = (e) => {
        setTenacity(e.target.value)
    }
    const handleFlexuralYieldStrength = (e) => {
        setFlexuralYieldStrength(e.target.value)
    }
    const handleFlexuralModulus = (e) => {
        setFlexuralModulus(e.target.value)
    }
    const handleFlexuralStrainAtBreak = (e) => {
        setFlexuralStrainAtBreak(e.target.value)
    }
    const handleSecantModulus = (e) => {
        setSecantModulus(e.target.value)
    }
    const handleSecantModulusMD = (e) => {
        setSecantModulusMD(e.target.value)
    }
    const handleSecantModulusTD = (e) => {
        setSecantModulusTD(e.target.value)
    }
    const handleIzodImpactNotchedISO = (e) => {
        setIzodImpactNotchedISO(e.target.value)
    }
    const handleIzodImpactUnnotchedISO = (e) => {
        setIzodImpactUnnotchedISO(e.target.value)
    }
    const handleCharpyImpactUnnotched = (e) => {
        setCharpyImpactUnnotched(e.target.value)
    }
    const handleCharpyImpactNotched = (e) => {
        setCharpyImpactNotched(e.target.value)
    }
    const handleCoefficientOfFriction = (e) => {
        setCoefficientOfFriction(e.target.value)
    }
    const handleCoefficientOfFrictionStatic = (e) => {
        setCoefficientOfFrictionStatic(e.target.value)
    }
    const handleTearStrength = (e) => {
        setTearStrength(e.target.value)
    }
    const handleElmendorfTearStrengthMD = (e) => {
        setElmendorfTearStrengthMD(e.target.value)
    }
    const handleElmendorfTearStrengthTD = (e) => {
        setElmendorfTearStrengthTD(e.target.value)
    }
    const handleDartDropTotalEnergy = (e) => {
        setDartDropTotalEnergy(e.target.value)
    }
    const handleDartDropTest = (e) => {
        setDartDropTest(e.target.value)
    }
    const handleFilmTensileStrengthAtBreakMD = (e) => {
        setFilmTensileStrengthAtBreakMD(e.target.value)
    }
    const handleFilmTensileStrengthAtBreakTD = (e) => {
        setFilmTensileStrengthAtBreakTD(e.target.value)
    }
    const handleHardnessShoreA = (e) => {
        setHardnessShoreA(e.target.value)
    }
    const handleHardnessShoreD = (e) => {
        setHardnessShoreD(e.target.value)
    }
    const handleFilmElongationAtBreakTD = (e) => {
        setFilmElongationAtBreakTD(e.target.value)
    }
    const handleIzodImpactNotched = (e) => {
        setIzodImpactNotched(e.target.value)
    }
    const handleIzodImpactUnnotched = (e) => {
        setIzodImpactUnnotched(e.target.value)
    }
    //#endregion


    return (
        <Container>

            <Form onSubmit={addMaterial}>
                <Row>
                    <Col className='border border-success'>
                        <h4 className="text-green-100">Description Properties</h4>
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
                    <Col className='border border-success'>
                        <h4 className="text-green-100">Physical Properties</h4>

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
                <Row>
                    <Col className='border border-success'>
                        <h4 className="text-green-100">Descriptive Properties</h4>
                        <Form.Group className="mb-3" controlId="Flame Support Resistance">
                            <Form.Label className='text-green-100 fs-4'>Flame Support Ressistanve</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Flame Support Resistance" value={newFSR} onChange={handleFSR} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Resistance To Hydrocarbons">
                            <Form.Label className='text-green-100 fs-4'>Resistance To Hydrocarbons</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Resistance To Hydrocarbons" value={newRTH} onChange={handleRTH} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Resistance To Oil">
                            <Form.Label className='text-green-100 fs-4'>Resistance To Oil</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Resistance To Hydrocarbons" value={newRTO} onChange={handleRTO} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Standart Width">
                            <Form.Label className='text-green-100 fs-4'>Standart Width</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Standart Width" value={newSW} onChange={handleSW} />
                        </Form.Group>
                    </Col>

                    <Col className='border border-success'>
                        <h4 className="text-green-100">Thermal Properties</h4>
                        <Form.Group className="mb-3" controlId="CTE Linear">
                            <Form.Label className='text-green-100 fs-4'>CTE Linear</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="CTE Linear" value={CTELinear} onChange={handleCTELinear} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Thermal Conductivity">
                            <Form.Label className='text-green-100 fs-4'>Thermal Conductivity</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Thermal Conductivity" value={ThermalConductivity} onChange={handleThermalConductivity} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Melting Point">
                            <Form.Label className='text-green-100 fs-4'>Melting Point</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Melting Point" value={MeltingPoint} onChange={handleMeltingPoint} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Maximum Service TemperatureAir">
                            <Form.Label className='text-green-100 fs-4'>Maximum Service Temperature Air</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Maximum Service Temperature Air" value={MaximumServiceTemperatureAir} onChange={handleMaximumServiceTemperatureAir} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Deflection Temperature At 264 psi">
                            <Form.Label className='text-green-100 fs-4'> Deflection Temperature At 264 psi</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Deflection Temperature At 264 psi" value={DeflectionTemperatureAt264psi} onChange={handleDeflectionTemperatureAt264psi} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Deflection Temperature At 66 psi">
                            <Form.Label className='text-green-100 fs-4'>Standart Width</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Resistance To Hydrocarbons" value={newRTH} onChange={handleDeflectionTemperatureAt66psi} />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="Vicat Softening Point">
                            <Form.Label className='text-green-100 fs-4'>Vicat Softening Point</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Vicat Softening Point" value={VicatSofteningPoint} onChange={handleVicatSofteningPoint} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Glass Transition Temp Tg">
                            <Form.Label className='text-green-100 fs-4'>Glass Transition Temp Tg</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Glass Transition Temp Tg" value={GlassTransitionTempTg} onChange={handleGlassTransitionTempTg} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Flammability UL 94">
                            <Form.Label className='text-green-100 fs-4'>Flammability UL 94</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Flammability UL 94" value={FlammabilityUL94} onChange={handleFlammabilityUL94} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="HardnessRockwellR">
                            <Form.Label className='text-green-100 fs-4'>Hardness RockwellR</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Hardness RockwellR" value={HardnessRockwellR} onChange={handleHardnessRockwellR} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="BallIndentationHardness">
                            <Form.Label className='text-green-100 fs-4'>Ball Indentation Hardness</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Ball Indentation Hardness" value={BallIndentationHardness} onChange={handleBallIndentationHardness} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="TensileStrengthUltimate">
                            <Form.Label className='text-green-100 fs-4'>Tensile Strength Ultimate</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Tensile Strength Ultimate" value={TensileStrengthUltimate} onChange={handleTensileStrengthUltimate} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="FilmTensileStrengthAtYieldMD">
                            <Form.Label className='text-green-100 fs-4'>Film Tensile Strength At Yield MD</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Film Tensile Strength At Yield MD" value={FilmTensileStrengthAtYieldMD} onChange={handleFilmTensileStrengthAtYieldMD} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="FilmTensileStrengthAtYieldTD">
                            <Form.Label className='text-green-100 fs-4'>Film Tensile Strength At Yield TD</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Film Tensile Strength At Yield TD" value={FilmTensileStrengthAtYieldTD} onChange={handleFilmTensileStrengthAtYieldTD} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="TensileStrengthYield">
                            <Form.Label className='text-green-100 fs-4'>Tensile Strength Yield</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Tensile Strength Yield" value={TensileStrengthYield} onChange={handleTensileStrengthYield} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="FilmElongationAtBreakMD">
                            <Form.Label className='text-green-100 fs-4'>Film Elongation At Break MD</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Film Elongation At Break MD" value={FilmElongationAtBreakMD} onChange={handleFilmElongationAtBreakMD} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="ElongationAtBreak">
                            <Form.Label className='text-green-100 fs-4'>Elongation At Break</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Elongation At Break" value={ElongationAtBreak} onChange={handleElongationAtBreak} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ElongationAtYield">
                            <Form.Label className='text-green-100 fs-4'>Elongation At Yield</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Elongation At Yield" value={ElongationAtYield} onChange={handleElongationAtYield} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ModulusOfElasticity">
                            <Form.Label className='text-green-100 fs-4'>Modulus Of Elasticity</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Modulus Of Elasticity" value={ModulusOfElasticity} onChange={handleModulusOfElasticity} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Tenacity">
                            <Form.Label className='text-green-100 fs-4'>Tenacity</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Tenacity" value={Tenacity} onChange={handleTenacity} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="FlexuralYieldStrength">
                            <Form.Label className='text-green-100 fs-4'>
                                Flexural Yield Strength
                            </Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Flexural Yield Strength" value={FlexuralYieldStrength} onChange={handleFlexuralYieldStrength} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="FlexuralModulus">
                            <Form.Label className='text-green-100 fs-4'>Flexural Modulus</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Flexural Modulus" value={FlexuralModulus} onChange={handleFlexuralModulus} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="FlexuralStrainAtBreak">
                            <Form.Label className='text-green-100 fs-4'>Flexural Strain At Break</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Flexural Strain At Break" value={FlexuralStrainAtBreak} onChange={handleFlexuralStrainAtBreak} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="SecantModulus">
                            <Form.Label className='text-green-100 fs-4'>Secant Modulus</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Secant Modulus" value={SecantModulus} onChange={handleSecantModulus} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="SecantModulusMD">
                            <Form.Label className='text-green-100 fs-4'>Secant Modulus MD</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Secant Modulus MD" value={SecantModulusMD} onChange={handleSecantModulusMD} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="SecantModulusTD">
                            <Form.Label className='text-green-100 fs-4'>Secant Modulus TD</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Secant Modulus TD" value={SecantModulusTD} onChange={handleSecantModulusTD} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="IzodImpactNotchedISO">
                            <Form.Label className='text-green-100 fs-4'>Izod Impact Notched ISO</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Izod Impact Notched ISO" value={IzodImpactNotchedISO} onChange={handleIzodImpactNotchedISO} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="IzodImpactUnnotchedISO">
                            <Form.Label className='text-green-100 fs-4'>Izod Impact Unnotched ISO</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Izod Impact Unnotched ISO" value={IzodImpactUnnotchedISO} onChange={handleIzodImpactUnnotchedISO} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="CharpyImpactNotched ">
                            <Form.Label className='text-green-100 fs-4'>Charpy Impact Notched</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Charpy Impact Notched" value={CharpyImpactNotched} onChange={handleCharpyImpactNotched} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="CharpyImpactUnnotched">
                            <Form.Label className='text-green-100 fs-4'>Charpy Impact Unnotched</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Charpy Impact Unnotched" value={CharpyImpactUnnotched} onChange={handleCharpyImpactUnnotched} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="CoefficientOfFriction">
                            <Form.Label className='text-green-100 fs-4'>Coefficient Of Friction</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Coefficient Of Friction" value={CoefficientOfFriction} onChange={handleCoefficientOfFriction} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="CoefficientOfFrictionStatic">
                            <Form.Label className='text-green-100 fs-4'>Coefficient Of Friction Static</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Coefficient Of Friction Static" value={CoefficientOfFrictionStatic} onChange={handleCoefficientOfFrictionStatic} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="TearStrength">
                            <Form.Label className='text-green-100 fs-4'>Tear Strength</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Tear Strength" value={TearStrength} onChange={handleTearStrength} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ElmendorfTearStrengthMD">
                            <Form.Label className='text-green-100 fs-4'>Elmendorf Tear Strength MD</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Elmendorf Tear Strength MD" value={ElmendorfTearStrengthMD} onChange={handleElmendorfTearStrengthMD} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ElmendorfTearStrengthTD">
                            <Form.Label className='text-green-100 fs-4'>Elmendorf Tear Strength TD</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Elmendorf Tear Strength TD" value={ElmendorfTearStrengthTD} onChange={handleElmendorfTearStrengthTD} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="DartDropTotalEnergy">
                            <Form.Label className='text-green-100 fs-4'>Dart Drop Total Energy</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Dart Drop Total Energy" value={DartDropTotalEnergy} onChange={handleDartDropTotalEnergy} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="DartDropTest">
                            <Form.Label className='text-green-100 fs-4'>Dart Drop Test</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Dart Drop Test" value={DartDropTest} onChange={handleDartDropTest} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="FilmTensileStrengthAtBreakMD">
                            <Form.Label className='text-green-100 fs-4'>FilmTensile Strength At Break MD</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="FilmTensile Strength At Break MD" value={FilmTensileStrengthAtBreakMD} onChange={handleFilmTensileStrengthAtBreakMD} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="FilmTensileStrengthAtBreakTD">
                            <Form.Label className='text-green-100 fs-4'>Film Tensile Strength At Break TD</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Film Tensile Strength At Break TD" value={FilmTensileStrengthAtBreakTD} onChange={handleFilmTensileStrengthAtBreakTD} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="HardnessShoreA">
                            <Form.Label className='text-green-100 fs-4'>Hardness Shore A</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Hardness Shore A" value={HardnessShoreA} onChange={handleHardnessShoreA} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="HardnessShoreD">
                            <Form.Label className='text-green-100 fs-4'>Hardness Shore D</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Hardness Shore D" value={HardnessShoreD} onChange={handleHardnessShoreD} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="FilmElongationAtBreakTD">
                            <Form.Label className='text-green-100 fs-4'>Film Elongation At Break TD</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Film Elongation At Break TD" value={FilmElongationAtBreakTD} onChange={handleFilmElongationAtBreakTD} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="IzodImpactNotched">
                            <Form.Label className='text-green-100 fs-4'>Izod Impact Notched</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Izod Impact Notched" value={IzodImpactNotched} onChange={handleIzodImpactNotched} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="IzodImpactUnnotched">
                            <Form.Label className='text-green-100 fs-4'>Izod Impact Unnotched</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Izod Impact Unnotched" value={IzodImpactUnnotched} onChange={handleIzodImpactUnnotched} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="IzodImpactUnnotched">
                            <Form.Label className='text-green-100 fs-4'>Izod Impact Unnotched</Form.Label>
                            <Form.Control type="text" className='fs-4' placeholder="Izod Impact Unnotched" value={IzodImpactUnnotched} onChange={handleIzodImpactUnnotched} />
                        </Form.Group>


                    </Col>
                </Row>
                <div className="d-grid">
                    <Button variant="primary" type="submit" className='mb-5 mt-3 fs-4'>
                        Submit
                    </Button>
                </div>


            </Form>


        </Container>




    )

}