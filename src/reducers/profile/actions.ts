import { AxiosResponse } from "axios";

export enum ProfileActionTypes {
    READ_PROFILE = "READ_PROFILE"
}

export function fetchProfileAction(response: AxiosResponse<any, any>) {
    return {
        type: ProfileActionTypes.READ_PROFILE,
        payload: {
            data: response.data
        }
    }
}