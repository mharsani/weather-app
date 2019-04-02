
import React, {Fragment} from 'react';
import { Card, Badge, Col, Row } from 'react-bootstrap';


const Cards = ({list, navigation}) => (
    
    <Fragment>
        { !navigation &&
      (<Fragment>
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
            </Fragment>)
        }
         { navigation &&
        (<Fragment>
            <h1>
                {list.city_name} <Badge variant="secondary">{list.country_code}</Badge>
            </h1>
            <Row>
                { list.data.map((element, index) => (
                    
                    <Col sm={3} key={index} className="container-card">  
                    <Card className="text-center">
                    <Card.Header>{element.datetime}</Card.Header>
                        <Card.Body>
                        <Card.Title>Celsius{`${' '}${element.temp}${' '}°C`}</Card.Title>
                        <Card.Text>
                        Millimeters{`${' '}${element.precip}${' '}mm`}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                  
                  
                ))
              
                }
                  </Row>
                </Fragment>)
            }
    </Fragment>
);

export default Cards;  