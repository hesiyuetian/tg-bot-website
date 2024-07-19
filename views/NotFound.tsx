import { useEffect } from 'react';
import styled from 'styled-components';

const StyledNotFound = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 64px);
    justify-content: center;
`;

const NotFound = ({ statusCode = 404 }: { statusCode?: number }) => {
    useEffect(() => {
        window.location.href = '/';
    }, []);
    return <StyledNotFound>{statusCode} NOT FOUND</StyledNotFound>;
};

export default NotFound;
