import { useState } from "react"
import { Form, Button } from "react-bootstrap"
export const Search = () => {
    const [query, setQuery] = useState("")


    return (
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>
    )

}