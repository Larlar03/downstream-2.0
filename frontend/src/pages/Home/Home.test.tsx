import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Home from './Home';
import App from '../../App';
import userEvent from '@testing-library/user-event';

describe('test button rendering', () => {
    const homePage = (
        <App>
            <Home />
        </App>
    );

    test('sign up button renders', () => {
        render(homePage);
        const signUpButton = screen.getByText(/Sign Up/i);
        expect(signUpButton).toBeInTheDocument();
    });
    test('log in button renders', () => {
        render(homePage);
        const logInButton = screen.getByText(/Log In/i);
        expect(logInButton).toBeInTheDocument();
    });
});

describe('button navigating', () => {
    const homePage = (
        <App>
            <Home />
        </App>
    );
    test('sign up button navigates to sign up page', async () => {
        render(homePage);

        const signUpButton = screen.getByText(/Sign Up/i);
        await userEvent.click(signUpButton);

        const pageLoad = screen.getByText(/Sign Up Page/i);
        expect(pageLoad).toBeInTheDocument();
    });

    test('log in button navigates to login page', async () => {
        render(homePage);

        const logInButton = screen.getByText(/Log In/i);
        await userEvent.click(logInButton);

        const pageLoad = screen.getByText(/Log In Page/i);
        expect(pageLoad).toBeInTheDocument();
    });
});
