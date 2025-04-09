#!/usr/bin/env node
import * as utils from './utils/index.js'
import fs from 'fs'

const note = process.argv[2]
const newNote = {
  content: note,
  id: Date.now(),
  count: utils.count(2),
  name: utils.name()
}
console.log(newNote)