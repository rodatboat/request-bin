export { render }

import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { PageShell } from './PageShell'

// This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
async function render(pageContext) {
  const { Page, pageProps, redirectTo } = pageContext

  if (redirectTo) {
    window.location.href = redirectTo;
    return
  }
  
  if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined')
  hydrateRoot(
    document.getElementById('page-view'),
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
