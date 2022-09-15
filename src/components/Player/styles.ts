import { StyleSheet } from 'react-native'

import { Colors } from '~/constants/Colors'
import { Layout } from '~/constants/Layout'

export const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopColor: Colors.green,
    borderTopWidth: 2,
    backgroundColor: Colors.black,
  },
  container: {
    height: Layout.playerHeight,
  },
})
