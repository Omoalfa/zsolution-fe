import { Navigate, useLocation } from 'react-router-dom';

const Protected = ({children}) => {
    const token = localStorage.getItem('authToken');
    const location = useLocation();

    if (!token) {
        return <Navigate to="/" state={{ from: location }} />;
    }
    return children
}

export default Protected
