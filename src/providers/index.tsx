import * as React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClient, QueryClientProvider } from 'react-query'
import { StacksProvider } from '@mobily/stacks'

import { CurrentTrackProvider } from './CurrentTrackProvider'
import {FavoritesTracksProvider} from "~/providers/FavoritesTracksProvider";

type Props = {
  readonly children: React.ReactNode
}

const queryClient = new QueryClient()

export const Providers = (props: Props) => {
  const { children } = props

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StacksProvider spacing={4}>
            <FavoritesTracksProvider>
                <CurrentTrackProvider>{children}</CurrentTrackProvider>
            </FavoritesTracksProvider>
        </StacksProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}
