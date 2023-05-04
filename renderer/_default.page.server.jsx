export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname', "redirectTo", "errorInfo"]

import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { PageShell } from './PageShell'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'
import logoUrl from './logo.svg'

async function render(pageContext) {
  const { Page, pageProps } = pageContext
  // This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
  if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'REZ | Request Bin'
  const desc = (documentProps && documentProps.description) || 'The way to inspect any HTTP request. Rez allows you to send requests to a custom endpoint, and analyze data.'

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
      <meta charset="UTF-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="${title}" />
      <meta property="og:url" content="${import.meta.env.VITE_APP_URI}" />
      <meta property="og:site_name" content="${title}" />
      
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
      <link rel="android-chrome" sizes="256x256" href="/android-chrome-256x256.png">
      <link rel="android-chrome" sizes="192x192" href="/android-chrome-192x192.png">
      <meta name="viewport" content="width=device-width">
      <meta name="description" content="${desc}" />
      <meta rel="icon" href="/favicon.ico" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  }
}
