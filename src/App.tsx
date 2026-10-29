import { useEffect, useState } from 'react'
import { FluentProvider, webDarkTheme, webLightTheme } from '@fluentui/react-components'
import AppShell from './components/AppShell'
import Landing from './components/Landing'

function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <FluentProvider theme={hash ? webLightTheme : webDarkTheme}>
      {hash ? <AppShell /> : <Landing />}
    </FluentProvider>
  )
}

export default App
