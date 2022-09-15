import * as React from 'react'

type Props = {
    readonly children: React.ReactNode
}

type ContextProps = {
    readonly setFavorites: React.Dispatch<React.SetStateAction<string[]>>
    readonly favorites?: string[]
}

export const Context = React.createContext<ContextProps>({
    favorites: [],
    setFavorites: () => { },
})

export const FavoritesTracksProvider = (props: Props) => {
    const { children } = props;
    const [favorites, setFavorites] = React.useState<string[]>([]);

    return <Context.Provider value={{favorites, setFavorites }}>{children}</Context.Provider>
}

