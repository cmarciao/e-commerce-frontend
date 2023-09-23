import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import { Login } from '.';
import { ToastContainer } from 'react-toastify';

const mockNavigate = jest.fn();
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockNavigate
}));

function renderPage() {
    render(
        <BrowserRouter>
            <Login />
            
            <ToastContainer
                theme="dark"
                position="top-right"
                autoClose={1000 * 2}
                closeOnClick
                pauseOnHover={false}
            />
        </BrowserRouter>
    );
}

describe('Login page', () => {
    it('should render correctly', () => {
        renderPage();
        expect(screen.getByText(`Log in now`)).toBeInTheDocument();
    });
    
    it('shloud return to the initial page by hiting the back button', () => {
        renderPage();

        const btnBack = screen.getByText('Back');
        fireEvent.click(btnBack);

        expect(mockNavigate).toHaveBeenCalledWith('/', {"replace": true, "state": undefined});
    });

    it('should appear empty email error in email login field', () => {
        renderPage();

        const iptEmail = screen.getByPlaceholderText('Email');
        fireEvent.change(iptEmail, {target: {value: 'marciaocassio@gmail.com'}});

        const btnSignIn = screen.getByText('Sign In');
        fireEvent.click(btnSignIn);

        expect(screen.queryByText('Informe o seu email.')).toBeNull();
        expect(screen.getByText('A senha deve ter mais de 8 caracteres.')).toBeInTheDocument();
    });
    
    it('should appear empty password error in password login field', () => {
        renderPage();
        
        const iptPassword = screen.getByPlaceholderText('Password');
        fireEvent.change(iptPassword, {target: {value: 'mockedPassword'}});

        const btnSignIn = screen.getByText('Sign In');
        fireEvent.click(btnSignIn);
        
        expect(screen.getByText('Informe o seu email.')).toBeInTheDocument();
        expect(screen.queryByText('A senha deve ter mais de 8 caracteres.')).toBeNull();
    });

    it('should appear empty form errors in email and password login fields', () => {
        renderPage();

        const btnSignIn = screen.getByText('Sign In');
        fireEvent.click(btnSignIn);

        expect(screen.getByText('Informe o seu email.')).toBeInTheDocument();
        expect(screen.getByText('A senha deve ter mais de 8 caracteres.')).toBeInTheDocument();
    })
    
    it('should appear invalid email error in email login fields', () => {
        renderPage();

        const iptEmail = screen.getByPlaceholderText('Email');
        fireEvent.change(iptEmail, {target: {value: 'm'}});

        const btnSignIn = screen.getByText('Sign In');
        fireEvent.click(btnSignIn);

        expect(screen.getByText('O email não é válido.')).toBeInTheDocument();
        expect(screen.getByText('A senha deve ter mais de 8 caracteres.')).toBeInTheDocument();
    });

    it('should not appear error when try login', async () => {
        renderPage();

        const iptEmail = screen.getByPlaceholderText('Email');
        fireEvent.change(iptEmail, {target: {value: 'mockedEmail_emailMocked@gmail.com'}})

        const iptPassword = screen.getByPlaceholderText('Password');
        fireEvent.change(iptPassword, {target: {value: 'mockedPassword12345678'}});

        const btnSignIn = screen.getByText('Sign In');
        fireEvent.click(btnSignIn);

        expect(screen.queryByText('O email não é válido.')).not.toBeInTheDocument();
        expect(screen.queryByText('A senha deve ter mais de 8 caracteres.')).not.toBeInTheDocument();
    });
});
