import { BrowserRouter } from 'react-router-dom';
import { Login } from '.';
import { TestService } from '../../tests/TestService';

const mockNavigate = jest.fn();
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockNavigate
}));

function renderPage() {
    return (
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
}

describe('Login page', () => {
    it('should render correctly', () => {    
        const loginTest = new TestService(renderPage())
        loginTest.checkIfTextAppear('Log in now');
    });
    
    it('shloud return to the initial page by hiting the back button', () => {
        const loginTest = new TestService(renderPage());
        loginTest.clickButtonByText('Back');

        expect(mockNavigate).toHaveBeenCalledWith('/', {"replace": true, "state": undefined});
    });

    it('should appear empty email error in email login field', () => {
        const loginTest = new TestService(renderPage());

        loginTest
            .typeInputByPlaceholder('Email', 'mockedEmail@gmail.com')
            .clickButtonByText('Sign In')
            .checkIfTextNotAppear('Informe o seu email.')
            .checkIfTextAppear('A senha deve ter mais de 8 caracteres.');
    });
    
    it('should appear empty password error in password login field', () => {
        const loginTest = new TestService(renderPage());

        loginTest
            .typeInputByPlaceholder('Password', 'mockedPassword')
            .clickButtonByText('Sign In')
            .checkIfTextAppear('Informe o seu email.')
            .checkIfTextNotAppear('A senha deve ter mais de 8 caracteres.');
    });

    it('should appear empty form errors in email and password login fields', () => {
        const loginTest = new TestService(renderPage());

        loginTest
            .clickButtonByText('Sign In')
            .checkIfTextAppear('Informe o seu email.')
            .checkIfTextAppear('A senha deve ter mais de 8 caracteres.');
    });
    
    it('should appear invalid email error in email login fields', () => {
        const loginTest = new TestService(renderPage());

        loginTest
            .typeInputByPlaceholder('Email', 'm')
            .clickButtonByText('Sign In')
            .checkIfTextAppear('O email não é válido.')
            .checkIfTextAppear('A senha deve ter mais de 8 caracteres.');
    });

    it('should not appear error when try login', async () => {
        const loginTest = new TestService(renderPage());

        loginTest
            .typeInputByPlaceholder('Email', 'mockedEmail_emailMocked@gmail.com')
            .typeInputByPlaceholder('Password', 'mockedPassword12345678')
            .clickButtonByText('Sign In')
            .checkIfTextNotAppear('O email não é válido.')
            .checkIfTextNotAppear('A senha deve ter mais de 8 caracteres.');
    });
});
