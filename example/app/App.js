import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import ExampleA from './ExampleA'
import ExampleB from './ExampleB'

class Example extends React.Component {
  render () {
    return (
      <View style={styles.wrapper}>
        <ExampleA />
        <ExampleB />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Example
