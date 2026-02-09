/* =======================================================
 *
 * Created by anele on 09/02/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React, { ReactNode, createContext, useContext } from 'react'

interface Props {
    children?: ReactNode
}

type AppProviderProps = {
    user: null
}

const AppContext = createContext<AppProviderProps>({
    user: null
})

export const useAppContext = (): AppProviderProps => useContext(AppContext)

export default function AppProvider({children}: Props) {
    const [ user, ] = React.useState<null>(null)

    React.useEffect( () => {
        if(!user) {
            //
        }
    }, [user] )

    const context = React.useMemo(
        () => ({
            user
        }),
        [user]
    )

    return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}
