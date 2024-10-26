#!/usr/bin/env node
import React from 'react'
import { render } from 'ink'
import meow from 'meow'
import App from './app.js'

meow(
  `
	Usage
	  $ bouwekit

	Options
		--name  Your name

	Examples
	  $ bouwekit --name=Jane
	  Hello, Jane
`,
  {
    importMeta: import.meta,
    flags: {
      name: {
        type: 'string',
      },
    },
  }
)

render(<App />)
