import React from 'react'
import { Box, Text, useApp, useInput } from 'ink'

export default function App() {
  const [text, setText] = React.useState('')

  const { exit } = useApp()

  useInput((input, key) => {
    if (key.escape) exit()
    setText((text) => text + input)
  })

  return (
    <Box flexDirection="column">
      <Text> </Text>
      <Text color="green">H E L L O, W O R L D</Text>
      <Text> </Text>
      <Text>{text}</Text>
      <Text> </Text>
      <Text>ESC = quit</Text>
    </Box>
  )
}
