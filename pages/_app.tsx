import { AppProps } from 'next/app'
import Layout from './components/layout/layout'

import '../styles/global.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
