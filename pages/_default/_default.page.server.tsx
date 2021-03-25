import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { html } from 'vite-plugin-ssr';

import logoUrl from '../../components/atoms/logo.svg';
import { ContextProps, PageProps, ReactComponent } from './types';

export { render };

type Props = {
  Page: ReactComponent;
  pageProps: PageProps;
  contextProps: ContextProps;
};

function render({ Page, pageProps, contextProps }: Props) {
  const { url } = contextProps;
  const pageHtml = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <Page {...pageProps} />
    </StaticRouter>,
  );

  return html`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8"/>
      <link rel="icon" href="${logoUrl}"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Vite App</title>
  </head>
  <body>
  <div id="page-view">${html.dangerouslySetHtml(pageHtml)}</div>
  </body>
  </html>`;
}
