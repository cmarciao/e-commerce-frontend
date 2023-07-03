import { useContext } from 'react';
import { UserContext } from '../contexts/AuthContext';

export function useAuth() {
	const authContext = useContext(UserContext);

	return { ...authContext };
}
