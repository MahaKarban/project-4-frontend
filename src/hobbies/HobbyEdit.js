import React, {Component} from 'react';
import {show,update} from './api';
import {withRouter} from 'react-router-dom';
import {Card} from 'react-bootstrap';

class HobbyEdit extends Component{
    state={
        dataForm:{
            type:"",
            city:"",
            hobby:""
        }
    }
    

    componentDidMount(){
        const user = this.props.user;
        const hobbyId = this.props.match.params.id;
        show(user,hobbyId)
        .then((response) => {
            const hobby = response.data.hobby
            this.setState({
                dataForm:hobby
            })
        })
        .catch(error => console.log(error))
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


    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.props)
        const user = this.props.user;
        const hobbyId = this.props.match.params.id;
        const updateHobby = this.state.dataForm;
        update(user,updateHobby,hobbyId)
        .then(() => this.props.history.push(`/hobbies/${hobbyId}`))
        .catch((error) => console.log(error))
    }


    render(){
        // console.log(this.props)
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
        
                <Card className='add'>
                   
                    <Card.Body>
                        <Card.Title>Edit Hobby</Card.Title>
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

                        <label>Hobby &nbsp;</label>
                        <input  onChange={this.handleChange} type="text" name="hobby" value={this.state.dataForm.hobby}/><br/>

                        <label>Place &nbsp;</label>
                        <input  onChange={this.handleChange} type="text" name="place" value={this.state.dataForm.place}/><br/>

                        <label>Location &nbsp;</label> 
                        <input  onChange={this.handleChange} type="text" name="location" value={this.state.dataForm.location}/><br/>

                        <label>Describe &nbsp;</label> 
                        <input  onChange={this.handleChange} type="text" name="describe" value={this.state.dataForm.describe}/><br/>

                        

                        <button className='butadd' type="submit">Edit</button><br/>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
           
            </form>
            </div>
        )
    }
}



export default withRouter(HobbyEdit)