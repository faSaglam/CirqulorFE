import React from "react";
import { useEffect, useState } from "react"
import { getAllBioBased } from "../Services/bioBasedMaterialService"
import { getAllTypes } from "../Services/typeOfMaterialService";
// import { getAllBases } from "../Services/baseOfMaterialService"
import { getAllNamesNonQuery } from "../Services/nameOfMaterialService";
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";




export const SearchAndFilterPage = () => {
    const [bioBaseId, setBioBaseId] = useState("all")
    const [typeId, setTypeId] = useState("all")
    const [baseId, setBaseId] = useState("all")
    const [query2, setQuery] = useState("")
    useEffect(() => {
        sessionStorage.setItem("bioBaseId", "all")
        sessionStorage.setItem("typeId", "all")

    }, [])

    function handleData(data) {
        setBioBaseId(data)
    }
    function handleTypes(data) {
        setTypeId(data)

    }
    function handleBases(data) {
        setBaseId(data)


    }
    function handleQueries(query) {
        setQuery(query)
    }

    return (<>

        <Container className="mt-5">
            <Row>
                <div className="text-center m-auto">
                    <Search onQuery={handleQueries} />
                </div>

                <Col lg={3}>

                    <Filter onData={handleData} onType={handleTypes} bioBaseId={bioBaseId} typeId={typeId} onBase={handleBases} />

                </Col>
                <Col lg={9}>
                    <NameOfMaterialList onSearch={query2} bioBaseId={bioBaseId} typeId={typeId} baseId={baseId} />
                </Col>
            </Row>

        </Container></>
    )

}
function Search({ onQuery }) {
    const [query, setQuery] = useState("")
    const handleSearch = (e) => {
        setQuery(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onQuery(query)
    }


    return (
        <form onSubmit={handleSubmit} className="row g-0 justify-content-center">
            <div className="col-11 ">
                <input className="form-control form-control-lg  " type="search" placeholder="Search" aria-label="Search"
                    name="search-form" id='search-form' value={undefined} onChange={handleSearch} />
            </div>
            <div className="col-1">

                <button type="submit" style={{ backgroundColor: "transparent", border: "none" }} className="m-0 ps-0 pe-5">
                    <BsFillPlayCircleFill style={{ color: "#84BB25", fontSize: "48px" }} />
                </button>

            </div>
        </form>

    )


}

function Filter({ onData, bioBaseId, onType, typeId, onBase }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        let valueOfBioBaseId = sessionStorage.getItem("bioBaseId")
        let valueOfTypeId = sessionStorage.getItem("typeId")

        onData(valueOfBioBaseId)
        onType(valueOfTypeId)

    }
    const handleClick = () => {
        window.location.reload()
    }
    return (

        <Form onSubmit={handleSubmit}>

            <Form defaultValue={"all"}>
                <BioBaseList onData={onData} />
            </Form>

            <Form defaultValue={"all"}>
                <TypeList bioBaseId={bioBaseId} onType={onType} />
            </Form>


            {/* <div className="card-body">
                    <BaseList typeId={typeId} onBase={onBase} />
                </div> */}

            <div className="d-grid m-2">
                <Button type="submit" variant="secondary">Submit</Button>
            </div>
            <div className="d-grid m-2">
                <Button type="click" variant="outline-secondary" onClick={handleClick}>Refresh</Button>
            </div>

        </Form >

    )

}
function BioBaseList() {
    const [bioBase, setBioBase] = useState([])
    useEffect(() => {
        getAllBioBased().then(res => setBioBase(res))
    }, [])
    function handleClick(e) {
        sessionStorage.setItem('bioBaseId', e.target.id)
    }

    return (

        <Card className="bg-success mt-3">
            <Card.Header className="text-center fw-bold fs-4 text-warning">Bio Base </Card.Header>
            <Card.Body>
                {bioBase.map(item => (
                    <div onClick={handleClick} key={item.id} type="radio" id={item.id} value={item.name} name={item.name} label={item.name}
                        className="fw-semibold fs-5">
                        <input className="form-check-input me-2" type="radio" name="exampleRadios" id={item.id} value={item.name} />
                        <label className="form-check-label text-light " htmlFor={item.id}>
                            {item.name}
                        </label>
                    </div>
                ))}
                <div onClick={handleClick} className="fw-semibold fs-5">
                    <input className="form-check-input me-2" type="radio" name="exampleRadios" id="all" value="all" defaultChecked />
                    <label className="form-check-label  text-light" htmlFor="all" >
                        All
                    </label>
                </div>

            </Card.Body>


        </Card>
    )

}
function TypeList({ bioBaseId }) {
    const [typeList, setTypeList] = useState([])
    useEffect(() => {
        if (bioBaseId !== "") {

            getAllTypes().then(res => {
                const y = res.filter(item => {
                    return item.bioBasedMaterials.includes(bioBaseId)
                })

                setTypeList(y)
            })
        }
        else (setTypeList([]))

    }, [bioBaseId])
    function handleClick(e) {

        sessionStorage.setItem("typeId", e.target.id)

    }

    if (bioBaseId !== "all") {

        return (
            <Card className="mt-3 bg-success">
                <Card.Header className="text-center fw-bold fs-4 text-warning">Types</Card.Header>
                <Card.Body>
                    {typeList.map(item => (
                        <div className="form-check fw-semibold fs-5" onClick={handleClick} key={item.id} >
                            <input className="form-check-input" type="radio" name="exampleRadios" id={item.id} value={item.name} />
                            <label className="form-check-label text-light" htmlFor={item.id}>
                                {item.name}
                            </label>
                        </div>
                    ))}
                    <div className="form-check fw-semibold fs-5" onClick={handleClick} >
                        <input className="form-check-input" type="radio" name="exampleRadios" id="all" value="all" defaultChecked />
                        <label className="form-check-label text-light" htmlFor="all" >
                            All
                        </label>
                    </div>

                </Card.Body>


            </Card>

        )

    }


}

// function BaseList({ typeId }) {

//     const [baseList, setBaseList] = useState([])
//     useEffect(() => {

//         if (typeId !== "all") {
//             getAllBases().then(res => {
//                 const x = res.filter(item => (
//                     item.typeOfMaterials.toLowerCase().includes(typeId)

//                 )
//                 )
//                 setBaseList(x)
//             })
//         }
//     }, [typeId])
//     function handleClick(e) {

//         sessionStorage.setItem("baseId", e.target.id)

//     }
//     if (typeId !== "all") {
//         return (
//             <>
//                 <h5>Bases</h5>
//                 {baseList.map(item => (
//                     <div className="form-check" key={item.id} onClick={handleClick}>
//                         <input className="form-check-input" type="radio" name="exampleRadios" id={item.id} value={item.name} />
//                         <label className="form-check-label" htmlFor={item.id}>
//                             {item.name}
//                         </label>
//                     </div >
//                 ))
//                 }
//                 <div className="form-check" onClick={handleClick}>
//                     <input className="form-check-input" type="radio" name="exampleRadios" id="all" value="all" />
//                     <label className="form-check-label" htmlFor="all" >
//                         All
//                     </label>
//                 </div>

//             </>
//         )

//     }



// }


function NameOfMaterialList({ onSearch, bioBaseId, typeId, baseId }) {
    const [names, setNames] = useState([])
    useEffect(() => {
        getAllNamesNonQuery().then(
            res => {
                if (bioBaseId === "all") {

                    const x = res.filter(item => {
                        return item.name.toLowerCase().includes(onSearch.toLowerCase())
                    })
                    setNames(x)
                }
                if (bioBaseId !== "all" && typeId === "all") {

                    const y = res.filter(item => {


                        return item.bioBasedMaterials.toLowerCase().includes(bioBaseId.toLowerCase())
                    })
                    const x = y.filter(item => {
                        return item.name.toLowerCase().includes(onSearch.toLowerCase())
                    })
                    setNames(x)

                }
                if (bioBaseId !== "all" && typeId !== "all") {


                    const y = res.filter(item => {
                        return item.typeOfMaterials.includes(typeId)
                    })
                    const x = y.filter(item => {
                        return item.name.toLowerCase().includes(onSearch.toLowerCase())
                    })
                    setNames(x)
                }

                // if (baseId !== "all" && bioBaseId !== "all" && typeId !== "all") {
                //     const y = res.filter(item => {
                //         return item.baseOfMaterials.includes(baseId)
                //     })
                //     const x = y.filter(item => {
                //         return item.name.toLowerCase().includes(onSearch.toLowerCase())
                //     })
                //     setNames(x)
                // }
            }
        )
    }, [onSearch, bioBaseId, typeId, baseId])



    return (
        <Row className="mt-3">
            {
                names.map((item) => (
                    <Card key={item.id} style={{ maxWidth: "18rem" }} className="p-0 me-2 mb-2 bg-green-400">

                        <Card.Body>
                            <Card.Title >
                                <a className="text-warning" href={`/SearchWith/Name/${item.id}`}>
                                    {item.name}

                                </a>
                            </Card.Title>
                        </Card.Body>

                    </Card>

                ))
            }
        </Row>

    )
}
