import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Avatar, Button, Text, Tooltip } from '@fluentui/react-components'
import {
  AddRegular,
  DocumentRegular,
  DocumentFolderColor,
  FolderOpenRegular,
  GridDotsRegular,
  HomeRegular,
  PanelLeftRegular,
  PanelLeftFilled,
  SearchRegular,
  SettingsRegular,
} from '@fluentui/react-icons'
import './AppShell.css'

const primaryItems = [
  { id: 'dashboard', label: 'Dashboard', icon: <HomeRegular /> },
  { id: 'create', label: 'Create', icon: <AddRegular /> },
  { id: 'search', label: 'Search', icon: <SearchRegular /> },
]

const storageItems = [
  { id: 'explorer', label: 'Explorer', icon: <FolderOpenRegular /> },
  { id: 'configuration', label: 'Configuration', icon: <DocumentRegular /> },
]

const settingsItem = {
  id: 'settings',
  label: 'Settings',
  icon: <SettingsRegular />,
}

const items = [...primaryItems, ...storageItems, settingsItem]

function currentPage() {
  return items.find((item) => `#${item.id}` === window.location.hash) ?? items[0]
}

function AppShell({ children }: { children?: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  const [page, setPage] = useState(currentPage)
  const contentRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onHashChange = () => setPage(currentPage())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  function navigationItem(item: (typeof items)[number]) {
    return (
      <Tooltip
        key={item.id}
        content={item.label}
        relationship="label"
        positioning="after"
      >
        <Button
          as="a"
          href={`#${item.id}`}
          appearance="subtle"
          size="small"
          className="app-shell-nav-item"
          icon={item.icon}
          aria-label={item.label}
          aria-current={page.id === item.id ? 'page' : undefined}
        >
          <span className="app-shell-label">{item.label}</span>
        </Button>
      </Tooltip>
    )
  }

  return (
    <div className={`app-shell${collapsed ? ' collapsed' : ''}`}>
      <a
        className="app-shell-skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault()
          contentRef.current?.focus()
        }}
      >
        Skip to content
      </a>
      <aside className="app-shell-sidebar" aria-label="Storage sidebar">
        <header className="app-shell-header">
          <a className="app-shell-brand" href="#dashboard" aria-label="Storage dashboard">
            <DocumentFolderColor aria-hidden="true" />
            <Text className="app-shell-label" size={500} weight="semibold">
              Storage
            </Text>
          </a>
          <div className="app-shell-header-actions">
            <Tooltip content="App launcher" relationship="label">
              <Button
                className="app-shell-launcher"
                appearance="subtle"
                size="small"
                icon={<GridDotsRegular />}
                aria-label="App launcher"
              />
            </Tooltip>
            <Tooltip
              content={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              relationship="label"
            >
              <Button
                className="app-shell-toggle"
                appearance="subtle"
                size="small"
                icon={collapsed ? (
                  <span className="app-shell-toggle-icons">
                    <DocumentFolderColor className="app-shell-toggle-brand" />
                    <PanelLeftFilled className="app-shell-toggle-expand" />
                  </span>
                ) : <PanelLeftRegular />}
                aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                aria-expanded={!collapsed}
                aria-controls="primary-navigation"
                onClick={() => setCollapsed((value) => !value)}
              />
            </Tooltip>
          </div>
        </header>
        <nav id="primary-navigation" className="app-shell-navigation" aria-label="Main navigation">
          <div className="app-shell-nav-group">
            {primaryItems.map(navigationItem)}
          </div>
          <section className="app-shell-nav-section" aria-label="Blob Storage">
            <Text className="app-shell-section-title app-shell-label" size={200}>
              Blob Storage
            </Text>
            {storageItems.map(navigationItem)}
          </section>
          <div className="app-shell-settings">
            {navigationItem(settingsItem)}
          </div>
        </nav>
        <footer className="app-shell-profile">
          <Avatar name="Demo User" size={32} color="neutral" />
          <Text className="app-shell-label" weight="semibold">
            Demo User
          </Text>
        </footer>
      </aside>
      <main
        ref={contentRef}
        id="main-content"
        className="app-shell-content"
        aria-label={page.label}
        tabIndex={-1}
      >
        {children}
      </main>
    </div>
  )
}

export default AppShell
