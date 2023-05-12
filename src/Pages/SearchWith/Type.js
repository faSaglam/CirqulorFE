import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { getTypeById } from "../../Services/typeOfMaterialService";
import { Container, ListGroup, Row, Col, Form, Button } from "react-bootstrap";
import { getAllNamesNonQuery } from "../../Services/nameOfMaterialService";
import { BsFillPlayCircleFill, BsSearch } from 'react-icons/bs'
import { SpinnerComponent } from "../../Components/Spinner";

export const SearchWithType = () => {
    const [query2, setQuery2] = useState("")
    const [loading, setLoading] = useState(true);
    function handleLoading(value) {
        setLoading(value)
    }

    function handleQueries(query) {
        setQuery2(query)

    }
    if (loading === true) {
        return (
            <Container className="d-flext justify-content-center" >
                <Row>
                    <Col xs={12}>  <SpinnerComponent /></Col>
                </Row>

                <Type onLoading={handleLoading} />
            </Container>

        )
    }
    else {
        return (
            <Container >
                <Row>
                    <Type onLoading={handleLoading} />
                    <Col className="ms-5">
                        <SearchBar onQuery={handleQueries} />
                        <Result onSearch={query2} />
                    </Col>
                </Row>
            </Container>

        )
    }

}
export const Type = ({ onLoading }) => {
    const routeParams = useParams()
    const [type, setType] = useState({})
    useEffect(() => {
        getTypeById(routeParams.id).then(res => {
            setType(res)
            onLoading(false)


        })


    }, [routeParams, onLoading])
    if (type === undefined) {

        return (<p className="text-warning">Loading</p>)
    }

    if (Object.keys(type).length !== 0) {

        return (
            <>
                <h3 className="text-green-100">{type.name}</h3>
                <hr className="text-green-100"></hr>
                <Col className="me-5">
                    {type.nameOfMaterialList.map((item) => (
                        <NameList nameOfMaterial={item} key={item.id} />
                    ))}
                </Col >

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
            <ListGroup.Item style={{ backgroundColor: "transparent", borderBottom: "#84BB25 4px dotted" }} key={name.id}>
                <a href={`/SearchWith/Name/${name.id}`} style={{ textDecoration: "none" }}>
                    <Row>
                        <Col className="mt-2 mb-2"><span className="text-light fs-2">{name.name}</span></Col>
                        <Col className="d-flex align-items-center justify-content-end "> <BsFillPlayCircleFill className="fs-1 text-green-100" /></Col>
                    </Row>


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
                className="me-2 fs-3"
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
                    <a href={`/SearchWith/Name/${item.id}`} style={{ textDecoration: "none" }}>
                        <Row>
                            <Col><span className="text-secondary fs-2  ps-0">{item.name}</span></Col>
                            <Col className="d-flex align-items-center justify-content-end p-0"> <BsFillPlayCircleFill className="fs-1" style={{ color: "gray" }} /></Col>
                        </Row>


                    </a>
                </ListGroup.Item>
            )

            )}
        </ListGroup>
    )

}