import DropdownUser from "./DropdownUser";
import Link from "next/link";
import { GrAnnounce } from "react-icons/gr";

// Menu links Array
const navItems = [
	{
		name: "Investors",
		href: "/",
	},
	{
		name: "Angels",
		href: "/",
	},
	{
		name: "Companies",
		href: "/",
	},
	{
		name: "About us",
		href: "/",
	},
];

export default function Header() {
	return (
		<header className='sticky top-0 z-999 px-10 flex w-full bg-white shadow-sm'>
			<div className='flex flex-grow items-center justify-between px-4 py-4'>
				<div className='flex gap-5'>
					<ul className='flex flex-1 gap-11'>
						{navItems.map(({ name, href }) => {
							return (
								<li key={name}>
									<Link
										href={href}
										title={name}
										className='font-header text-[16px] duration-300 ease-in-out hover:text-secondary'>
										{name}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<div className='flex items-center gap-5'>
					<Link
						href='#'
						title='News'
						className='flex items-center font-header text-[16px] duration-300 ease-in-out hover:text-secondary'>
						<span>
							<GrAnnounce />
						</span>
						<span className='ml-2'>News</span>
					</Link>
					{/* User Area */}
					<DropdownUser />
					{/* User Area */}
				</div>
			</div>
		</header>
	);
}
