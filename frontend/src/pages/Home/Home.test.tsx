import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Home from './Home';
import { MemoryRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('test button rendering', () => {
    const homePage = (
        <Router>
            <Home />
        </Router>
    );
    test('sign up button renders', () => {
        render(homePage);
        const signUpButton = screen.getByText('Sign Up');
        expect(signUpButton).toBeInTheDocument();
    });
    test('log in button renders', () => {
        render(homePage);
        const logInButton = screen.getByText('Log In');
        expect(logInButton).toBeInTheDocument();
    });
});

describe('button navigating', () => {
    const homePage = (
        <Router>
            <Home />
        </Router>
    );
    test('sign up button navigates to sign up page', async () => {
        render(homePage);

        const signUpButton = screen.getByText('Sign Up');
        await userEvent.click(signUpButton);

        expect(signUpButton.closest('a')).toHaveAttribute('href', '/signup');
    });

    test('log in button navigates to login page', async () => {
        render(homePage);

        const logInButton = screen.getByText('Log In');
        await userEvent.click(logInButton);

        expect(logInButton.closest('a')).toHaveAttribute('href', '/login');
    });
});
