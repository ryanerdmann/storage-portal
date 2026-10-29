import {
  Button,
  Link,
  Menu,
  MenuItemLink,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Text,
  Title1,
} from '@fluentui/react-components'
import {
  BookOpenRegular,
  DocumentFolderColor,
  GridDotsRegular,
  GridFilled,
} from '@fluentui/react-icons'
import './Landing.css'

const docsUrl = 'https://learn.microsoft.com/azure/storage/'

function Landing() {
  return (
    <div className="landing-page">
      <Link className="landing-skip-link" href="#landing-content" onClick={(event) => {
        event.preventDefault()
        document.getElementById('landing-content')?.focus()
      }}>
        Skip to content
      </Link>
      <header className="landing-header">
        <div className="landing-header-main">
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <Button appearance="subtle" icon={<GridDotsRegular />} aria-label="Open app menu" />
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItemLink href="#dashboard">Storage portal</MenuItemLink>
                <MenuItemLink href={docsUrl}>Documentation</MenuItemLink>
              </MenuList>
            </MenuPopover>
          </Menu>
          <Button as="a" appearance="transparent" href="#" icon={<DocumentFolderColor />} aria-label="Azure Storage home">
            Azure Storage
          </Button>
        </div>
        <nav className="landing-nav" aria-label="Main navigation">
          <Button as="a" appearance="outline" href="https://azure.microsoft.com/free/">
            Sign Up
          </Button>
          <Button as="a" appearance="primary" icon={<GridFilled />} href="https://portal.azure.com/">
            Sign In
          </Button>
        </nav>
      </header>

      <main id="landing-content" className="landing-main" tabIndex={-1}>
        <section className="landing-hero" aria-labelledby="landing-title">
          <div className="landing-title-row">
            <DocumentFolderColor className="landing-product-icon" aria-hidden="true" />
            <Title1 as="h1" id="landing-title" className="landing-title">Azure Storage</Title1>
          </div>
          <Text size={400} className="landing-subtitle">
            Intelligent, versioned, and secure storage for every workload.
          </Text>
          <div className="landing-actions">
            <Button as="a" appearance="primary" size="large" icon={<GridFilled />} href="#dashboard">
              Get Started
            </Button>
            <Button as="a" appearance="outline" size="large" icon={<BookOpenRegular />} href={docsUrl}>
              View Docs
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Landing
