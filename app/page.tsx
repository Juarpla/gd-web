import Image from "next/image";

const stats = [
	{ label: "Shows al año", value: "+120" },
	{ label: "Artistas en escena", value: "38" },
	{ label: "Ciudades iluminadas", value: "14" },
];

const services = [
	{
		title: "Dirección coreográfica integral",
		description:
			"Diseñamos puestas escénicas inmersivas para eventos corporativos, televisión y festivales internacionales.",
		image:
			"/services/WhatsApp%20Image%202025-11-27%20at%2022.48.50%20(1).jpeg",
		tags: ["Concepto", "Casting", "Supervisión en vivo"],
	},
	{
		title: "Experiencias para marcas",
		description:
			"Campañas con bailarines, motion capture y contenido social listo para activar comunidades.",
		image: "/services/WhatsApp%20Image%202025-11-27%20at%2022.48.50.jpeg",
		tags: ["Branding", "Contenido", "UGC"],
	},
	{
		title: "Shows educativos y workshops",
		description:
			"Programas intensivos para academias y equipos que buscan refinar técnica, musicalidad y performance.",
		image: "/services/WhatsApp%20Image%202025-11-27%20at%2022.49.48%20(1).jpeg",
		tags: ["Formación", "Mentoría", "Backstage"],
	},
	{
		title: "Producción audiovisual",
		description:
			"Coreos diseñadas para sesiones de video 8K, livestreams y campañas digitales.",
		image: "/services/WhatsApp%20Image%202025-11-27%20at%2022.49.51.jpeg",
		tags: ["Video", "LED stage", "Dirección"],
	},
];

const galleryImages = [
	{
		src: "/galery/WhatsApp%20Image%202025-11-27%20at%2022.48.42.jpeg",
		title: "Backstage Glow",
		location: "Buenos Aires",
		layout: "lg:col-span-2 lg:row-span-2",
	},
	{
		src: "/galery/WhatsApp%20Image%202025-11-27%20at%2022.49.53.jpeg",
		title: "Sincronía",
		location: "Madrid",
		layout: "",
	},
	{
		src: "/galery/WhatsApp%20Image%202025-11-27%20at%2022.49.54.jpeg",
		title: "Golden Frames",
		location: "Santiago",
		layout: "",
	},
	{
		src: "/galery/WhatsApp%20Image%202025-11-27%20at%2022.49.55.jpeg",
		title: "Light Traces",
		location: "Bogotá",
		layout: "",
	},
	{
		src: "/galery/WhatsApp%20Image%202025-11-27%20at%2022.49.56%20(2).jpeg",
		title: "Silhouette Maze",
		location: "CDMX",
		layout: "lg:col-span-2",
	},
	{
		src: "/galery/WhatsApp%20Image%202025-11-27%20at%2022.49.59%20(1).jpeg",
		title: "Elevated",
		location: "Buenos Aires",
		layout: "",
	},
	{
		src: "/galery/WhatsApp%20Image%202025-11-27%20at%2022.50.01%20(2).jpeg",
		title: "Neon Pulse",
		location: "Lima",
		layout: "",
	},
	{
		src: "/galery/WhatsApp%20Image%202025-11-27%20at%2022.50.05%20(2).jpeg",
		title: "Contrast Flow",
		location: "Santo Domingo",
		layout: "lg:row-span-2",
	},
	{
		src: "/galery/WhatsApp%20Image%202025-11-27%20at%2022.50.09%20(4).jpeg",
		title: "Golden Lines",
		location: "Quito",
		layout: "",
	},
	{
		src: "/galery/WhatsApp%20Image%202025-11-28%20at%2000.08.44.jpeg",
		title: "Afterglow",
		location: "Rosario",
		layout: "",
	},
];

const testimonials = [
	{
		quote:
			"Golden Dance elevó nuestra gala anual con una narrativa visual que aún comentan los asistentes.",
		author: "Lucía Ferreyra",
		role: "Directora Creativa, Prisma Corp",
	},
	{
		quote: "El equipo logra un equilibrio impecable entre precisión técnica y emoción pura.",
		author: "Matías Cornejo",
		role: "Productor Ejecutivo, Vibe TV",
	},
	{
		quote:
			"Verlos en vivo es entender lo que significa un storytelling en 360° con danza, luz y tecnología.",
		author: "Anaïs Duval",
		role: "Curadora de Festivales",
	},
];

const heroHighlights = galleryImages.slice(0, 3);

export default function Home() {
	return (
		<div className="bg-night text-cream">
			<main className="mx-auto flex max-w-7xl flex-col gap-24 px-4 py-12 sm:px-6 lg:px-12">
				<section className="hero-grid">
					<div className="space-y-8">
						<div className="flex flex-wrap items-center gap-4">
							<span className="badge">Coreografía inmersiva</span>
							<span className="text-sm uppercase tracking-[0.3em] text-muted">
								Golden Dance Studio
							</span>
						</div>
						<div className="space-y-6">
							<Image
								src="/brandLogo.png"
								alt="Golden Dance logo"
								width={260}
								height={120}
								className="drop-shadow-glow"
								priority
							/>
							<p className="text-lg text-muted md:text-xl">
								Dirección coreográfica, producción audiovisual y experiencias en vivo
								creadas para marcas que quieren mover audiencias.
							</p>
						</div>
						<h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-[56px]">
							Coreografías que mezclan siluetas 3D, luz y narrativa para presentar tu
							próxima gran historia.
						</h1>
						<div className="flex flex-wrap gap-4">
							<a
								href="#contacto"
								className="btn btn--primary"
							>
								Reserva una demo
							</a>
							<a
								href="#galeria"
								className="btn btn--ghost"
							>
								Ver portafolio
							</a>
						</div>
						<div className="grid gap-6 sm:grid-cols-3">
							{stats.map((stat) => (
								<div key={stat.label} className="stat-card">
									<p className="text-3xl font-bold text-gold">{stat.value}</p>
									<p className="text-sm uppercase tracking-widest text-muted">
										{stat.label}
									</p>
								</div>
							))}
						</div>
					</div>
					<div className="hero-scene">
						<div
							className="silhouette-layer silhouette-layer--back"
							aria-hidden
						/>
						<div
							className="silhouette-layer silhouette-layer--mid"
							aria-hidden
						/>
						<div
							className="silhouette-layer silhouette-layer--front"
							aria-hidden
						/>
						<div className="hero-orb hero-orb--one" aria-hidden />
						<div className="hero-orb hero-orb--two" aria-hidden />
						<div className="hero-reel">
							{heroHighlights.map((item) => (
								<figure key={item.src} className="hero-reel__frame">
									<Image
										src={item.src}
										alt={item.title}
										fill
										sizes="(max-width: 1024px) 70vw, 360px"
										className="object-cover"
									/>
									<figcaption>
										<p className="text-sm font-semibold text-white">
											{item.title}
										</p>
										<p className="text-xs uppercase tracking-[0.3em] text-gold">
											{item.location}
										</p>
									</figcaption>
								</figure>
							))}
						</div>
					</div>
				</section>

				<section id="servicios" className="space-y-10">
					<div className="section-heading">
						<p className="eyebrow">Qué hacemos</p>
						<div>
							<h2 className="section-title">Servicios end-to-end</h2>
							<p className="section-subtitle">
								Participamos desde la primera referencia visual hasta el último
								aplauso: narrativa, música, vestuario, cámara y distribución.
							</p>
						</div>
					</div>
					<div className="grid gap-8 md:grid-cols-2">
						{services.map((service) => (
							<article key={service.title} className="service-card">
								<div className="service-media">
									<Image
										src={service.image}
										alt={service.title}
										fill
										sizes="(max-width: 768px) 100vw, 50vw"
										className="object-cover"
									/>
								</div>
								<div className="space-y-4">
									<div>
										<h3 className="text-2xl font-semibold text-white">
											{service.title}
										</h3>
										<p className="text-muted">{service.description}</p>
									</div>
									<div className="flex flex-wrap gap-2">
										{service.tags.map((tag) => (
											<span key={tag} className="tag">
												{tag}
											</span>
										))}
									</div>
								</div>
							</article>
						))}
					</div>
				</section>

				<section id="galeria" className="space-y-10">
					<div className="section-heading">
						<p className="eyebrow">Momentos recientes</p>
						<div>
							<h2 className="section-title">Galería viva</h2>
							<p className="section-subtitle">
								Tomamos casi cada frame detrás de escena para construir confianza con tus
								stakeholders antes de subir al escenario.
							</p>
						</div>
					</div>
					<div className="gallery-grid">
						{galleryImages.map((item) => (
							<figure
								key={item.src}
								className={`gallery-card ${item.layout}`.trim()}
							>
								<Image
									src={item.src}
									alt={`${item.title} - ${item.location}`}
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
									className="object-cover"
								/>
								<figcaption>
									<p>{item.title}</p>
									<span>{item.location}</span>
								</figcaption>
							</figure>
						))}
					</div>
				</section>

				<section id="testimonios" className="space-y-10">
					<div className="section-heading">
						<p className="eyebrow">Confianza</p>
						<div>
							<h2 className="section-title">Productores que bailan con nosotros</h2>
							<p className="section-subtitle">
								Alianzas con casas productoras, marcas lifestyle y festivales que
								buscan historias coreográficas memorables.
							</p>
						</div>
					</div>
					<div className="grid gap-8 md:grid-cols-3">
						{testimonials.map((item) => (
							<article key={item.author} className="testimonial-card">
								<p className="text-lg text-white">“{item.quote}”</p>
								<div>
									<p className="font-semibold text-gold">{item.author}</p>
									<p className="text-sm text-muted">{item.role}</p>
								</div>
							</article>
						))}
					</div>
				</section>

				<section id="redes" className="space-y-10">
					<div className="section-heading">
						<p className="eyebrow">Síguenos</p>
						<div>
							<h2 className="section-title">Conecta con nosotros</h2>
							<p className="section-subtitle">
								Descubre contenido exclusivo, ensayos detrás de escena y las últimas
								actuaciones en nuestras redes sociales.
							</p>
						</div>
					</div>
					<div className="social-media-grid">
						<a
							href="https://www.tiktok.com/@goldendance"
							target="_blank"
							rel="noopener noreferrer"
							className="social-card group"
						>
							<div className="social-icon-wrapper">
								<svg
									className="social-icon"
									fill="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
								</svg>
							</div>
							<div className="social-content">
								<h3 className="social-title">TikTok</h3>
								<p className="social-description">
									Coreografías cortas, trends y momentos backstage
								</p>
								<span className="social-cta">
									Ver videos →
								</span>
							</div>
						</a>
						<a
							href="https://www.instagram.com/goldendance"
							target="_blank"
							rel="noopener noreferrer"
							className="social-card group"
						>
							<div className="social-icon-wrapper">
								<svg
									className="social-icon"
									fill="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
								</svg>
							</div>
							<div className="social-content">
								<h3 className="social-title">Instagram</h3>
								<p className="social-description">
									Galería de shows, reels exclusivos y comunidad
								</p>
								<span className="social-cta">
									Seguir ahora →
								</span>
							</div>
						</a>
					</div>
				</section>

				<section id="contacto" className="cta-panel">
					<div className="space-y-4 text-center">
						<p className="eyebrow">Agenda abierta</p>
						<h2 className="text-3xl font-semibold text-white md:text-4xl">
							Ensayemos tu próximo lanzamiento.
						</h2>
						<p className="text-muted">
							Presentaciones para keynotes, lanzamientos de producto, festivales,
							fashion films y residencias artísticas.
						</p>
					</div>
					<div className="flex flex-col gap-4 sm:flex-row">
						<a
							href="mailto:hello@goldendance.com"
							className="btn btn--primary w-full"
						>
							Escribir al equipo
						</a>
						<a
							href="tel:+5491100000000"
							className="btn btn--ghost w-full"
						>
							Llamar ahora
						</a>
					</div>
				</section>
			</main>
		</div>
	);
}
