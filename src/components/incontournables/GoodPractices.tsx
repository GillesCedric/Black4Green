import React from 'react'
import ReactPaginate from 'react-paginate'
import GoodPracticesModel, { Filters, GoodPractices as GoodPracticesType } from '../../models/GoodPractices'
import GoodPractice from '../GoodPractice'

interface PropsGoodPractices {
  itemsPerPage: number
  goodPractices: GoodPracticesType[]
  totalItems: number
}

interface StateGoodPractices {
  currentItems: GoodPracticesType[]
  pageCount: number
  itemOffset: number
}

export default class GoodPractices extends React.Component<PropsGoodPractices, StateGoodPractices> {
  constructor(props: PropsGoodPractices) {
    super(props)
    this.state = {
      currentItems: [],
      pageCount: 0,
      itemOffset: 0
    }
  }

  componentDidUpdate = () => {
    const endOffset = this.state.itemOffset + this.props.itemsPerPage,
      currentItems = GoodPracticesModel.getGoodPracticesWithFilter(Filters.incontournable, 'INCONTOURNABLE', this.state.itemOffset, endOffset),
      pageCount = Math.ceil(this.props.totalItems / this.props.itemsPerPage)
    if (JSON.stringify(this.state.currentItems) != JSON.stringify(currentItems)) this.setState({ currentItems: currentItems })
    if (this.state.pageCount != pageCount) this.setState({ pageCount: pageCount })
  }

  componentDidMount = () => {
    this.setState({ pageCount: Math.ceil(this.props.totalItems / this.props.itemsPerPage) })
  }

  private readonly handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * this.props.itemsPerPage) % this.props.totalItems
    this.setState({ itemOffset: newOffset })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  render: () => React.ReactNode = () => {
    return <div className='bg-gray-100 w-full sm:pt-40'>
      <GoodPractice goodPractices={this.state.currentItems} family incontournable={false} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="»"
        onPageChange={this.handlePageClick}
        pageRangeDisplayed={5}
        pageCount={this.state.pageCount}
        previousLabel="«"
        renderOnZeroPageCount={undefined}
        containerClassName='flex justify-end rounded-md shadow-sm'
        pageClassName='py-2 px-4 mx-px  mb-12 sm:mt-5 text-sm font-medium text-gray-900 bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 hidden sm:block'
        previousClassName='px-5 py-2 mx-8 mb-12 sm:mt-5 sm:py-1 sm:px-4 sm:mx-px text-lg font-medium text-gray-900 bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700'
        nextClassName='px-5 py-2 mx-8 mb-12 sm:mt-5 sm:py-1 sm:px-4 sm:mx-px sm:mr-28 text-lg font-medium text-gray-900 bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700'
        breakClassName='py-1 px-4 mx-px mb-12 sm:mt-5 text-lg font-medium text-gray-900 bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 hidden sm:block'
        activeClassName='bg-blue-700 text-gray-100'
      />
    </div>

  }
}