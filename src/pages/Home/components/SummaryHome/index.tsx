import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import { SummaryHomeAboutMe, SummaryHomeContainer, SummaryHomeContent, SummaryHomeProfilePic } from "./styles";

interface SummaryHomeProps {
    img: string,
    name: string,
    githubUrl: string,
    company: string,
    followers: number,
    description: string
}

export function SummaryHome(props: SummaryHomeProps) {
    const { img, company, followers, githubUrl, name, description } = props

    return (
        <SummaryHomeContainer>
            <SummaryHomeContent>
                <SummaryHomeProfilePic>
                    <img src={img}></img>
                </SummaryHomeProfilePic>

                <SummaryHomeAboutMe>
                    <header>
                        <strong>{name}</strong>
                        <a href={githubUrl} target="_blank">GITHUB <ArrowSquareOut size={16}></ArrowSquareOut></a>
                    </header>

                    <p>{description ? description : "empty bio"}</p>

                    <footer>
                        <a href={githubUrl} target="_blank"><GithubLogo></GithubLogo>{name}</a>
                        <a><Buildings weight="fill"></Buildings>{company ? company : "no company"}</a>
                        <a><Users weight="fill"></Users>{followers} {followers > 1 ? "Seguidores" : "Seguidor(a)"}</a>
                    </footer>
                </SummaryHomeAboutMe>
            </SummaryHomeContent>
        </SummaryHomeContainer>
    )
}