import { ArrowSquareOut, CalendarPlus, CaretLeft, ChatCircle, GithubLogo } from "phosphor-react";
import { SummaryPostAboutPost, SummaryPostContent } from "./styles";
import { formatDistanceToNow } from "date-fns"
import { ptBR } from 'date-fns/locale/pt-BR'
import { useNavigate } from "react-router-dom";

interface SummaryPostProps {
    title: string,
    created_at: string,
    user: string,
    comments: number,
    html_url: string,
    user_url: string
}

export function SummaryPost(props: SummaryPostProps) {
    const { title, created_at, comments, html_url, user, user_url } = props
    const navigate = useNavigate()

    const dateFormatted = new Date(created_at)

    const dateFormattedRelativeToNow = formatDistanceToNow(dateFormatted, {
        locale: ptBR,
        addSuffix: true
    })

    function handleBackPage() {
        navigate(-1)
    }

    return (
        <SummaryPostContent>
            <SummaryPostAboutPost>
                <header>
                    <button onClick={() => handleBackPage()}><CaretLeft size={16}></CaretLeft>VOLTAR</button>
                    <a href={html_url} target="_blank">VER NO GITHUB <ArrowSquareOut size={16}></ArrowSquareOut></a>
                </header>

                <h1>{title}</h1>

                <footer>
                    <a href={user_url} target="_blank" ><GithubLogo size={18}></GithubLogo>{user}</a>
                    <p><CalendarPlus weight="fill" size={18}></CalendarPlus>{dateFormattedRelativeToNow}</p>
                    <p><ChatCircle weight="fill" size={18}></ChatCircle>{comments} {comments > 1 ? "Comentários" : "Comentário"}</p>
                </footer>
            </SummaryPostAboutPost>
        </SummaryPostContent>
    )
}