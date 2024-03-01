import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { LiaUserCircle } from "react-icons/lia";

export default function DropdownUser() {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const trigger = useRef(null);
	const dropdown = useRef(null);

	// close on click outside
	useEffect(() => {
		const clickHandler = ({ target }, MouseEvent) => {
			if (!dropdown.current) return;
			if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
			setDropdownOpen(false);
		};
		document.addEventListener("click", clickHandler);
		return () => document.removeEventListener("click", clickHandler);
	});

	// close if the esc key is pressed
	useEffect(() => {
		const keyHandler = ({ keyCode }, KeyboardEvent) => {
			if (!dropdownOpen || keyCode !== 27) return;
			setDropdownOpen(false);
		};
		document.addEventListener("keydown", keyHandler);
		return () => document.removeEventListener("keydown", keyHandler);
	});

	return (
		<div className='relative'>
			<Link
				ref={trigger}
				onClick={() => setDropdownOpen(!dropdownOpen)}
				className='flex items-center gap-4'
				href='#'>
				<span className='text-[42px]'>
					<LiaUserCircle />
				</span>
			</Link>

			{/* <!-- Dropdown Start --> */}
			<div
				ref={dropdown}
				onFocus={() => setDropdownOpen(true)}
				onBlur={() => setDropdownOpen(false)}
				className={`absolute right-0 mt-4 flex w-[200px] flex-col rounded-sm border border-stroke bg-white shadow-default ${
					dropdownOpen === true ? "block" : "hidden"
				}`}>
				<ul className='flex flex-col'>
					<li>
						<Link
							href='#'
							title='My Profile'
							className='block p-4 duration-300 ease-in-out hover:bg-gray-100'>
							My Profile
						</Link>
					</li>

					<li className='border-t border-stroke'>
						<Link href='#' title='Log Out' className='block p-4 duration-300 ease-in-out hover:bg-gray-100'>
							Log Out
						</Link>
					</li>
				</ul>
			</div>
			{/* <!-- Dropdown End --> */}
		</div>
	);
}
