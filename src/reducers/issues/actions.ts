import { AxiosResponse } from "axios";

export enum IssuesActionTypes {
    READ_ISSUE = "READ_ISSUE"
}

export function fetchIssueAction(response: AxiosResponse<any, any>) {
    return {
        type: IssuesActionTypes.READ_ISSUE,
        payload: {
            data: {
                total_count: response.data.total_count,
                incomplete_results: response.data.incomplete_results,
                items: response.data.items
            }
        }
    }
}