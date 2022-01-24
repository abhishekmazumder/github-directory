import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
	return (
		<nav className="mb-12 shadow-lg navbar bg-neutral text-neutral-content">
			<div className="container px-4 mx-auto">
				{/* Navbar Logo & Title */}
				<div className="flex-none px-2">
					<FaGithub className="inline mr-3 text-3xl" />
					<Link to="/" className="text-lg font-bold align-middle">
						{title}
					</Link>
				</div>
				{/* NavItems */}
				<div className="flex-1 px-2 mx-2">
					<div className="flex justify-end">
						<Link to="/" className="btn rounded-btn btn-ghost btn-sm">
							Home
						</Link>
						<Link to="/about" className="btn rounded-btn btn-ghost btn-sm">
							About
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

Navbar.defaultProps = {
	title: 'GitHub-Directory',
};

Navbar.propTypes = {
	title: PropTypes.string,
};

export default Navbar;
