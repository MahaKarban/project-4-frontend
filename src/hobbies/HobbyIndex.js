import React, {Component} from 'react';
import {index,destroy} from './api'
import {Link} from 'react-router-dom';
import {Card, CardDeck} from 'react-bootstrap'

class HobbyIndex extends Component{
    state={
        hobbies:[]
    }

    componentDidMount(){
        const user = this.props.user
        index(user)
        .then(response => {
           const allHobbies = response.data.hobbies;
           this.setState({
               hobbies:allHobbies
           })
        })
        .catch((error) => console.log(error))
    }

    destroy = (hobbyId) => {
        const user = this.props.user
        destroy(user,hobbyId)
        .then(() => alert('deleted'))
        .then(() => {
           const newHobbies = this.state.hobbies.filter((hobby) => hobby._id != hobbyId)
            this.setState({
                hobbies:newHobbies
            })
        })
        .catch((error) => console.log(error))
    }
    render(){
        console.log(this.props.user)
        return(
            <div>
                <CardDeck className='CD1'>
                    {this.state.hobbies.map((hobby,index) => (
                    <div key={index}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body className='cb1'>
                                
                                
                                <Card.Text>
                                
                                </Card.Text>
                                <Link to={`/hobbies/${hobby._id}`}><h1>{hobby.hobby}</h1></Link>
                                <button onClick={() => this.destroy(hobby._id)}>Delete</button> 
                                <Link to={`/hobbies/${hobby._id}/edit`}><button>Edit</button></Link>

                            </Card.Body>
                        </Card>
                        <br/>
                        
                        </div>
                    ))}
                </CardDeck>
                {/* {this.state.hobbies.map((hobby,index) => (
                   <div key={index}>
                        <Link to={`/hobbies/${hobby._id}`}><h1>{hobby.hobby}</h1></Link>
                        <button onClick={() => this.destroy(hobby._id)}>Delete</button> <pre></pre>
                        <Link to={`/hobbies/${hobby._id}/edit`}><button>Edit</button></Link>
                    
                    </div>
                ))} */}
            </div>
            
        )
        
    }
}



export default HobbyIndex
