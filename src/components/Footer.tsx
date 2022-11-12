import { NextComponentType } from 'next'
import GoodPractices from './index/GoodPractices'


const Footer: NextComponentType = () => {
	return <footer className="bg-gray-900 text-white">
		<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
			<ul>
				<li><h1 className="mb-1 font-semibold">Liens A</h1></li>
				<li>
					<a
						className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
						href="#"
					>
						Ici le lien A
					</a>
				</li>
				<li>
					<a
						className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
						href="#"
					>
						Ici le lien A
					</a>
				</li>
				<li>
					<a
						className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
						href="#"
					>
						Ici le lien A
					</a>
				</li>
			</ul>
			<ul>
				<li><h1 className="mb-1 font-semibold">Liens B</h1></li>
				<li>
					<a
						className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
						href="#"
					>
						Ici le lien A
					</a>
				</li>
				<li>
					<a
						className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
						href="#"
					>
						Ici le lien A
					</a>
				</li>
				<li>
					<a
						className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
						href="#"
					>
						Ici le lien A
					</a>
				</li>
			</ul>
			<ul>
				<li><h1 className="mb-1 font-semibold">Liens C</h1></li>
				<li>
					<a
						className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
						href="#"
					>
						Ici le lien A
					</a>
				</li>
				<li>
					<a
						className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
						href="#"
					>
						Ici le lien A
					</a>
				</li>
				<li>
					<a
						className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
						href="#"
					>
						Ici le lien A
					</a>
				</li>
			</ul>
			<ul>
				<li><h1 className="mb-1 font-semibold">Liens D</h1></li>
				<li>
					<a
						className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
						href="#"
					>
						Ici le lien A
					</a>
				</li>
				<li>
					<a
						className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
						href="#"
					>
						Ici le lien A
					</a>
				</li>
				<li>
					<a
						className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
						href="#"
					>
						Ici le lien A
					</a>
				</li>
			</ul>
		</div>
		<div
			className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
		</div>
		<div className="flex items-center justify-center sm:px-12 px-4 bg-[#ffffff19] py-7">
			<span>© 2022 BLACK 4 GREEN. All rights reserved.</span>
		</div>
	</footer>
}

export default Footer