import React from 'react'

import {
  Box,
  AestheticProvider,
  Text,
  Heading,
  Link,
  Button,
  Divider
} from 'vaporwave-aesthetic-ui'
import 'vaporwave-aesthetic-ui/dist/index.css'

const App = () => {
  return (
    <AestheticProvider>
      <Box dark>
        <Heading>derp</Heading>
        <Text>
          <Link href='/#'>ok</Link>
        </Text>
        <Divider />
        <Button>hello i'm a button</Button>
      </Box>
    </AestheticProvider>
  )
}

export default App
