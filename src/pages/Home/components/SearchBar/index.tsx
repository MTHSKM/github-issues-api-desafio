import { useForm } from "react-hook-form";
import { SearchBarContainer, SearchBarDivContainer, SearchFormTextContainer } from "./styles";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { IssuesContext } from "../../../../contexts/IssuesContext";
import { useContextSelector } from "use-context-selector";

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs= Zod.infer<typeof searchFormSchema>

interface SearchBarProps {
    quantity: number
}

export function SearchBar(props: SearchBarProps) {
    const fetchIssues = useContextSelector(IssuesContext, (context) => {
        return context.fetchIssues
    })


    const { quantity } = props
    const { 
        register, 
        handleSubmit,
        formState: {
            isSubmitting
        }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleSearchPost(data: SearchFormInputs) {
        await fetchIssues(data.query)
    }

    return (
        <SearchBarDivContainer>
            <SearchFormTextContainer>
                <strong>Publicações</strong>
                <p>{quantity} publicações</p>
            </SearchFormTextContainer>
            <SearchBarContainer onSubmit={handleSubmit(handleSearchPost)}>
                <input
                    type="text"
                    placeholder="Buscar conteúdo"
                    {...register('query')}
                    disabled={isSubmitting}
                ></input>
            </SearchBarContainer>
        </SearchBarDivContainer>
    )
}