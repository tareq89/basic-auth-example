import React, { Component } from 'react';
import Heading from 'grommet/components/Heading';
import { 
    Form, 
    FormField, 
    Footer, 
    Header, 
    Button, 
    CheckBox, 
    TextInput, PasswordInput,
    } from 'grommet-addons/node_modules/grommet/'
// import { CircleLoader } from 'react-spinners';
// import {reactLocalStorage} from 'reactjs-localstorage';

class Signup extends Component {
    constructor() {
        super();
        this.state = { signupRequestSent: false, signupSuccessful: false };
    }

    render() {
        // let spinning = null;        
        const signupForm = (
            <div className='absolute-center'>
                <Form>
                    <Header>
                        <Heading style={{textAlign: 'center'}}>Signup</Heading>
                    </Header>
                    <FormField label='Firstname'>                        
                        <TextInput id='Firstname'
                            name='Firstname-1'
                            type='text'
                            placeholder={'type in your email address ex: abc@xyz.com'}/>
                    </FormField>
                    <FormField label='Lastname'>                        
                        <TextInput id='Lastname'
                            name='Lastname-1'
                            type='text'
                            placeholder={'type in your email address ex: abc@xyz.com'}/>
                    </FormField>
                    <FormField label='Email'>                        
                        <TextInput id='Emailm'
                            name='Email-1'
                            type='email'
                            placeholder={'type in your email address ex: abc@xyz.com'}/>
                    </FormField>
                    <FormField label='Password'>                        
                        <PasswordInput id='Password' name='Password-1'/>
                    </FormField>
                    <FormField>
                        <CheckBox id='agree' name='agree' label='I acknowledge that I may lose data.' />
                    </FormField>
                    <Footer>                        
                        <Button label='submit' type='submit' primary={true} onClick={()=>{this.setState({ signupRequestSent: true, signupSuccessful: false })}}/>
                    </Footer>
                </Form>

            </div>
        );

        return signupForm;
    }
}

export default Signup;