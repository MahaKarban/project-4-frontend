import React, {Component} from 'react';
import {home} from './api'
import {Link} from 'react-router-dom';
import {Card, CardDeck} from 'react-bootstrap'

class HobbyHome extends Component{
    state={
        hobbies:[],
        dataForm: {
            type: '',
            city: ''
        }
    }

    componentDidMount(){
        
        home()
        .then(response => {
           const allHobbies = response.data.hobbies;
           this.setState({
               hobbies:allHobbies
           })
        })
        .catch((error) => console.log(error))
    }
      handleChange = (event) => {
        //get the name of input
        const name = event.target.name;
        // get the value of input
        const value = event.target.value;
        const newForm = Object.assign(this.state.dataForm)
        newForm[name] = value;
        this.setState({
            dataForm:newForm
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const searchData = this.state.dataForm
        // console.log(searchData)
        home(searchData)
        .then( (response) => {
            console.log(response)
            const allHobbies = response.data.hobbies;
            this.setState({
                hobbies:allHobbies
            })
        })
        .catch((error) => console.log(error))
    }

    
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
        
                <Card className='add'>
                   
                    <Card.Body>
                        <Card.Title> Pick up your hobby </Card.Title>
                        <Card.Text>
                        <label>Type &nbsp;</label>
                        <select onChange={this.handleChange} type="list" name="type" value={this.state.dataForm.type}>
                        <option>Choose</option>
                        <option>mental</option>
                        <option>physical</option>
                        <option>cultural</option>
                        <option>literary</option>
                        <option>artistic</option>
                        <option>technical</option>
                        </select><br/>

                        <label>City &nbsp;</label>
                        <select onChange={this.handleChange} type="list" name="city" value={this.state.dataForm.city}> 
                        <option>Choose</option>
                        <option>Riyadh</option>
                        <option>Jeddah</option>
                        <option>Alkhobar</option>
                        </select><br/>
                        <button type="submit">Look </button><br/>
                        </Card.Text>
                    </Card.Body>
                </Card>

            </form>
           
                <CardDeck className='CD1'>
                    {this.state.hobbies.map((hobby,index) => (
                    <div key={index}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body className='cb1'>
                                <Card.Title>{hobby.hobby}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{hobby.email}</Card.Subtitle>
                                <Card.Text>
                                
                                </Card.Text>
                                <Link to={`/hobbies/${hobby._id}`}>Go to </Link> 
                            </Card.Body>
                        </Card>
                        <br/>
                        
                        </div>
                    ))}
                </CardDeck>
                 </div>
                
              
        )
    }
}



export default HobbyHome
