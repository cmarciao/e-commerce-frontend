import { screen, fireEvent, render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { ReactElement } from "react";

export class TestService {
    constructor(element: ReactElement) {
        render(element);
    }

    typeInputByPlaceholder(placeholder: string, text: string) {
        const input = screen.getByPlaceholderText(placeholder);
        fireEvent.change(input, {target: {value: text}});
    
        return this;
    }

    clickButtonByText(textButton: string) {
        const button = screen.getByText(textButton);
        fireEvent.click(button);

        return this;
    }

    checkIfTextAppear(text: string) {
        expect(screen.getByText(text)).toBeInTheDocument();
        return this;
    }

    checkIfTextNotAppear(text: string) {
        expect(screen.queryByText(text)).toBeNull();
        return this;
    }
    
    toHaveBeenCalled(param: any) {
        expect(param).toHaveBeenCalled();
        return this;
    }

    toHaveNotBeenCalled(param: any) {
        expect(param).not.toHaveBeenCalled();
        return this;
    }
}