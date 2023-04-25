import { useEffect, useState } from "react";
import { getAllBioBased, getBioBasedById } from "../../Services/bioBasedMaterialService";
import { getAllTypes } from "../../Services/typeOfMaterialService";
import { Container, ListGroup, Row, Col, Form, Button } from "react-bootstrap";
import { BsFillPlayCircleFill, BsSearch } from 'react-icons/bs'

export function SearchWith() {
    const [query2, setQuery2] = useState("")
    function handleQueries(query) {
        setQuery2(query)

    }
    return (
        <Container >
            <Row>
                <BioBaseList />
                < Col >
                    <SearchBar onQuery={handleQueries} />
                    <Result onSearch={query2} />
                </Col>
            </Row>
        </Container >

    )
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
                    <a className="text-secondary d-flex justify-content-between" href={`/SearchWith/Type/${item.id}`} style={{ textDecoration: "none" }}>
                        <span>{item.name}</span>
                        <BsFillPlayCircleFill style={{ color: "gray", fontSize: "32px" }} />
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
                className="me-2"
                aria-label="Search"
                onChange={handleSearch}
            />
            <Button variant="success" type="submit"><BsSearch className="fs-4" /></Button>

        </Form>
    )
}
const BioBaseList = () => {
    const [bioBase, setBioBase] = useState([])

    useEffect(() => {
        getAllBioBased().then(res => setBioBase(res))
    }, [])
    return (
        <>
            {bioBase.map((item) =>

            (<Col key={item.id}>
                <h3 style={{ color: item.name === "Bio Plastics" ? "#84BB25" : "#FC5E05" }}>{item.name}</h3>
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
                    <ListGroup.Item style={{ backgroundColor: "transparent", borderBottom: "#84BB25 4px dotted" }} className="text-green-100 fs-5 ps-0">
                        <a className="text-light d-flex justify-content-between" href={`/SearchWith/Type/${item.id}`} style={{ textDecoration: "none" }}>
                            <span>{item.name}</span>
                            <BsFillPlayCircleFill style={{ color: "#84BB25", fontSize: "32px" }} /></a>
                    </ListGroup.Item>
                </ListGroup>
            )


            )}
        </div>
    )

}