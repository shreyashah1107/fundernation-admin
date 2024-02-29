import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default function DefaultLayout({ children }) {
	return (
		<div className='site-wrapper'>
			{/* Sidebar */}
			<Sidebar />
			{/* Sidebar */}

			{/* Header */}
			<Header />
			{/* Header */}

			<main>{children}</main>

			{/* Footer */}
			<Footer />
			{/* Footer */}
		</div>
	);
}
