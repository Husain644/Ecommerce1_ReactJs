import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './admin.css'
import Button from 'react-bootstrap/Button';
function Adimn() {
  return (
    <Container>
        <h>UpLoad Product</h>
      <Form.Control size="sm" type="text" placeholder="Product Name" className='Form'/>
      <Form.Control size="sm" type="text" placeholder="Product-detail" className='Form'/>
      <Form.Control size="sm" type="text" placeholder="price" className='Form'/>
      <Form.Control size="sm" type="text" placeholder="Category" className='Form'/>
      <Form.Control size="sm" type="text" placeholder="Brand" className='Form'/>
      <Form.Control size="sm" type="text" placeholder="Stock-Quantity" className='Form'/>
      <Form.Label>Product Images</Form.Label>
        <Form.Control type="file" multiple />
      <Button variant="success" className='Form' size="sm">UpLoad</Button>
    </Container>
  )
}

export default Adimn