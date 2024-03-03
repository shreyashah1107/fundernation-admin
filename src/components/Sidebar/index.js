"use client";
import Link from "next/link";
import Image from "next/image";
import sidebarLogo from "/public/images/logo/sidebar-logo.svg";
import sidebarLogoIcon from "/public/images/logo/sidebar-logo-icon.svg";

// React icons used in menu
import { TbLayoutSidebarLeftExpandFilled, TbLayoutSidebarRightExpandFilled } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";
import { RiStackLine } from "react-icons/ri";
import { BiBarChartAlt2, BiSliderAlt } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi2";
import { TbLogout } from "react-icons/tb";

import classNames from "classnames";
import { useState } from "react";
import { usePathname } from "next/navigation";

// Menu links Array
const sidebarItems = [
	{
		name: "Prime opportunities",
		href: "/",
		icon: RxDashboard,
	},
	{
		name: "Investment portfolio",
		href: "/investment-portfolio",
		icon: RiStackLine,
	},
	{
		name: "Investor relations",
		href: "/investor-relations",
		icon: BiBarChartAlt2,
	},
	{
		name: "Personal profile",
		href: "/personal-profile",
		icon: HiOutlineUser,
	},
	{
		name: "Settings",
		href: "/settings",
		icon: BiSliderAlt,
	},
];

export default function Sidebar() {
	const [toggleCollapse, setToggleCollapse] = useState(false);
	const [isCollapsible, setIsCollapsible] = useState(false);

	const isActiveLink = usePathname();

	const wrapperClasses = classNames(
		"fixed left-0 top-0 z-[9999] flex flex-col h-screen overflow-hidden bg-sidebar text-white shadow-sidebar duration-300",
		{
			["w-[300px]"]: !toggleCollapse || isCollapsible,
			["w-[85px]"]: toggleCollapse && !isCollapsible,
		}
	);

	const getNavItemClasses = classNames(
		"group relative flex items-center gap-[20px] py-4 px-4 rounded-sm font-header text-sidebar-link duration-300 ease-in-out hover:bg-sidebar-link-hover focus:bg-sidebar-link-focus"
	);

	const onMouseOver = () => {
		setToggleCollapse(toggleCollapse);
		setIsCollapsible(!isCollapsible);
	};

	const handleSidebarToggle = () => {
		setToggleCollapse(!toggleCollapse);
		document.body.classList.toggle("sidebar-collpased");
	};

	return (
		<aside
			className={wrapperClasses}
			onMouseEnter={onMouseOver}
			onMouseLeave={onMouseOver}
			data-collapse={toggleCollapse}>
			{/* Sidebar Header */}
			<div
				className={classNames(
					"flex items-center gap-2 py-5 mb-5",
					{ "pl-6 pr-4 justify-between": !toggleCollapse || isCollapsible },
					{ "px-2 justify-center": toggleCollapse }
				)}>
				<Link href='/' title='Fundernation'>
					{(!toggleCollapse || isCollapsible) && (
						<Image
							src={sidebarLogo}
							alt='Logo'
							priority
							style={{
								width: "auto",
								height: "40px",
							}}
						/>
					)}

					{toggleCollapse && !isCollapsible && (
						<Image
							src={sidebarLogoIcon}
							alt='Logo'
							priority
							style={{
								width: "auto",
								height: "40px",
							}}
						/>
					)}
				</Link>

				{(!toggleCollapse || isCollapsible) && (
					<button onClick={handleSidebarToggle}>
						<span className='text-sidebar-icon'>
							{!isCollapsible ? (
								<TbLayoutSidebarRightExpandFilled />
							) : (
								<TbLayoutSidebarLeftExpandFilled />
							)}
						</span>
					</button>
				)}
			</div>
			{/* Sidebar Header */}

			<div className='flex flex-col flex-1 overflow-y-auto overflow-x-hidden duration-300 ease-linear'>
				{/* Sidebar Menu */}
				<nav className={classNames("flex flex-1 p-[15px]", { "p-2": toggleCollapse })}>
					<div className='flex flex-col flex-1 justify-between'>
						<ul className='flex flex-col flex-1 gap-1.5'>
							{sidebarItems.map(({ name, href, icon: Icon }) => {
								return (
									<li
										key={name}
										// className={isActiveLink == href ? "active" : ""}
									>
										<Link
											href={href}
											title={name}
											className={`${getNavItemClasses} ${
												isActiveLink == href ? "active bg-sidebar-link-focus" : ""
											}`}>
											<span className='text-sidebar-icon'>
												<Icon />
											</span>
											<span
												className={classNames("sidebar-label whitespace-nowrap", {
													"opacity-0 hidden w-0 leading-[0]":
														toggleCollapse && !isCollapsible,
												})}>
												{name}
											</span>
										</Link>
									</li>
								);
							})}
						</ul>

						<ul className='flex flex-col gap-1.5 mt-1.5'>
							{/* Logout */}
							<li>
								<Link href='#' title='Logout' className={getNavItemClasses}>
									<span className='text-sidebar-icon'>
										<TbLogout />
									</span>
									<span
										className={classNames("sidebar-label whitespace-nowrap", {
											"opacity-0 hidden w-0 leading-[0]": toggleCollapse && !isCollapsible,
										})}>
										Logout
									</span>
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
