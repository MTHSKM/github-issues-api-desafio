import { ProfileActionTypes } from "./actions"

export interface Profile {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    html_url: string,
    company: string,
    followers: number,
    bio: string
}

export function profileReducer(state: Profile, action: any) {
    switch (action.type) {
        case ProfileActionTypes.READ_PROFILE:
            return action.payload.data

        default:
            return state
    }
}