import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function DefaultLayout({ children }) {
	return (
		<div className='site-wrapper'>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
