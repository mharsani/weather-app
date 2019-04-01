import React, {Fragment} from 'react';
import { Nav } from 'react-bootstrap';


const Navigation = ({selectedKey}) => (
    <Fragment>
        <Nav fill variant="tabs" defaultActiveKey="/home"
            onSelect={selectedKey}>
            <Nav.Item>
            <Nav.Link eventKey="/home">Current</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="History">History</Nav.Link>
            </Nav.Item>
      </Nav>
    </Fragment>
);

export default Navigation;  