"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default function DefaultLayout({ children }) {
	return (
		<div className='site-wrapper'>
			{/* Sidebar */}
			<Sidebar />
			{/* Sidebar */}

			{/* Content Area */}
			<div
				className='relative flex flex-col h-screen main-content-wrapper'
				style={{ transition: "margin 300ms ease-out" }}>
				{/* Header */}
				<Header />
				{/* Header */}

				{/* Main Content */}
				<main className='flex-1 p-10'>{children}</main>
				{/* Main Content */}

				{/* Footer */}
				<Footer />
				{/* Footer */}
			</div>
			{/* Content Area */}
		</div>
	);
}
