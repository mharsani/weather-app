
import React, {Fragment} from 'react';
import { Card, Badge } from 'react-bootstrap';


const Cards = ({list}) => (
    <Fragment>
        <h1>
            {list.city_name} <Badge variant="secondary">{list.country_code}</Badge>
        </h1>
            <Card className="text-center">
            <Card.Header>{list.datetime}</Card.Header>
                <Card.Body>
                <Card.Title>Celsius{`${' '}${list.temp}${' '}°C`}</Card.Title>
                <Card.Text>
                Millimeters{`${' '}${list.precip}${' '}mm`}
                </Card.Text>
                </Card.Body>
            </Card>
    </Fragment>
);

export default Cards;  