import Document, { Head, Html, Main, NextScript } from 'next/document';

import { getCssText } from 'stitches.config';

export default class _Document extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <style
            dangerouslySetInnerHTML={{ __html: getCssText() }}
            id="stitches"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
