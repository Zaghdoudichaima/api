
import React from 'react';
import Card from 'react-bootstrap/Card';


function UserCard({user}) {

    
 
return (
    <Card style={{ width: '18rem' ,margin:'30px' ,display: "inline-grid", border:"double"}} >
     <Card.Title style={{color:"Red", fontSize:"30px"}}>{user.name}</Card.Title>
      <Card.Body>
        <Card.Text style={{fontSize:"15px"}}>User Name: {user.username}</Card.Text>
        <Card.Text style={{color:"green", textDecoration:"underline"}}>{user.phone}</Card.Text>
        <Card.Text>Email:{user.email}</Card.Text>
        </Card.Body>
      
    </Card>
    
  );
}

export default UserCard;