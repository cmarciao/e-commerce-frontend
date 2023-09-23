import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from "react-router-dom";
import { PageInital } from ".";

const mockNavigate = jest.fn();
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockNavigate
}));

function renderPage() {
    render (
        <BrowserRouter>
            <PageInital />
        </BrowserRouter>
    );
}

describe('Initial page', () => {
    it('shoudl render correctly', () => {
        renderPage();
        expect(screen.getByText('Welcome to')).toBeInTheDocument();
    });

    it('shloud navigate to login page by hiting the sign in button', () => {
        renderPage();

        const btnLogin = screen.getByText('Sig In');
        fireEvent.click(btnLogin);

        expect(mockNavigate).toHaveBeenCalledWith('/login', {"replace": false, "state": undefined})
    });

    it('should navigate to register page by hiting the register button', () => {
        renderPage();

        const btnRegister = screen.getByText('Register');
        fireEvent.click(btnRegister);

        expect(mockNavigate).toHaveBeenCalledWith('/register', {"replace": false, "state": undefined});
    });
});
