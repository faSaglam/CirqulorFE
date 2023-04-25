import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Form, Button, Card, Row, Col } from "react-bootstrap"
import { getAllNamesViaTypeName } from "../Services/nameOfMaterialService";


export const TypeSearch = () => {
    const [names, setNames] = useState([])
    const [query, setQuery] = useState("")
    let q1;


    useEffect(() => {

        getAllNamesViaTypeName().then(res => {
            const y = res.filter(item => {
                const asName = item.name.toLowerCase().includes(query.toLowerCase())
                const asType = item.typeOfMaterialsName.toLowerCase().includes(query.toLowerCase())
                if (asName === true) {
                    return asName
                }
                return asType
            })
            setNames(y)
        }

        )

    }, [query])
    function handleSubmit(e) {
        e.preventDefault();
        setQuery(q1)



    }
    function handleSearch(e) {
        e.preventDefault()
        q1 = e.target.value

    }


    return (
        <>
            <Container fluid="sm">
                <Form className="d-flex mt-5" onSubmit={handleSubmit}>
                    <Form.Control
                        type="search"
                        placeholder="Search Materials With Types"
                        className="me-2"
                        aria-label="Search"
                        onChange={handleSearch}
                        value={undefined}
                    />
                    <Button variant="outline-success" type="submit">Search</Button>
                </Form>

            </Container>
            <Container fluid="xl mt-5">
                <Row >
                    {names.map((item) => (
                        <Col sm={4}>
                            <Card className="m-2 bg-green-400" style={{ maxWidth: "18rem", maxHeight: "18rem", minHeight: "10rem" }}>
                                <Card.Header style={{ minHeight: "5rem" }} className="fw-bold fs-5 text-warning">{item.name}</Card.Header>
                                <Card.Body>
                                    <Card.Text className="fw-medium fs-5 text-light">{item.typeOfMaterialsName}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container >
        </>

    )

}