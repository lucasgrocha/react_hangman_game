import React from 'react'
import { Row, Col } from 'react-bootstrap'

const RowCol = props => (
  <Row>
    <Col sm={props.colSize}>
      {props.children}
    </Col>
  </Row>
)

export default RowCol