document.addEventListener("DOMContentLoaded", (event) => {
	const navbarLinks = document.querySelectorAll(".nav-links a");

	navbarLinks.forEach((link) => {
		link.addEventListener("click", (e) => {
			e.preventDefault();
			const targetId = link.getAttribute("href").substring(1);
			const targetSection = document.getElementById(targetId);

			window.scrollTo({
				top: targetSection.offsetTop - 100, // Adjust for navbar height
				behavior: "smooth",
			});
		});
	});
});
