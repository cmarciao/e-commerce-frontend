import { BrowserRouter } from "react-router-dom";
import { Register } from ".";
import { TestService } from "../../tests/TestService";

function renderPage() {
    return (
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    );
}

describe('Register page', () => {
    it('should render correctly', () => {
        const registerTest = new TestService(renderPage());

        registerTest.checkIfTextAppear('Register account')
    });
    
    it('should appear empty name error when try login', () => {
        const registerTest = new TestService(renderPage());

        registerTest
            .typeInputByPlaceholder('Email', 'mocked@gmail.com')
            .typeInputByPlaceholder('Password', '1212121212121212')
            .clickButtonByText('Register')
            .checkIfTextAppear('Informe o seu nome.')
            .checkIfTextNotAppear('Informe o seu email.')
            .checkIfTextNotAppear('A senha deve ter mais de 8 caracteres.')
    });

    it('should appear invalid name error when try login', () => {
        const registerTest = new TestService(renderPage());

        registerTest
            .typeInputByPlaceholder('Name', 'mockedName')
            .typeInputByPlaceholder('Email', 'mocked@')
            .typeInputByPlaceholder('Password', '1212121212121212')
            .clickButtonByText('Register')
            .checkIfTextNotAppear('Informe o seu nome.')
            .checkIfTextAppear('O email não é válido.')
            .checkIfTextNotAppear('A senha deve ter mais de 8 caracteres.')
    });

    it('should appear empty email error when try login', () => {
        const registerTest = new TestService(renderPage());

        registerTest
            .typeInputByPlaceholder('Name', 'mockedName')
            .typeInputByPlaceholder('Password', '1212121212121212')
            .clickButtonByText('Register')
            .checkIfTextNotAppear('Informe o seu nome.')
            .checkIfTextAppear('Informe o seu email.')
            .checkIfTextNotAppear('A senha deve ter mais de 8 caracteres.')
    });

    it('should appear few characters password error when try login', () => {
        const registerTest = new TestService(renderPage());

        registerTest
            .typeInputByPlaceholder('Name', 'mockedName')
            .typeInputByPlaceholder('Email', 'mocked@gmail.com')
            .typeInputByPlaceholder('Password', 'test')
            .clickButtonByText('Register')
            .checkIfTextNotAppear('Informe o seu nome.')
            .checkIfTextNotAppear('O email não é válido.')
            .checkIfTextAppear('A senha deve ter mais de 8 caracteres.')
    });

    it('should not appear error when try login', () => {
        const registerTest = new TestService(renderPage());

        registerTest
            .typeInputByPlaceholder('Name', 'mockedName')
            .typeInputByPlaceholder('Email', 'mocked@gmail.com')
            .typeInputByPlaceholder('Password', 'mockedPassword')
            .clickButtonByText('Register')
            .checkIfTextNotAppear('Informe o seu nome.')
            .checkIfTextNotAppear('O email não é válido.')
            .checkIfTextNotAppear('A senha deve ter mais de 8 caracteres.')
    });
});