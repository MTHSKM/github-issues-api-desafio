import styled from "styled-components";


export const SummaryPostContent = styled.div`
    width: 100%;
    max-width: 864px;
    margin: 0 auto;
    padding: 2rem 2.5rem;
    display: flex;
    margin-top: -9rem;
    background: ${props => props.theme['base-profile']};
    position: relative;
    border-radius: 12px;
`

export const SummaryPostAboutPost = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 148px;

    header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.125rem;
        align-items: center;
        width: 780px;

        button {
            display: inline-flex;
            align-items: center;
            color: ${props => props.theme['blue']};
            gap: 0.25rem;
            font-size: 0.75rem;
            background: none;
            border: none;
            outline: none;
            cursor: pointer;
            border-bottom: 2px solid transparent;
            font-weight: 800;
            text-decoration: none;
            
            svg {
                line-height: 0;
            }

            &:hover {
                border-bottom: 2px solid ${props => props.theme['blue']};
                transition: all 0.2s;
            }
        }

        
        a {
            display: inline-flex;
            align-items: center;
            font-size: 0.75rem;
            color: ${props => props.theme['blue']};
            gap: 0.25rem;
            cursor: pointer;
            border-bottom: 2px solid transparent};
            font-weight: 800;
            text-decoration: none;

            svg {
                line-height: 0;
            }
    }

    h1 {
        margin: -0.5rem 0 0.5rem 0;
    }

    footer {
            display: flex;

            a { 
                display: inline-flex;
                align-items: center;
                margin-right: 24px;
                color: ${props => props.theme['base-span']};
                gap: 0.5rem;
                cursor: pointer;
                text-decoration: none;
                
                svg {
                    color: ${props => props.theme['base-label']};
                }

                &:hover {
                    color: ${props => props.theme['blue']};
                }
            }

            a:first-child:hover {
                color: ${props => props.theme['blue']};
                transition: all 0.2s;

                svg {
                    color: ${props => props.theme['blue']};
                    transition: all 0.2s; 
                }
            }

            p { 
                display: inline-flex;
                align-items: center;
                margin-right: 24px;
                color: ${props => props.theme['base-span']};
                gap: 0.5rem;

                svg {
                    color: ${props => props.theme['base-label']};
                }
            }

            p:last-child {
                margin-right: 0;
            }
    }
`