import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


class PersonRegistration extends React.Component {

    constructor(props){
        super(props)
        this.personType = this.props.type
    }
    render() {
        return (
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                        .required('First Name is required'),
                    lastName: Yup.string()
                        .required('Last Name is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Confirm Password is required')
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
                render={({ getFieldProps, errors, status, touched }) => (
                    <Form>
                <Box sx={{display:'flex', mt:'2%', ml:'5%', flexDirection: 'column'}}>

           {this.personType} Registration Form
            {/*  <Box sx={{display:'flex', flexDirection: 'row' }}
                component="h4">
                    {this.personType} Registration Form
            </Box> */}

            <Box sx={{display:'flex', flexDirection: 'column',  alignItems: 'flex-start',}}>
                <Box sx={{display:'flex',  justifyContent: 'flex-start'}}> 
                    <Box>
                        <TextField id="standard-basic" variant="standard" name="firstName" id="firstName" 
                         label="First Name" required
                        
                        {...getFieldProps("firstName")}/>
                    </Box>
                    <Box  sx={{color:'error.main',pt:'8%'}} component="div">
                        <ErrorMessage name="firstName" component="span"  />
                    </Box>
                </Box>

                <Box sx={{display:'flex',  justifyContent: 'flex-start'}}> 
                    <Box>
                        <TextField id="standard-basic" variant="standard" name="lastName" id="lastName" 
                         label="Last Name"
                        
                        {...getFieldProps("lastName")}/>
                    </Box>
                    <Box  sx={{color:'error.main',pt:'8%'}} component="span">
                        <ErrorMessage name="lastName" component="span"  />
                    </Box>
                </Box>

                <Box sx={{display:'flex',  justifyContent: 'flex-start'}}> 
                    <Box>
                        <TextField id="standard-basic" variant="standard" name="email" id="email" 
                         label="Email"
                        
                        {...getFieldProps("email")}/>
                    </Box>
                    <Box  sx={{color:'error.main',pt:'8%' }} component="span">
                        <ErrorMessage name="email" component="span" />
                    </Box>
                </Box>

                <Box sx={{display:'flex',  justifyContent: 'flex-start'}}> 
                    <Box>
                        <TextField id="standard-basic" variant="standard" name="password" id="password" type="password"
                         label="Password"
                        
                        {...getFieldProps("password")}/>
                    </Box>
                    <Box  sx={{color:'error.main',pt:'8%'}} component="span">
                        <ErrorMessage name="password" component="span"  />
                    </Box>
                </Box>

                <Box sx={{display:'flex',  justifyContent: 'flex-start'}}> 
                    <Box>
                        <TextField id="standard-basic" variant="standard" name="confirmPassword" id="confirmPassword"  type="password"
                         label="Confirm Password"
                        
                        {...getFieldProps("confirmPassword")}/>
                    </Box>
                    <Box  sx={{color:'error.main',pt:'8%'}} component="span">
                        <ErrorMessage name="confirmPassword" component="span"  />
                    </Box>
                </Box>

                <Box sx={{display:'flex', alignItems: 'center',mt:'6%', mb:'3%'}}>
                    <Stack direction="row" spacing={1}>
                        <Button  type="submit" variant="contained">Register</Button>
                        <Button  type="reset" variant="contained"  color="secondary">Reset</Button>
                    </Stack>
                </Box>
                    
            </Box>
            </Box>
        </Form>
            )}
            />
        )
    }
}

export default PersonRegistration;