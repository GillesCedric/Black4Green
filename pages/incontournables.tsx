import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Head from 'next/head'
import GoodPracticesModel, { Filters, GoodPractices as GoodPracticesType } from '../src/models/GoodPractices'

const Header = dynamic(() => import('../src/components/Header'), { suspense: true })
const GoodPractices = dynamic(() => import('../src/components/incontournables/GoodPractices'), { suspense: true })
const Footer = dynamic(() => import('../src/components/Footer'), { suspense: true })
const Incontournables: NextPage<{ goodPractices: GoodPracticesType[], totalItems: number }> = ({ goodPractices, totalItems }) => {

  return <>
    <Head>
      <title>Black 4 Green | Incontournables</title>
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

export default Incontournables

export async function getStaticProps() {

  const goodPractices = GoodPracticesModel.getGoodPracticesWithFilter(Filters.incontournable, 'INCONTOURNABLE'),
    totalItems = GoodPracticesModel.getGoodPracticesWithFilterSize(Filters.incontournable, 'INCONTOURNABLE')

  return {
    props: {
      goodPractices,
      totalItems
    }
  }
}
