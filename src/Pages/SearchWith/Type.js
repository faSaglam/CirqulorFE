import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { getTypeById } from "../../Services/typeOfMaterialService";
import { Container, ListGroup, Row, Col, Form, Button } from "react-bootstrap";
import { getAllNamesNonQuery } from "../../Services/nameOfMaterialService";
import { BsFillPlayCircleFill, BsSearch } from 'react-icons/bs'


export const SearchWithType = () => {
    const [query2, setQuery2] = useState("")
    function handleQueries(query) {
        setQuery2(query)

    }
    return (
        <Container >
            <Row>
                <Type />
                <Col>
                    <SearchBar onQuery={handleQueries} />
                    <Result onSearch={query2} />
                </Col>
            </Row>
        </Container>

    )
}
export const Type = () => {
    const routeParams = useParams()
    const [type, setType] = useState({})
    useEffect(() => {
        getTypeById(routeParams.id).then(res => {
            setType(res)


        })


    }, [routeParams])
    if (type === undefined) {

        return (<p className="text-warning">Loading</p>)
    }

    if (Object.keys(type).length !== 0) {

        return (
            <>
                <h3 className="text-green-100">{type.name}</h3>
                <hr className="text-green-100"></hr>
                <Col>
                    {type.nameOfMaterialList.map((item) => (
                        <NameList nameOfMaterial={item} key={item.id} />
                    ))}
                </Col >
                <Col>
                </Col>
            </>
        )

    }




}

function NameList({ nameOfMaterial }) {
    const [name] = useState(nameOfMaterial)
    if (name === null) {
        return <p className="fs-4 text-warning">Loading..!</p>
    }
    return (
        <>
            <ListGroup.Item style={{ backgroundColor: "transparent", borderBottom: "#84BB25 4px dotted" }} className=" fw-bold fs-5" key={name.id}>
                <a className="text-light d-flex justify-content-between align-items-center" href={`/SearchWith/Name/${name.id}`} style={{ textDecoration: "none" }}>
                    <span className="mb-2">{name.name}</span>
                    <BsFillPlayCircleFill style={{ color: "#84BB25", fontSize: "32px", minWidth: "32px" }} />
                </a>
            </ListGroup.Item>
        </>
    )

}
function SearchBar({ onQuery }) {
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
function Result({ onSearch }) {
    const [results, setResults] = useState([])

    useEffect(() => {
        if (onSearch.length > 0) {
            getAllNamesNonQuery().then(res => {

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
                <ListGroup.Item style={{ backgroundColor: "transparent", borderBottom: "gray  2px solid" }} className="fw-bold fs-5" key={item.id}>
                    <a className="text-secondary d-flex justify-content-between align-items-center" href={`/SearchWith/Name/${item.id}`} style={{ textDecoration: "none" }}>
                        {item.name}
                        <BsFillPlayCircleFill style={{ color: "gray", fontSize: "32px", minWidth: "32px" }} />
                    </a>
                </ListGroup.Item>
            )

            )}
        </ListGroup>
    )

}