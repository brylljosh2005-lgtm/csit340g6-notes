import { createContext } from 'react'

export const SettingsContext = createContext({
  largeText: false,
  setLargeText: () => {},
})