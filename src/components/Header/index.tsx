import { HeaderContainer } from "./styles";

import background from '../../assets/background.svg'

export function Header() {
    return (
        <HeaderContainer>
            <img src={background}></img>
        </HeaderContainer>
    )
}