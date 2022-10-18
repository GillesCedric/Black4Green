import { NextComponentType } from 'next'


const Header: NextComponentType = () => {
	return <header className="relative">
		<nav className="fixed shadow-md w-full flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-2">
			<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
				<div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
					<a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase" href="/">
						Black 4 Green
					</a>
					<button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
						<span className="block relative w-6 h-px rounded-sm ">cezccc</span>
						<span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
						<span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
					</button>
				</div>
				<div className="lg:flex flex-grow items-center" id="example-navbar-warning">
					<ul className="flex flex-col lg:flex-row list-none ml-auto">
						<li className="nav-item">
							<a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75" href="cart">
								<svg xmlns="http://www.w3.org/2000/svg" className="" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<circle cx={6} cy={19} r={2}></circle>
									<circle cx={17} cy={19} r={2}></circle>
									<path d="M17 17h-11v-14h-2"></path>
									<path d="M6 5l14 1l-1 7h-13"></path>
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header >
}

export default Header