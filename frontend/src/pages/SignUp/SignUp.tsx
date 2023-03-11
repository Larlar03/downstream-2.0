import { useState } from 'react';
import './SignUp.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Axios, * as axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SignUp() {
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    // Email already in use
    const [signuperror, setSignupError] = useState('');
    const navigator = useNavigate();

    const [isAgeError, setIsAgeError] = useState(false);

    const validateBirthDate = (payload: any) => {
        let today = new Date();

        let age = today.getFullYear() - payload.getFullYear();
        if (age < 16) {
            setIsAgeError(true);
        } else {
            setIsAgeError(false);
        }
        setSelectedDate(payload);
    };

    const signuppage = () => {
        Axios.post(`${process.env.REACT_APP_STUDIOS_API}`, {
            name: name,
            surname: surname,
            username: userName,
            email: email,
            selectedDate: selectedDate,
            country: country,
            password: password
        }).then((response: any) => {
            console.log(response.data);
            if (response.data.message) {
                setSignupError(response.data.message);
            } else {
                setSignupError('');
                navigator('/Login');
            }
        });
    };
    return (
        <div className='container-fluid h-100'>
            <div className='row h-100 mx-4'>
                <div className='col d-flex flex-column p-0'>
                    <Header />
                    <main className='h-100 d-flex flex-column justify-content-center align-items-center'>
                        <h3 className='h3 mt-4 p-3'>
                            <span className='text-white'> Sign Up </span>
                        </h3>

                        <div className='sign-up'>
                            <form onSubmit={(event) => event.preventDefault()}>
                                <div className='row mt-3 mb-3'>
                                    <div className='col h6'>
                                        <label htmlFor='Name'>First Name</label>
                                        <input
                                            type='text'
                                            className='form-control form-control-sm'
                                            id='Name'
                                            aria-label='Name'
                                            onChange={(event) => {
                                                setName(event.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className='col h6'>
                                        <label htmlFor='Surname'>
                                            {' '}
                                            Last Name
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control form-control-sm'
                                            id='Surname'
                                            aria-label='Surname'
                                            onChange={(event) => {
                                                setSurname(event.target.value);
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className='mb-3 h6'>
                                    <label
                                        htmlFor='username'
                                        className='form-label'
                                    >
                                        Username
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control form-control-sm'
                                        id='username'
                                        aria-describedby='usernameHelp'
                                        onChange={(event) => {
                                            setUserName(event.target.value);
                                        }}
                                    />
                                </div>

                                <div className='mb-3 h6'>
                                    <label
                                        htmlFor='email'
                                        className='form-label'
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type='email'
                                        className='form-control form-control-sm'
                                        id='email'
                                        aria-describedby='emailHelp'
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                        }}
                                    />
                                </div>

                                <div className='row mt-3 mb-3'>
                                    <div className='col h6'>
                                        <label htmlFor='dob'>
                                            {' '}
                                            Date of Birth
                                        </label>
                                        <DatePicker
                                            className='form-control form-control-sm'
                                            selected={selectedDate}
                                            onChange={validateBirthDate}
                                            showMonthDropdown={true}
                                            showYearDropdown={true}
                                            scrollableYearDropdown={true}
                                            yearDropdownItemNumber={100}
                                        />
                                        {isAgeError ? (
                                            <span className='alert'>
                                                You need to be 16 and above!
                                            </span>
                                        ) : null}
                                    </div>

                                    <div className='col h6'>
                                        <label htmlFor='country'>Country</label>
                                        <select
                                            className='form-select form-select-sm'
                                            aria-label='Default select example'
                                            onChange={(event) => {
                                                setCountry(event.target.value);
                                            }}
                                        >
                                            <option value=''>--select--</option>
                                            <option value='USA'>
                                                United States of America
                                            </option>
                                            <option value='Other'>Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='mb-3 h6'>
                                    <label
                                        htmlFor='password'
                                        className='form-label'
                                    >
                                        Password
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control form-control-sm'
                                        id='password'
                                        aria-describedby='passwordHelp'
                                        onChange={(event) => {
                                            setPassword(event.target.value);
                                        }}
                                    />
                                </div>

                                <div className='mb-3 h6'>
                                    <label
                                        htmlFor='confirmpassword'
                                        className='form-label'
                                    >
                                        Confirm password
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control form-control-sm'
                                        id='confirmpassword'
                                        aria-describedby='confirmpasswordHelp'
                                        onChange={(event) => {
                                            setConfirmPassword(
                                                event.target.value
                                            );
                                        }}
                                    />
                                </div>

                                <div>
                                    <div className='error-message'>
                                        {signuperror}
                                    </div>

                                    <button
                                        type='submit'
                                        className='buttn'
                                        disabled={
                                            !email ||
                                            !password ||
                                            !confirmPassword ||
                                            !userName ||
                                            !name ||
                                            !surname ||
                                            !country
                                        }
                                        onClick={signuppage}
                                    >
                                        {' '}
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </main>
                    {/* Main Gradient Section Ends */}
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default SignUp;
