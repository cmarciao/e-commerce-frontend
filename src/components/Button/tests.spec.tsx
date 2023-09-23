import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from '.';

describe('Button component', () => {
    it('should render correctly', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    it('should render loading in button', () => {
        render(<Button isLoading>Test</Button>);
        expect(screen.queryByText('Test')).not.toBeInTheDocument();
    });
});