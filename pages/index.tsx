import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Head from 'next/head'
import GoodPracticesModel, { GoodPractices as GoodPracticesType } from '../src/models/GoodPractices'

const Header = dynamic(() => import('../src/components/Header'), { suspense: true })
const GoodPractices = dynamic(() => import('../src/components/index/GoodPractices'), { suspense: true })
const Footer = dynamic(() => import('../src/components/Footer'), { suspense: true })
const Home: NextPage<{ goodPractices: GoodPracticesType[], totalItems: number }> = ({ goodPractices, totalItems }) => {

  return <>
    <Head>
      <title>Black 4 Green</title>
      <meta name="description" content="Design 4 Green Application" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Suspense fallback={`Loading...`}>
      <Header />
      <GoodPractices itemsPerPage={21} goodPractices={goodPractices} totalItems={totalItems} />
      <Footer />
    </Suspense>
  </>
}

export default Home

export async function getStaticProps() {

  const goodPractices = GoodPracticesModel.getGoodPractices(),
    totalItems = GoodPracticesModel.getGoodPracticesSize()

  return {
    props: {
      goodPractices,
      totalItems
    }
  }
}
