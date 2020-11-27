import React from 'react'
import { isAuthenticated } from 'authenticare/client'

// this is a helper component, used to displays component based on authentication
export function IfAuthenticated ({ children }) {
  return isAuthenticated()
    ? <>{ children }</>
    : null
}
export function IfNotAuthenticated ({ children }) {
  return !isAuthenticated()
    ? <>{ children }</>
    : null
}
