import { useState } from "react";

type FieldError = {
    field: string;
    message: string;
}

export function useErrors() {
    const [errors, setErrors] = useState<FieldError[]>([]);

    function setError({ field, message }: FieldError) {
        const isErrorAlreadyExists = errors.find(err => err.message === message);

        if(isErrorAlreadyExists) return;

        const fieldAlreadyExists = errors.find(err => err.field === field);
        
        if(fieldAlreadyExists) {
            removeError(field)
        }

        setErrors(prevState => [
            ...prevState,
            { field, message }
        ]);
    }

    function getErrorByFieldName(fieldName: string): string {
        return errors.find(err => err.field === fieldName)?.message || "";
    }


    function removeError(fieldError: String) {
        setErrors(prevState =>
            prevState.filter(err =>
                err.field !== fieldError
            )
        );
    }

    return {
        setError,
        getErrorByFieldName,
        removeError
    };
}