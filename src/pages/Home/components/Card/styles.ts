import styled from "styled-components";

export const CardContainer = styled.div`
    background: ${props => props.theme['base-post']};
    width: 416px;
    max-width: 864px;
    margin: 0 auto 1rem;
    position: relative;
    padding: 2rem;
    max-height: 260px;
    overflow: hidden;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    h1 {
        flex: 1;
        margin: 0;
        font-size: 1.25rem;
        max-width: 70%;
        word-wrap: break-word;
        color: ${props => props.theme['base-title']};
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    span {
        flex-shrink: 0;
        white-space: nowrap;
        font-size: 0.875rem;
        color: ${props => props.theme['base-span']};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    p {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${props => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`