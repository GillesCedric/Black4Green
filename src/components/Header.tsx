import Link from 'next/link'
import React from 'react'

export default class Header extends React.Component<{}, { isOpen: boolean }> {

	constructor(props: {}) {
		super(props)
		this.state = {
			isOpen: false
		}
	}

	render: () => React.ReactNode = () => {
		return <header className='z-10 xl:fixed xl:w-full bg-gray-800 xl:flex xl:justify-between xl:items-center xl:px-4 xl:py-3'>
			<div className="flex items-center justify-between px-4 py-3 xl:p-0">
				<div className='text-white'>
					<Link href='/'>
						BLACK 4 GREEN
					</Link>
				</div>
				<div className='xl:hidden'>
					<button name='menu' type="button" onClick={() => this.setState({ isOpen: !this.state.isOpen })} className='block text-gray-500 hover:text-white focus:outline-none'>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							{
								!this.state.isOpen && <>
									<line x1={4} y1={6} x2={20} y2={6}></line>
									<line x1={4} y1={12} x2={20} y2={12}></line>
									<line x1={4} y1={18} x2={20} y2={18}></line>
								</>
							}
							{
								this.state.isOpen && <>
									<line x1={18} y1={6} x2={6} y2={18}></line>
									<line x1={6} y1={6} x2={18} y2={18}></line>
								</>
							}
						</svg>
					</button>
				</div>
			</div >
			<div className={`px-3 pt-2 pb-4 ${this.state.isOpen ? 'block' : 'hidden'} xl:flex`}>
				<Link href="strategie"><span className='block text-white text-sm font-semibold rounded px-2 py-1 hover:bg-gray-700 cursor-pointer'>STATEGIE</span></Link>
				<Link href="specifications" className='block text-white text-sm font-semibold rounded px-2 py-1 mt-1 hover:bg-gray-700 xl:mt-0 xl:ml-2'><span className='block text-white text-sm font-semibold rounded px-2 py-1 hover:bg-gray-700 cursor-pointer'>SPECIFICATIONS</span></Link>
				<Link href="ux-ui" className='block text-white text-sm font-semibold rounded px-2 py-1 mt-1 hover:bg-gray-700 xl:mt-0 xl:ml-2'><span className='block text-white text-sm font-semibold rounded px-2 py-1 hover:bg-gray-700 cursor-pointer'>UX / UI</span></Link>
				<Link href="contenus" className='block text-white text-sm font-semibold rounded px-2 py-1 mt-1 hover:bg-gray-700 xl:mt-0 xl:ml-2'><span className='block text-white text-sm font-semibold rounded px-2 py-1 hover:bg-gray-700 cursor-pointer'>CONTENUS</span></Link>
				<Link href="front-end" className='block text-white text-sm font-semibold rounded px-2 py-1 mt-1 hover:bg-gray-700 xl:mt-0 xl:ml-2'><span className='block text-white text-sm font-semibold rounded px-2 py-1 hover:bg-gray-700 cursor-pointer'>FRONT END</span></Link>
				<Link href="architecture" className='block text-white text-sm font-semibold rounded px-2 py-1 mt-1 hover:bg-gray-700 xl:mt-0 xl:ml-2'><span className='block text-white text-sm font-semibold rounded px-2 py-1 hover:bg-gray-700 cursor-pointer'>ARCHITECTURE</span></Link>
				<Link href="hebergement" className='block text-white text-sm font-semibold rounded px-2 py-1 mt-1 hover:bg-gray-700 xl:mt-0 xl:ml-2'><span className='block text-white text-sm font-semibold rounded px-2 py-1 hover:bg-gray-700 cursor-pointer'>HEBERGEMENT</span></Link>
				<Link href="back-end" className='block text-white text-sm font-semibold rounded px-2 py-1 mt-1 hover:bg-gray-700 xl:mt-0 xl:ml-2'><span className='block text-white text-sm font-semibold rounded px-2 py-1 hover:bg-gray-700 cursor-pointer'>BACK END</span></Link>
				<Link href="incontournables" className='block text-white text-sm font-semibold rounded px-2 py-1 mt-1 hover:bg-gray-700 xl:mt-0 xl:ml-2'><span className='block text-white text-sm font-semibold rounded px-2 py-1 hover:bg-gray-700 cursor-pointer'>INCONTOURNABLES</span></Link>
				<Link href="panier">
					<div className='block text-white text-sm font-semibold rounded px-2 py-1 mt-1 hover:bg-gray-700 xl:mt-0 xl:ml-2 cursor-pointer'>
					<span className='pr-1 text-sm '>PANIER</span>
					<svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<circle cx={6} cy={19} r={2}></circle>
						<circle cx={17} cy={19} r={2}></circle>
						<path d="M17 17h-11v-14h-2"></path>
						<path d="M6 5l14 1l-1 7h-13"></path>
					</svg>
					</div>
				</Link>
			</div>
		</header>
	}

}