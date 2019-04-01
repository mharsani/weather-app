import React, {Fragment} from 'react';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';


const Search = ({handleSubmite}) => (
    <Fragment>
    <Form onSubmit={handleSubmite}>
        <InputGroup className="mb-3">
            <FormControl
            placeholder="Search a city"
            aria-label="Search a city"
            aria-describedby="Search a city"
            name="inputSearchCity"
            />
            <InputGroup.Append>
            <Button variant="outline-secondary" type="submit">Search</Button>
            </InputGroup.Append>
        </InputGroup>
     </Form>
    </Fragment>
);

export default Search;  