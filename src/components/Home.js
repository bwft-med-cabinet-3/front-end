
// import Navigation from './Navigation';
import header_img from './images/header_img.jpg';
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, 
Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';



// const initialItem = {
//     strain: [],
//   }

const Home = (props) => {
    // const [newItems,setNewItems]=useState(initialItem);
    // const [likesToEdit, setLikesaToEdit] = useState(initialItem);
    const [activeTab, setActiveTab] = useState('1');
  
    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }
    
    // const handleChange = e =>{
    //     setNewItems({...newItems,[e.target.name]: e.target.value })
        
    // const handleLikeChange = e =>{
    //     setLikesaToEdit({...likesToEdit,[e.target.name]: e.target.value })
    // }
  
    return (
    <div>
        <img src={header_img} alt="header logo"></img>
   
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              List Dispensaries
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
             Effects and Ailments Treated
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }}
            >
              Favorite Strains
              <h1>Medical Cannibus</h1>
                                
            <form>
                <input
                    placeholder="Favorites"
                    type="text"
                    name="favorites"
                    // onChange={handleChange}
                    // value={data.like}
                    />
                
                <button type="submit">Like Strain</button>
                </form>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <h4>Form Here With Like Button to Persist to State</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="4">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="4">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="4">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        
      </div>
    );
  }


export default Home;

