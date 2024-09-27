import styled from "styled-components";

export const SummaryHomeContainer = styled.header`
`

export const SummaryHomeContent = styled.div`
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

export const SummaryHomeProfilePic = styled.div`
    img {
        width: 148px;
        height: 148px;
        border-radius: 15px;
    }
`

export const SummaryHomeAboutMe = styled.div`
    padding-left: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 148px;

    header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.25rem;
        width: 580px;

        strong {
            font-size: 1.5rem;
            font-weight: bold;
        }

        a {
            display: inline-flex;
            align-items: center;
            font-size: 0.75rem;
            color: ${props => props.theme['blue']};
            gap: 0.25rem;
            cursor: pointer;

            svg {
                line-height: 0;
            }
        }
    }

    p {
        margin: -0.5rem 0 0.5rem 0;
    }

    footer {
            display: flex;

            a { 
                display: inline-flex;
                align-items: center;
                margin-right: 24px;
                color: ${props => props.theme['base-subtitle']};
                gap: 0.5rem;
                text-decoration: none;

                svg {
                    color: ${props => props.theme['base-label']};
                }
            }

            a:first-child {
                cursor: pointer;
            }
            
            a:first-child:hover {
                color: ${props => props.theme['blue']};
                transition: all 0.2s;

                svg {
                    color: ${props => props.theme['blue']};
                    transition: all 0.2s; 
                }
            }

            a:last-child {
                margin-right: 0;
            }
    }
`   