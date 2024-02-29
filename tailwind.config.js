/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			body: ['"Univers LT 45"', "sans-serif"],
			header: ['"Univers LT 55"', "sans-serif"],
		},
		extend: {
			colors: {
				white: "#FFFFFF",
				body: "#233357",
				primary: "#233357",
				"sidebar-link-hover": "rgba(255, 255, 255, .05)",
				"sidebar-link-focus": "rgba(255, 255, 255, .1)",
			},
			fontSize: {
				"sidebar-icon": ["22px"],
				"sidebar-link": ["16px", "1.2"],
			},
			backgroundImage: {
				sidebar: "linear-gradient(11deg, #1E2B4A 0%, #233357 100%)",
			},
			boxShadow: {
				sidebar: "6px 2px 9px rgba(0, 0, 0, 0.1)",
			},
		},
	},
	plugins: [],
};
