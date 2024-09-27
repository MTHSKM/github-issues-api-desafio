import styled from "styled-components";
import Markdown from 'react-markdown';

export const PostContentContainer = styled.div`
    max-width: 800px;
    margin: 3rem auto 2rem;
    position: relative;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`

export const PostContentBody = styled(Markdown)`
    gap: 0.5rem;
    overflow-wrap: break-word;
    word-wrap: break-word;
    overflow: hidden;
    
    h1, h2, h3 {
        margin: 1rem 0;
    }

    p {
        margin: 0.5rem 0;
        line-height: 1.6;
    }

    a {
        color: #007bff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    ul, ol {
        margin: 0.5rem 0;
        padding-left: 1.5rem;
    }

    li {
        margin: 0.25rem 0;
    }
`