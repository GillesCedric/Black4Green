import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Head from 'next/head'

const Header = dynamic(() => import('../src/components/Header'), { suspense: true })
const GoodPractices = dynamic(() => import('../src/components/panier/GoodPractices'), { suspense: true })
const Footer = dynamic(() => import('../src/components/Footer'), { suspense: true })
const Panier: NextPage = () => {

  return <>
    <Head>
      <title>Black 4 Green | Panier</title>
      <meta name="description" content="Design 4 Green Application" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest"></link>
    </Head>
    <Suspense fallback={`Loading...`}>
      <Header />
      <GoodPractices itemsPerPage={21} />
      <Footer />
    </Suspense>
  </>
}

export default Panier
