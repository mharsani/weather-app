import React, {Fragment} from 'react';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';

const isDisabled = (a, b, c) => {
    if(c){
        if(a && b ) {
            return false;
        }
        return true;
    }
    return false;
}
const Search = ({handleSubmite, isSearchFrom, isSearchTo, navigation}) => (
    <Fragment>
    <Form onSubmit={handleSubmite}>
        <InputGroup className="mb-3">
            <FormControl
            placeholder="Search a city"
            aria-label="Search a city"
            aria-describedby="Search a city"
            name="inputSearchCity"
            disabled={isDisabled(isSearchFrom ,isSearchTo, navigation)}
            />
            <InputGroup.Append>
            <Button variant="outline-secondary" type="submit" 
             disabled={isDisabled(isSearchFrom ,isSearchTo)}>Search</Button>
            </InputGroup.Append>
        </InputGroup>
     </Form>
    </Fragment>
);

export default Search;  