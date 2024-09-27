import styled from "styled-components";

export const SearchBarDivContainer = styled.div`
    width: 100%;
    max-width: 864px;
    margin: 3rem auto 2rem;
    position: relative;
`

export const SearchFormTextContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;

    strong {
        color: ${props => props.theme['base-subtitle']};
        font-size: 1.125rem;
        font-weight: 800;
    }

    p {
        color: ${props => props.theme['base-span']};
        font-size: 0.875rem;
    }
`

export const SearchBarContainer = styled.form`
    display: flex;
    

    input { 
        flex: 1;
        border-radius: 6px;
        border: 0;
        background: ${props => props.theme['base-input']};
        color: ${props => props.theme['base-title']};
        padding: 1rem;

        &:disabled {
            cursor: not-allowed;
            opacity: 0.7;
        }

        &::placeholder {
            color: ${props => props.theme['base-label']};
        }
    }
`