import React from 'react';
import {Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input} from 'reactstrap';
import {Control, LocalForm, Errors, Row, Col, Field} from 'react-redux-form';


const required = (val)=> val && val.length;
const minLength = (len) => (val) => (val) && (val.length > len);
const maxLength = (len) => (val) => !(val) || (val.length < len);


class CommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen:false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.submitComment = this.submitComment.bind(this);
    }
    submitComment(values){
       alert(JSON.stringify(values))

    }
    toggleModal(event){
       
        console.log("Toggling");
        this.setState({
            isModalOpen:!this.state.isModalOpen
        })
        event.preventDefault();
    }
    
    
    render(){
        return(
                <div>
                    <button 
                        type= 'submit' 
                        value='submit'
                        className='float-left'
                        onClick ={this.toggleModal}>
                        Submit Comment
                    </button>
                <Modal isOpen = {this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>Submit Comment</ModalHeader>
                    <ModalBody>
                    
                        <LocalForm onSubmit={(values) => this.submitComment(values)}>

                            <Label htmlFor="Rating" md={2}> SelectRating </Label>
                                <Control.select model=".rating" id="firstName" name="firstName"
                                        placeholder="Enter name"
                                        className="form-control">
                                             
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option selected value="5">5</option>

                                        
                                </Control.select>
                    
                            <Label htmlFor="username" md={2}>Name</Label>
                                <Control.text model=".username" id="firstName" name="firstName"
                                        placeholder="Enter name"
                                        className="form-control"
                                        validators = {{
                                            required,
                                            minLength: minLength(3),
                                            maxLength:maxLength(15)

                                        }}>

                                </Control.text>
                                <Errors className='text-danger' 
                                        model='.username' show = 'touched'
                                        messages={{
                                            required:'Required field: ',
                                            minLength:"Must be greater than 2 characters",
                                            maxLength:"Must be less than 15 characters"
                                        }}/>

                            <Label htmlFor="commentData" md={2}>Comment</Label>
                                <Control.textarea model=".commentData" id="firstName" name="firstName"
                                        placeholder="Enter comment"
                                        className="form-control " style={{height:'200px'}}>
                                            

                                </Control.textarea>
                        
                            <Label htmlFor="submit" md={2}></Label>
                            <button style={{
                                float:'left',
                                marginTop:"10px",
                                backgroundColor:'rgb(52, 137, 235)',
                                color:'white'
                            }}>Submit</button>
                     
                        </LocalForm>
                    </ModalBody>
                </Modal>



                </div>
            )
    }
}

export default CommentForm;