import styled from "styled-components";

export const HomeContainer = styled.div`
    max-width: 864px;
    margin: 3rem auto 2rem;
    position: relative;
    background: ${props => props.theme['base-background']};
`

export const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    max-width: 100%;
    
    &::after {
        content: "";
        flex: 1 1 calc(50% - 2rem);
        max-width: 416px;
        visibility: hidden;
    }

    a {
        width: 100%;
        max-width: 416px;
        text-decoration: none;
        border: none;
    }
`
