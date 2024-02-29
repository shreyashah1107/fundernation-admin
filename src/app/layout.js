// If google fonts
// import { Inter } from "next/font/google";
import "@/sass/fonts.scss";
import "@/sass/app.scss";
import DefaultLayout from "@/components/Layout/DefaultLayout";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Fundernation Admin",
	description: "Fundernation Admin",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className=''>
				<DefaultLayout>{children}</DefaultLayout>
			</body>
		</html>
	);
}
