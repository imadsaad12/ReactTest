import React, { useState } from 'react';
import { Button, Checkbox, Icon, Table ,Form, Container} from 'semantic-ui-react'


//initial value of the input in the form
const INITIAL={
    fname:"",
    lname:"",
    age:""
}
const Home = () => {
  // useState is used to save some data to use them later in this
  //app we use them to save each user data and to save the array of users

    const [input, setinput] = useState(INITIAL);
    const [users, setusers] = useState([]);
    


    const handleInput=(e)=>{
      //getting the value of the form and save them in input(samynha input fo2 bel sater 15)
        const {name,value}=e.target;
        setinput(prev=>({...prev,[name]:value}))
    }
    // executed when i click on submit button
    const onSubmit=()=>{
      //adding the user to the aarray of users 
      // (...prev) means copy the prev array of users then ,input means add this user to the array
       setusers(prev=>([...prev,input]))
       
       
    }

    const onDelete=(id)=>{
      // filter used to filter the array according to the condition given
      // so it will return all elements except the one we want to delete so it will not be considered
      
        const newUsers=users.filter((i,index)=>index!==id);
        setusers(newUsers)
    }
    return (
        <div>
             <Table compact celled >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>First name</Table.HeaderCell>
        <Table.HeaderCell>Last name</Table.HeaderCell>
        <Table.HeaderCell>Age</Table.HeaderCell>
        <Table.HeaderCell />
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {users.map((i,index)=>{
            return(

      <Table.Row>
        <Table.Cell>{index}</Table.Cell>
        <Table.Cell>{i.fname}</Table.Cell>
        <Table.Cell>{i.lname}</Table.Cell>
        <Table.Cell>{i.age}</Table.Cell>
        <Table.Cell>
            <Button content="delete" color="red" onClick={()=>{onDelete(index)}}/>
        </Table.Cell>
      </Table.Row>
            )
        })}
     
    </Table.Body>
    
  </Table>
  <Container style={{ marginTop: "5%", width: "50%" }}>
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input name="fname" placeholder='First Name' onChange={handleInput} />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input name="lname" placeholder='Last Name' onChange={handleInput}  />
    </Form.Field>
    <Form.Field>
      <label>Age</label>
      <input name="age" placeholder='Last Name' onChange={handleInput}  />
    </Form.Field>
   
    <Button type='submit' onClick={onSubmit}>Submit</Button>
  </Form>
  </Container>
        </div>
    );
}

export default Home;
