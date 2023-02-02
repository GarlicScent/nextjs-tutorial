import Seo from "../components/Seo";

export default function About() {
	return (
		<>
			<Seo title="About" />
			<h1 className="action">about us</h1>
			<style jsx>{`
				h1 {
					color: teal;
				}
				.action {
					text-decoration: underline;
				}
			`}</style>
		</>
	);
}
