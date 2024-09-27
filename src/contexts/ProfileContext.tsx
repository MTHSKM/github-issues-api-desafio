import { ReactNode, useCallback, useEffect, useReducer } from "react";
import { apiProfile } from "../lib/axios";
import { Profile, profileReducer } from "../reducers/profile/reducer";
import { fetchProfileAction } from "../reducers/profile/actions";
import { createContext } from "use-context-selector";

interface ProfileContextType {
    profile: Profile
}

interface ProfileProviderProps {
    children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextType)

export function ProfileProvider({ children }: ProfileProviderProps) {
    const [profile, dispatch] = useReducer( profileReducer, {} as Profile)

    const fetchProfile = useCallback( async () => {
        const response = await apiProfile.get('MTHSKM')

        dispatch(fetchProfileAction(response))
    }, [])
    

    useEffect(() => {
        fetchProfile()
    }, [fetchProfile])

    return (
        <ProfileContext.Provider value={{ profile }}>
            {children}
        </ProfileContext.Provider>
    )
}