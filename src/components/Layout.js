import NavBar from "./Navbar";

export default function Layout({ children }) {
	return (
		<>
			<NavBar />
			<div>{children}</div>
			<style jsx global>{`
				a {
					font-size: 28px;
					color: white;
					text-decoration: none;
					margin-right: 10px;
				}
			`}</style>
		</>
	);
}
