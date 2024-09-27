import { Profile } from "../profile/reducer"
import { IssuesActionTypes } from "./actions"

interface Issue {
    url: string,
    repository_url: string,
    id: number,
    user: Profile,
    title: string,
    comments: number,
    created_at: string,
    body: string,
    html_url: string,
    user_url: string
}

export interface IssueResponse {
    total_count: number,
    incomplete_results: boolean,
    items: Issue[]
}


export function issuesReducer(state: IssueResponse, action: any) {
    switch(action.type) {
        case IssuesActionTypes.READ_ISSUE:
            return {
                ...state,
                total_count: action.payload.data.total_count,
                incomplete_results: action.payload.data.incomplete_results,
                items: action.payload.data.items
            }

        default:
            return state
    }
}