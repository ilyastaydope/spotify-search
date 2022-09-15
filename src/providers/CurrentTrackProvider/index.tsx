import * as React from 'react'

type Props = {
  readonly children: React.ReactNode
}

type ContextProps = {
  readonly setCurrentTrack: React.Dispatch<React.SetStateAction<Track | undefined>>
  readonly currentTrack?: Track
}

export const Context = React.createContext<ContextProps>({
  currentTrack: undefined,
  setCurrentTrack: () => { },
})

export const CurrentTrackProvider = (props: Props) => {
  const { children } = props
  const [currentTrack, setCurrentTrack] = React.useState<Track | undefined>()

  return <Context.Provider value={{ currentTrack, setCurrentTrack }}>{children}</Context.Provider>
}
