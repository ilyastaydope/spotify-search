import { useSpacingHelpers } from '@mobily/stacks'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const useStacksInsets = () => {
  const { top, bottom, left, right } = useSafeAreaInsets()
  const { divide } = useSpacingHelpers()

  return {
    topInset: divide(top),
    bottomInset: divide(bottom),
    leftInset: divide(left),
    rightInset: divide(right),
  }
}
