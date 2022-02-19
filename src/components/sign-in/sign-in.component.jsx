import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utilis'
class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    handlesubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        }
        catch (error) {
            alert('There is no  record user corresponding to this email');

        }

    };
    handlechange = event => {
        console.log(event)

        const { value, name } = event.target;
        this.setState({ [name]: value });

    };
    signInWithGoogleHandler = async () => {

        const result = await signInWithGoogle();

    }

    render() {

        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>sign in with your email address and password</span>
                <form onSubmit={this.handlesubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handlechange}
                        label="email"

                        required />

                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handlechange}
                        label="password"
                        required />
                    <div className="buttons">
                        <CustomButton type='submit'>Sign in </CustomButton>
                        <CustomButton onClick={this.signInWithGoogleHandler} isGoogleSignIn>Sign in with google</CustomButton>
                    </div>





                </form>

            </div>
        );

    }
}
export default SignIn;