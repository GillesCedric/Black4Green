import React from 'react'
import GoodPracticesModel, { GoodPractices as GoodPracticesType } from '../../models/GoodPractices'

interface PropsGoodPractices {
  goodPractices: GoodPracticesType[]
}

export default class GoodPractices extends React.Component<PropsGoodPractices> {

  constructor(props: PropsGoodPractices) {
    super(props)
  }

  render: () => React.ReactNode = () => {
    return <div className="bg-gray-100 py-12 sm:pt-40 w-full min-h-screen gap-10 flex-wrap flex justify-center items-center">
      {
        this.props.goodPractices.map((practice, index) =>
          <div key={index} className="w-80 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <div className="m-2">
              <a role='button' href='#' className="text-white bg-sky-500 px-3 py-1 rounded-md">{practice.Family}</a>
            </div>
            <div className="p-2">
              <h2 className="font-bold text-lg mb-2 ">Titre</h2>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, numquam modi. Consequatur dolores nihil voluptatibus a impedit porro distinctio omnis, explicabo tempora asperiores minima ducimus obcaecati voluptates nesciunt fugit necessitatibus</p>
            </div>
            <div className="m-2 float-right">
              <button role='button' className="text-white bg-sky-500 px-3 py-1 rounded-md hover:bg-purple-700">
                Ajouter au Panier
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mx-2" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx={6} cy={19} r={2}></circle>
                  <circle cx={17} cy={19} r={2}></circle>
                  <path d="M17 17h-11v-14h-2"></path>
                  <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13"></path>
                  <path d="M15 6h6m-3 -3v6"></path>
                </svg>
              </button>
            </div>
          </div>
        )
      }
    </div>
  }
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const goodPractices = GoodPracticesModel.getGoodPractices()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      goodPractices
    }
  }
}