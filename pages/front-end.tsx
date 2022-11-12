import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Head from 'next/head'
import GoodPracticesModel, { Filters, GoodPractices as GoodPracticesType } from '../src/models/GoodPractices'

const Header = dynamic(() => import('../src/components/Header'), { suspense: true })
const GoodPractices = dynamic(() => import('../src/components/GoodPractices'), { suspense: true })
const Footer = dynamic(() => import('../src/components/Footer'), { suspense: true })
const FrontEnd: NextPage<{ goodPractices: GoodPracticesType[], recommendations: string[] }> = ({ goodPractices, recommendations }) => {

  return <>
    <Head>
      <title>Black 4 Green | Front-End</title>
      <meta name="description" content="Design 4 Green Application" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Suspense fallback={`Loading...`}>
      <Header />
      <GoodPractices recommendations={recommendations} goodPractices={goodPractices} />
      <Footer />
    </Suspense>
  </>
}

export default FrontEnd

export async function getStaticProps() {

  const goodPractices = GoodPracticesModel.getGoodPracticesWithFilter(Filters.family, 'FRONTEND'),
    recommendations = GoodPracticesModel.getRecommendationsWithFilter(Filters.family, 'FRONTEND')

  return {
    props: {
      goodPractices,
      recommendations
    }
  }
}
