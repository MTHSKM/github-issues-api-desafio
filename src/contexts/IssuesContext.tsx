import { ReactNode, useCallback, useEffect, useReducer } from "react";
import { apiIssues } from "../lib/axios";
import { IssueResponse, issuesReducer } from "../reducers/issues/reducer";
import { fetchIssueAction } from "../reducers/issues/actions";
import { createContext } from "use-context-selector";


interface IssuesContextType {
    issues: IssueResponse,
    fetchIssues: (query?: string) => Promise<void>
}

interface IssuesProviderProps {
    children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
    // const [ issues, setIssues ] = useState<IssueResponse>({} as IssueResponse)
    const [issues, dispatch] = useReducer( issuesReducer, {
        total_count: 0,
        incomplete_results: false,
        items: []
    })

    // async function fetchIssues(query?: string) {
    //     const response = await apiIssues.get('issues', {
    //         params: {
    //             q: query ? `repo:MTHSKM/github-issues-api-desafio ${query}` : 'repo:MTHSKM/github-issues-api-desafio'
    //         }
    //     })

    //     dispatch(fetchIssueAction(response))

    //     // setIssues(response.data)
    // }

    const fetchIssues = useCallback(async (query?: string) => {
        const response = await apiIssues.get('issues', {
            params: {
                q: query ? `repo:MTHSKM/github-issues-api-desafio ${query}` : 'repo:MTHSKM/github-issues-api-desafio'
            }
        })

        dispatch(fetchIssueAction(response))

        // setIssues(response.data)
    }, []) 

    useEffect(() => {
        fetchIssues()
    }, [fetchIssues])

    return (
        <IssuesContext.Provider value={{ issues, fetchIssues }}>
            {children}
        </IssuesContext.Provider>
    )
}