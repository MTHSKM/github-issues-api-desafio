import { formatDistanceToNow } from "date-fns"
import { ptBR } from 'date-fns/locale/pt-BR'
import { CardContainer } from "./styles"

interface CardProps {
    title: string,
    content: string,
    createdAt: string
}

export function Card(props: CardProps) {
    const { title, content, createdAt } = props

    const dateFormatted = new Date(createdAt)

    const dateFormattedRelativeToNow = formatDistanceToNow(dateFormatted, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <CardContainer>
            <div>
                <h1>{title}</h1>
                <span>{dateFormattedRelativeToNow}</span>
            </div>
            
            <p>{content}</p>
        </CardContainer>
    )
}