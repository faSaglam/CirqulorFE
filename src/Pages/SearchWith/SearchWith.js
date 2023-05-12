import { useEffect, useState } from "react";
import { getAllBioBased, getBioBasedById } from "../../Services/bioBasedMaterialService";
import { getAllTypes } from "../../Services/typeOfMaterialService";
import { Container, ListGroup, Row, Col, Form, Button } from "react-bootstrap";
import { BsFillPlayCircleFill, BsSearch } from 'react-icons/bs'
import { SpinnerComponent } from "../../Components/Spinner";

export function SearchWith() {
    const [query2, setQuery2] = useState("")

    const [loading, setLoading] = useState(true);
    console.log("1", loading)
    function handleLoading(value) {
        setLoading(value)
    }

    function handleQueries(query) {
        setQuery2(query)

    }
    if (loading === true) {
        return (
            <>
                <SpinnerComponent />
                <BioBaseList onLoading={handleLoading} />
            </>

        )
    }
    else {
        return (
            <Container style={{ minHeight: "100vh" }} >
                <Row>
                    <BioBaseList onLoading={handleLoading} />
                    < Col xs={6}>
                        <SearchBar onQuery={handleQueries} />
                        <Result onSearch={query2} />
                    </Col>
                </Row>
            </Container >

        )

    }
}
const Result = ({ onSearch }) => {
    const [results, setResults] = useState([])

    useEffect(() => {
        if (onSearch.length > 0) {
            getAllTypes().then(res => {

                const x = res.filter(item => {
                    return item.name.toLowerCase().includes(onSearch.toLowerCase())

                })

                setResults(x)

            })

        }
        setResults([])

    }, [onSearch])


    return (
        <ListGroup variant="flush">
            {results.map((item) => (
                <ListGroup.Item key={item.id} style={{ backgroundColor: "transparent", borderBottom: "gray  2px solid" }} className="text-secondary fs-5 ps-0">

                    <a href={`/SearchWith/Type/${item.id}`} style={{ textDecoration: "none" }}>
                        <Row>
                            <Col xs={11}> <span className="text-secondary fs-3  ps-0">{item.name}</span></Col>
                            <Col xs={1} className="d-flex align-items-center justify-content-end p-0"> <BsFillPlayCircleFill className="fs-2" style={{ color: "gray" }} /></Col>
                        </Row>

                    </a>
                </ListGroup.Item>
            )

            )}
        </ListGroup>
    )

}
const SearchBar = ({ onQuery }) => {
    const [query, setQuery] = useState("")
    const handleSearch = (e) => {
        setQuery(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onQuery(query)
    }
    return (

        <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 fs-3"
                aria-label="Search"
                onChange={handleSearch}
            />
            <Button variant="success" type="submit"><BsSearch className="fs-4" /></Button>

        </Form>
    )
}
const BioBaseList = ({ onLoading }) => {
    const [bioBase, setBioBase] = useState([])


    useEffect(() => {
        getAllBioBased().then(res => {
            setBioBase(res)
            onLoading(false)

        })
    }, [onLoading])

    return (
        <>
            {bioBase.map((item) =>

            (<Col key={item.id} className="mb-2">
                <h3 className="text-center" style={{ color: item.name === "Bio Plastics" ? "#84BB25" : "#FC5E05" }}>{item.name}</h3>
                <BioBase id={item.id} />
            </Col>

            )
            )}

        </>
    )
}



const BioBase = ({ id }) => {

    const [types, setTypes] = useState([])
    useEffect(() => {
        getBioBasedById(id).then(res => {

            setTypes(res.typeOfMaterialList)
        })
    }, [id])

    return (
        <div style={{ minHeight: "70vh" }}>
            {types.map((item) => (

                <ListGroup variant="flush" key={item.id}>
                    <ListGroup.Item style={{ backgroundColor: "transparent", borderBottom: "#84BB25 4px dotted" }}>
                        <a className=" " href={`/SearchWith/Type/${item.id}`} style={{ textDecoration: "none" }}>
                            <Row>
                                <Col xs={11}> <span className="text-light fs-3  ps-0">{item.name}</span></Col>
                                <Col className="d-flex align-items-center justify-content-end p-0"><BsFillPlayCircleFill className="text-green-100 fs-1" /></Col>
                            </Row>


                        </a>
                    </ListGroup.Item>
                </ListGroup>
            )


            )}
        </div>
    )

}