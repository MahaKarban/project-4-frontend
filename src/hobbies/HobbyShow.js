import React, {Component} from 'react';
import {show,showNoUser} from './api'
import {Card,Button} from 'react-bootstrap'

class HobbyShow extends Component{
    state = {
        hobby:{}
    }

    componentDidMount(){

        if(this.props.user){
            const user = this.props.user;
            const hobbyId = this.props.hobbyId;
            show(user,hobbyId)
            .then((response) => {
                const showHobby = response.data.hobby;
                this.setState({
                    hobby:showHobby
                })
            })
            .catch((error) => console.log(error))
        }else{
            console.log('The user not log-in')
            const hobbyId = this.props.hobbyId;
            showNoUser(hobbyId)
            .then((response) => {
                console.log(response)
                const showHobby = response.data.hobby;
                this.setState({
                    hobby:showHobby
                })
            })
            .catch((error) => console.log(error))
        }
       
    }



    render(){
        // console.log(this.props.hobbyId)
        return(
            <div>
                <Card className='c1'>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        <label>Type :</label> {this.state.hobby.type}<br/>
                        <label>City :</label> {this.state.hobby.city}<br/>
                        <label>Hobby :</label> {this.state.hobby.hobby}<br/>
                        <label>Location :</label> <a href={this.state.hobby.location} >{this.state.hobby.place}</a><br/>
                        <label>Describe :</label> {this.state.hobby.describe}<br/>
                        </Card.Text>
                        <Button variant="primary" className='b1'>Go</Button>
                    </Card.Body>
                </Card>
  
            </div>
        )
    }
}



export default HobbyShow