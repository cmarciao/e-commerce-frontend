import { BrowserRouter } from "react-router-dom";
import { PageInital } from ".";
import { TestService } from '../../tests/TestService';

const mockNavigate = jest.fn();
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockNavigate
}));

function renderPage() {
    return (
        <BrowserRouter>
            <PageInital />
        </BrowserRouter>
    );
}

describe('Initial page', () => {
    it('shoudl render correctly', () => {
        const initialPageTest = new TestService(renderPage());
        initialPageTest.checkIfTextAppear('Welcome to');
    });
    
    it('shloud navigate to login page by hiting the sign in button', () => {
        const initialPageTest = new TestService(renderPage());
        initialPageTest.clickButtonByText('Sig In');

        expect(mockNavigate).toHaveBeenCalledWith('/login', {"replace": false, "state": undefined})
    });

    it('should navigate to register page by hiting the register button', () => {
        const initialPageTest = new TestService(renderPage());
        initialPageTest.clickButtonByText('Register');

        expect(mockNavigate).toHaveBeenCalledWith('/register', {"replace": false, "state": undefined});
    });
});
