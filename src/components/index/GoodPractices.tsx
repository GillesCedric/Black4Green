import React from 'react'
import ReactPaginate from 'react-paginate'
import GoodPracticesModel, { GoodPractices as GoodPracticesType } from '../../models/GoodPractices'
import GoodPractice from './GoodPractice'

interface PropsGoodPractices {
  itemsPerPage: number 
  goodPractices: GoodPracticesType[]
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

  componentDidUpdate(): void {
    const endOffset = this.state.itemOffset + this.props.itemsPerPage,
      currentItems = this.props.goodPractices.slice(this.state.itemOffset, endOffset),
      pageCount = Math.ceil(this.props.goodPractices.length / this.props.itemsPerPage)
    if (JSON.stringify(this.state.currentItems) != JSON.stringify(currentItems)) this.setState({ currentItems: this.props.goodPractices.slice(this.state.itemOffset, endOffset) })
    if (this.state.pageCount != pageCount) this.setState({ pageCount: pageCount })
  }

  componentDidMount = () => {
    const endOffset = this.state.itemOffset + this.props.itemsPerPage
    this.setState({ currentItems: this.props.goodPractices.slice(this.state.itemOffset, endOffset) })
    this.setState({ pageCount: Math.ceil(this.props.goodPractices.length / this.props.itemsPerPage) })
  }

  private readonly handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * this.props.itemsPerPage) % this.props.goodPractices.length
    this.setState({ itemOffset: newOffset })
  }

  render: () => React.ReactNode = () => {
    return <>
      <GoodPractice goodPractices={this.state.currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={this.handlePageClick}
        pageRangeDisplayed={5}
        pageCount={this.state.pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={undefined}
      />
    </>

  }
}