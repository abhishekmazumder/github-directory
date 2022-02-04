import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import { GithubProvider } from './context/github/GithubContext';

function App() {
	return (
		<GithubProvider>
			<Router>
				<div className="flex flex-col justify-between h-screen align-center">
					<Navbar />
					<main className="container mx-auto px-8 pb-10">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/notfound" element={<NotFound />} />
							<Route path="/*" element={<NotFound />} />
						</Routes>
					</main>
					<Footer />
				</div>
			</Router>
		</GithubProvider>
	);
}

export default App;
