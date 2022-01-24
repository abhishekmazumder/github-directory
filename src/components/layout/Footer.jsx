const Footer = () => {
	const footerYear = new Date().getFullYear();

	return (
		<footer className="p-5 font-bold text-gray-500 bg-gray-700 footer footer-center">
			<p>Copyright &copy; {footerYear}. Made With Love.</p>
		</footer>
	);
};

export default Footer;
