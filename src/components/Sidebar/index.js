"use client";

// import React, { useEffect, useRef, useState } from "react";
// import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import sidebarLogo from "/public/images/logo/sidebar-logo.svg";
// import SidebarLinkGroup from "./SidebarLinkGroup";

// React icons used in menu
import { PiSquareHalfFill } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { RiStackLine } from "react-icons/ri";
import { BiBarChartAlt2 } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi2";
import { BiSliderAlt } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";

// interface SidebarProps {
// 	sidebarOpen: boolean;
// 	setSidebarOpen: (arg: boolean) => void;
// }

export default function Sidebar() {
	return (
		<aside
			className={`fixed left-0 top-0 z-[9999] flex flex-col w-[300px] h-screen overflow-y-hidden bg-sidebar text-white shadow-sidebar duration-300 ease-linear`}>
			{/* Sidebar Header */}
			<div className='flex items-center justify-between gap-2 pl-6 pr-4 py-5 mb-5'>
				<Link href='/' title='Fundernation'>
					<Image
						src={sidebarLogo}
						alt='Logo'
						priority
						style={{
							width: "auto",
							height: "40px",
						}}
					/>
				</Link>

				<button
					// ref={trigger}
					// onClick={() => setSidebarOpen(!sidebarOpen)}
					// aria-controls="sidebar"
					// aria-expanded={sidebarOpen}
					className=''>
					<span className='text-sidebar-icon'>
						<PiSquareHalfFill />
					</span>
				</button>
			</div>
			{/* Sidebar Header */}

			<div className='flex flex-col flex-1 overflow-y-auto duration-300 ease-linear'>
				{/* Sidebar Menu */}
				<nav className='p-[15px] flex flex-1'>
					<div className='flex flex-col flex-1 justify-between'>
						<ul className='flex flex-col flex-1 gap-1.5'>
							{/* Prime opportunities */}
							<li>
								<Link
									href='/'
									title='Prime opportunities'
									className={`group relative flex items-center gap-[20px] rounded-sm px-5 py-4 font-header text-sidebar-link duration-300 ease-in-out hover:bg-sidebar-link-hover focus:bg-sidebar-link-focus`}>
									<span className='text-sidebar-icon'>
										<RxDashboard />
									</span>
									Prime opportunities
								</Link>
							</li>
							{/* Prime opportunities */}

							{/* Investment portfolio */}
							<li>
								<Link
									href='/'
									title='Investment portfolio'
									className={`group relative flex items-center gap-[20px] rounded-sm px-5 py-4 font-header text-sidebar-link duration-300 ease-in-out hover:bg-sidebar-link-hover focus:bg-sidebar-link-focus`}>
									<span className='text-sidebar-icon'>
										<RiStackLine />
									</span>
									Investment portfolio
								</Link>
							</li>
							{/* Investment portfolio */}

							{/* Investor relations */}
							<li>
								<Link
									href='/'
									title='Investor relations'
									className={`group relative flex items-center gap-[20px] rounded-sm px-5 py-4 font-header text-sidebar-link duration-300 ease-in-out hover:bg-sidebar-link-hover focus:bg-sidebar-link-focus`}>
									<span className='text-sidebar-icon'>
										<BiBarChartAlt2 />
									</span>
									Investor relations
								</Link>
							</li>
							{/* Investor relations */}

							{/* Personal profile */}
							<li>
								<Link
									href='/'
									title='Personal profile'
									className={`group relative flex items-center gap-[20px] rounded-sm px-5 py-4 font-header text-sidebar-link duration-300 ease-in-out hover:bg-sidebar-link-hover focus:bg-sidebar-link-focus`}>
									<span className='text-sidebar-icon'>
										<HiOutlineUser />
									</span>
									Personal profile
								</Link>
							</li>
							{/* Personal profile */}

							{/* Settings */}
							<li>
								<Link
									href='/'
									title='Settings'
									className={`group relative flex items-center gap-[20px] rounded-sm px-5 py-4 font-header text-sidebar-link duration-300 ease-in-out hover:bg-sidebar-link-hover focus:bg-sidebar-link-focus`}>
									<span className='text-sidebar-icon'>
										<BiSliderAlt />
									</span>
									Settings
								</Link>
							</li>
							{/* Settings */}
						</ul>

						<ul className='flex flex-col gap-1.5'>
							{/* Logout */}
							<li>
								<Link
									href='/'
									title='Logout'
									className={`group relative flex items-center gap-[20px] rounded-sm px-5 py-4 font-header text-sidebar-link duration-300 ease-in-out hover:bg-sidebar-link-hover focus:bg-sidebar-link-focus`}>
									<span className='text-sidebar-icon'>
										<TbLogout />
									</span>
									Logout
								</Link>
							</li>
							{/* Logout */}
						</ul>
					</div>
				</nav>
				{/* Sidebar Menu */}
			</div>
		</aside>
	);
}
