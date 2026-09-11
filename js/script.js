/* ============================================
   SNACK'S ANGIE'S — JavaScript v2
   Productos dinámicos + interacciones
   ============================================ */


// Galería destacada (imágenes optimizadas vía Unsplash CDN)
const galleryItems = [
    {
        img: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=800&q=75",
        img2x: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=1200&q=75",
        title: "Postres y dulces",
        desc: "Sabores que enamoran en cada bocado.",
        category: "postres",
        waMsg: "Hola, quiero información sobre postres y dulces de Snack's Angie's."
    },
    {
        img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=75",
        img2x: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=75",
        title: "Pasteles especiales",
        desc: "Ideales para cumpleaños y celebraciones.",
        category: "postres",
        waMsg: "Hola, quiero información sobre pasteles de Snack's Angie's."
    },
    {
        img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=75",
        img2x: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=75",
        title: "Snacks para compartir",
        desc: "Botanas dulces y saladas para tu evento.",
        category: "snacks",
        waMsg: "Hola, quiero información sobre snacks de Snack's Angie's."
    },
    {
        img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=75",
        img2x: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=75",
        title: "Mesas para eventos",
        desc: "Mesas dulces, con postres o snacks.",
        category: "mesas",
        waMsg: "Hola, me gustaría cotizar una mesa de eventos de Snack's Angie's."
    },
    {
        img: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=800&q=75",
        img2x: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=1200&q=75",
        title: "Cupcakes y detalles",
        desc: "Presentaciones lindas y deliciosas.",
        category: "detalles",
        waMsg: "Hola, quiero información sobre cupcakes de Snack's Angie's."
    },
    {
        img: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=800&q=75",
        img2x: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=1200&q=75",
        title: "Bolsitas con dulces",
        desc: "El detalle perfecto para tus invitados.",
        category: "detalles",
        waMsg: "Hola, quiero información sobre bolsitas con dulces de Snack's Angie's."
    },
    {
        img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=75",
        img2x: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=75",
        title: "Mesa de snacks",
        desc: "Ideal para fiestas y reuniones.",
        category: "mesas",
        waMsg: "Hola, me gustaría cotizar una Mesa con Snacks de Snack's Angie's."
    },
    {
        img: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=800&q=75",
        img2x: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=1200&q=75",
        title: "Snacks salados",
        desc: "Crujientes y perfectos para compartir.",
        category: "snacks",
        waMsg: "Hola, quiero información sobre los Snacks Salados de Snack's Angie's."
    }
];



const snacks = [
    {
        emoji: "🍿",
        title: "Snacks Dulces",
        desc: "Opciones dulces perfectas para cualquier antojo o celebración.",
        color: "snacks",
        img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=75",
        waMsg: "Hola, quiero información sobre los Snacks Dulces de Snack's Angie's."
    },
    {
        emoji: "🥨",
        title: "Snacks Salados",
        desc: "Botanas saladas crujientes y sabrosas para compartir.",
        color: "snacks",
        img: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=600&q=75",
        waMsg: "Hola, quiero información sobre los Snacks Salados de Snack's Angie's."
    },
    {
        emoji: "🍬",
        title: "Botanas Mixtas",
        desc: "Combinaciones divertidas de dulces y salados para todos.",
        color: "snacks",
        img: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=600&q=75",
        waMsg: "Hola, quiero información sobre las Botanas Mixtas de Snack's Angie's."
    },
    {
        emoji: "🎉",
        title: "Packs para Fiestas",
        desc: "Selecciones especiales pensadas para cumpleaños y eventos.",
        color: "snacks",
        img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=75",
        waMsg: "Hola, quiero información sobre packs de snacks para fiestas."
    }
];

const bolsitas = [
    {
        emoji: "🍬",
        title: "Bolsitas Clásicas",
        desc: "Dulces variados, ideales como detalle para invitados.",
        color: "dulces",
        img: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=600&q=75",
        waMsg: "Hola, quiero información sobre las Bolsitas Clásicas de Snack's Angie's."
    },
    {
        emoji: "🎁",
        title: "Bolsitas Temáticas",
        desc: "Personalizadas según el tema de tu evento.",
        color: "dulces",
        img: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=600&q=75",
        waMsg: "Hola, quiero información sobre las Bolsitas Temáticas de Snack's Angie's."
    },
    {
        emoji: "✨",
        title: "Bolsitas Premium",
        desc: "Selección especial de dulces de calidad.",
        color: "dulces",
        img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=75",
        waMsg: "Hola, quiero información sobre las Bolsitas Premium de Snack's Angie's."
    }
];

const reposteria = [
    {
        emoji: "🎂",
        title: "Pasteles",
        desc: "Pasteles deliciosos para cumpleaños y ocasiones especiales.",
        color: "postres",
        img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=75",
        waMsg: "Hola, quiero información sobre pasteles de Snack's Angie's."
    },
    {
        emoji: "🧁",
        title: "Cupcakes",
        desc: "Cupcakes decorados y personalizados, perfectos para regalar.",
        color: "postres",
        img: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=600&q=75",
        waMsg: "Hola, quiero información sobre cupcakes de Snack's Angie's."
    },
    {
        emoji: "🍰",
        title: "Postres",
        desc: "Variedad de postres individuales y para compartir.",
        color: "postres",
        img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=75",
        waMsg: "Hola, quiero información sobre postres de Snack's Angie's."
    },
    {
        emoji: "🍭",
        title: "Detalles Personalizados",
        desc: "Dulces y detalles hechos a la medida de tu evento.",
        color: "postres",
        img: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=600&q=75",
        waMsg: "Hola, quiero información sobre detalles personalizados de Snack's Angie's."
    }
];

const mesas = [
    {
        emoji: "🍬",
        title: "Mesas Dulces",
        desc: "Llena de colores, dulces y detalles para celebraciones.",
        color: "dulces",
        img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=75",
        waMsg: "Hola, me gustaría cotizar una Mesa Dulce de Snack's Angie's."
    },
    {
        emoji: "🍰",
        title: "Mesas con Postres",
        desc: "Opciones de postres para cumpleaños y eventos especiales.",
        color: "postres",
        img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=700&q=75",
        waMsg: "Hola, me gustaría cotizar una Mesa con Postres de Snack's Angie's."
    },
    {
        emoji: "🍿",
        title: "Mesas con Snacks",
        desc: "Combinación divertida de snacks para compartir.",
        color: "snacks",
        img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=75",
        waMsg: "Hola, me gustaría cotizar una Mesa con Snacks de Snack's Angie's."
    },
    {
        emoji: "🥗",
        title: "Mesas con Salados",
        desc: "Opciones saladas para complementar cualquier celebración.",
        color: "salados",
        img: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=700&q=75",
        waMsg: "Hola, me gustaría cotizar una Mesa con Salados de Snack's Angie's."
    }
];

const arreglos = [
    {
        emoji: "🎂",
        title: "Cumpleaños",
        desc: "Arreglos coloridos y dulces para festejar un cumpleaños.",
        color: "arreglos",
        img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=75",
        waMsg: "Hola, quiero información sobre arreglos con dulces para cumpleaños."
    },
    {
        emoji: "💕",
        title: "Aniversarios",
        desc: "Detalles románticos y deliciosos para celebrar el amor.",
        color: "arreglos",
        img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=75",
        waMsg: "Hola, quiero información sobre arreglos con dulces para aniversarios."
    },
    {
        emoji: "🎁",
        title: "Regalos",
        desc: "El regalo diferente, colorido y delicioso que todos amarán.",
        color: "arreglos",
        img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=75",
        waMsg: "Hola, quiero información sobre arreglos con dulces para regalar."
    },
    {
        emoji: "✨",
        title: "Detalles Especiales",
        desc: "Para cualquier celebración o momento especial.",
        color: "arreglos",
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=75",
        waMsg: "Hola, quiero información sobre arreglos con dulces especiales."
    }
];




// Optimización de imágenes: WebP + srcset responsive
function unsplashUrl(idOrUrl, w, fmt) {
    // Acepta URL completa o id de photo
    let base = idOrUrl;
    if (!/^https?:\/\//.test(idOrUrl)) {
        base = `https://images.unsplash.com/photo-${idOrUrl}`;
    } else {
        base = idOrUrl.split("?")[0];
    }
    const f = fmt || "webp";
    return `${base}?auto=format&fm=${f}&fit=crop&w=${w}&q=70`;
}

function buildSrcset(url, widths, fmt) {
    return widths.map((w) => `${unsplashUrl(url, w, fmt)} ${w}w`).join(", ");
}

function createLazyPicture(opts) {
    // opts: { url, alt, widths, sizes, emoji, className }
    const url = opts.url;
    const widths = opts.widths || [400, 600, 900];
    const sizes = opts.sizes || "(max-width: 768px) 100vw, 400px";
    const alt = opts.alt || "";
    const emoji = opts.emoji || "🍭";
    const wrapClass = opts.className || "card-image has-photo";
    const phW = widths[0];
    const phH = opts.height || Math.round(phW * 0.65);

    const webpSet = buildSrcset(url, widths, "webp");
    const jpgSet = buildSrcset(url, widths, "jpg");
    const fallback = unsplashUrl(url, widths[Math.min(1, widths.length - 1)], "jpg");
    const webpDefault = unsplashUrl(url, widths[Math.min(1, widths.length - 1)], "webp");

    return `<div class="${wrapClass}" data-emoji="${emoji}">
        <div class="img-skeleton" aria-hidden="true"></div>
        <picture>
            <source
                type="image/webp"
                data-srcset="${webpSet}"
                data-sizes="${sizes}">
            <img
                class="lazy-img"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${phW} ${phH}'%3E%3C/svg%3E"
                data-src="${fallback}"
                data-srcset="${jpgSet}"
                data-webp-src="${webpDefault}"
                data-webp-srcset="${webpSet}"
                data-sizes="${sizes}"
                alt="${alt}"
                width="${phW}"
                height="${phH}"
                decoding="async">
        </picture>
    </div>`;
}

function createWaLink(message) {
    return `https://wa.me/524445773025?text=${encodeURIComponent(message)}`;
}

function createCard(item, btnText = "Pedir por WhatsApp") {
    let media;
    if (item.img) {
        media = createLazyPicture({
            url: item.img,
            alt: item.title,
            emoji: item.emoji || "🍭",
            className: "card-image has-photo",
            widths: [400, 600, 900],
            sizes: "(max-width: 768px) 100vw, 400px",
            height: 260
        });
    } else {
        media = `<div class="card-image ${item.color || ""}">${item.emoji || "🍭"}</div>`;
    }

    return `
        <article class="card fade-in">
            ${media}
            <div class="card-body">
                <h3 class="card-title">${item.title}</h3>
                <p class="card-desc">${item.desc}</p>
                <a href="${createWaLink(item.waMsg)}" class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">${btnText}</a>
            </div>
        </article>
    `;
}

function createGalleryItem(item, index) {
    const cat = item.category || "all";
    const mediaInner = createLazyPicture({
        url: item.img,
        alt: item.title,
        emoji: "✨",
        className: "gallery-item-media has-photo",
        widths: [400, 800, 1200],
        sizes: "(max-width: 600px) 100vw, (max-width: 992px) 50vw, 33vw",
        height: 600
    });

    return `
        <article class="gallery-item fade-in" data-category="${cat}" data-index="${index}">
            <button type="button" class="gallery-item-hit" data-gallery-open="${index}" aria-label="Ver ${item.title} en grande">
                ${mediaInner}
                <div class="gallery-item-overlay">
                    <span class="gallery-item-badge">${cat}</span>
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                    <span class="gallery-item-hint">Toca para ampliar</span>
                </div>
            </button>
            <div class="gallery-item-actions">
                <a href="${createWaLink(item.waMsg)}" class="btn btn-whatsapp btn-sm" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">Pedir info</a>
            </div>
        </article>
    `;
}

function createMesaCard(item) {
    let media;
    if (item.img) {
        media = createLazyPicture({
            url: item.img,
            alt: item.title,
            emoji: item.emoji || "🎉",
            className: "mesa-image has-photo",
            widths: [400, 700, 1000],
            sizes: "(max-width: 768px) 100vw, 350px",
            height: 400
        });
    } else {
        media = `<div class="mesa-image ${item.color}">${item.emoji}</div>`;
    }

    return `
        <article class="mesa-card fade-in">
            ${media}
            <div class="mesa-body">
                <h3 class="mesa-title">${item.title}</h3>
                <p class="mesa-desc">${item.desc}</p>
                <a href="${createWaLink(item.waMsg)}" class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">Cotizar</a>
            </div>
        </article>
    `;
}

function renderProducts() {
    const map = [
        ["snacksGrid", snacks, "Pedir por WhatsApp", false],
        ["bolsitasGrid", bolsitas, "Solicitar info", false],
        ["reposteriaGrid", reposteria, "Quiero pedir", false],
        ["mesasGrid", mesas, null, true],
        ["arreglosGrid", arreglos, "Pedir información", false]
    ];

    map.forEach(([id, data, btn, isMesa]) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.innerHTML = isMesa
            ? data.map(createMesaCard).join("")
            : data.map(item => createCard(item, btn)).join("");
    });

    const galleryGrid = document.getElementById("galleryGrid");
    if (galleryGrid && typeof galleryItems !== "undefined") {
        galleryGrid.innerHTML = galleryItems.map((item, i) => createGalleryItem(item, i)).join("");
        initInteractiveGallery();
    }
}

function initMenu() {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        toggle.classList.toggle("active", open);
        toggle.setAttribute("aria-expanded", open);
        document.body.style.overflow = open ? "hidden" : "";
    });

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            toggle.classList.remove("active");
            nav.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
            document.body.style.overflow = "";
        });
    });
}

function initHeaderScroll() {
    const header = document.getElementById("header");
    if (!header) return;
    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 40);
    }, { passive: true });
}


// ========== LAZY LOADING AVANZADO ==========
function loadLazyImage(img) {
    if (!img || img.dataset.loaded === "true") return;

    const src = img.dataset.src;
    const srcset = img.dataset.srcset;
    const sizes = img.dataset.sizes;
    const webpSrc = img.dataset.webpSrc;
    const webpSrcset = img.dataset.webpSrcset;

    if (!src && !webpSrc) return;

    const picture = img.closest("picture");
    const source = picture ? picture.querySelector("source[type='image/webp']") : null;

    // Preferir WebP si el navegador lo soporta
    const supportsWebp = source || (img.dataset.webpSrcset || img.dataset.webpSrc);
    const useWebp = !!(supportsWebp && webpSrcset);

    const preloader = new Image();
    if (sizes) preloader.sizes = sizes;
    if (useWebp && webpSrcset) {
        preloader.srcset = webpSrcset;
    } else if (srcset) {
        preloader.srcset = srcset;
    }

    const finishOk = () => {
        if (source && webpSrcset) {
            source.srcset = webpSrcset;
            if (sizes) source.sizes = sizes;
        }
        if (srcset) img.srcset = srcset;
        if (sizes) img.sizes = sizes;
        img.src = src || webpSrc;
        img.classList.add("is-loaded");
        img.dataset.loaded = "true";

        // Contenedor puede ser picture parent (.has-photo)
        const wrap = img.closest(".has-photo") || img.parentElement;
        const skeleton = wrap && wrap.querySelector(".img-skeleton");
        if (skeleton) {
            skeleton.classList.add("is-hidden");
            setTimeout(() => skeleton.remove(), 400);
        }
    };

    const finishErr = () => {
        img.classList.add("is-error");
        img.dataset.loaded = "true";
        const wrap = img.closest(".has-photo") || img.parentElement;
        const skeleton = wrap && wrap.querySelector(".img-skeleton");
        if (skeleton) {
            skeleton.classList.add("is-hidden");
            setTimeout(() => skeleton.remove(), 300);
        }
        if (wrap) {
            wrap.classList.add("img-failed");
            const emoji = wrap.getAttribute("data-emoji");
            if (emoji && !wrap.querySelector(".img-fallback-emoji")) {
                const span = document.createElement("span");
                span.className = "img-fallback-emoji";
                span.textContent = emoji;
                wrap.appendChild(span);
            }
        }
        img.alt = (img.alt || "Producto") + " (imagen no disponible)";
    };

    preloader.onload = finishOk;
    preloader.onerror = () => {
        // Si falló WebP, intentar JPEG
        if (useWebp && src) {
            const fallback = new Image();
            if (srcset) fallback.srcset = srcset;
            if (sizes) fallback.sizes = sizes;
            fallback.onload = finishOk;
            fallback.onerror = finishErr;
            fallback.src = src;
            return;
        }
        finishErr();
    };

    preloader.src = useWebp && webpSrc ? webpSrc : src;
}

function initAdvancedLazyLoad() {
    const images = document.querySelectorAll("img.lazy-img[data-src]");
    if (!images.length) return;

    // Native lazy as progressive enhancement hint (IO is primary)
    if ("loading" in HTMLImageElement.prototype) {
        // still use IO for skeletons + fade, but can mark
    }

    if (!("IntersectionObserver" in window)) {
        // Fallback: cargar todo
        images.forEach(loadLazyImage);
        return;
    }

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const img = entry.target;
                loadLazyImage(img);
                obs.unobserve(img);
            });
        },
        {
            root: null,
            rootMargin: "200px 0px", // precarga antes de entrar al viewport
            threshold: 0.01
        }
    );

    images.forEach((img) => observer.observe(img));

    // Banner hero de galería ya usa loading=eager; no tocarlo
}

function initScrollAnimations() {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add("visible");
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );
    elements.forEach(el => observer.observe(el));
}

function initContactForm() {
    const form = document.getElementById("contactoForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const servicio = document.getElementById("servicio").value;
        const fecha = document.getElementById("fecha").value;
        const mensaje = document.getElementById("mensaje").value.trim();

        let text = `Hola, Snack's Angie's 👋\n\n`;
        text += `*Nombre:* ${nombre}\n`;
        text += `*Teléfono:* ${telefono}\n`;
        text += `*Servicio:* ${servicio}\n`;
        if (fecha) text += `*Fecha del evento:* ${fecha}\n`;
        text += `\n*Mensaje:*\n${mensaje}`;

        window.open(createWaLink(text), "_blank");
    });
}

function setYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
}

function initActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 120) {
                current = section.getAttribute("id");
            }
        });
        links.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
        });
    }, { passive: true });
}


// ========== GALERÍA INTERACTIVA ==========
let galleryFilter = "all";
let lightboxIndex = 0;

function getVisibleGalleryIndexes() {
    return galleryItems
        .map((item, i) => ({ item, i }))
        .filter(({ item }) => galleryFilter === "all" || item.category === galleryFilter)
        .map(({ i }) => i);
}

function applyGalleryFilter(filter) {
    galleryFilter = filter || "all";
    const items = document.querySelectorAll(".gallery-item");
    items.forEach((el) => {
        const cat = el.getAttribute("data-category");
        const show = galleryFilter === "all" || cat === galleryFilter;
        el.classList.toggle("is-hidden", !show);
        el.setAttribute("aria-hidden", show ? "false" : "true");
    });

    document.querySelectorAll(".gallery-filter").forEach((btn) => {
        const active = btn.getAttribute("data-filter") === galleryFilter;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-selected", active ? "true" : "false");
    });
}

function openLightbox(index) {
    const item = galleryItems[index];
    if (!item) return;
    lightboxIndex = index;

    const box = document.getElementById("lightbox");
    const img = document.getElementById("lightboxImg");
    const title = document.getElementById("lightboxTitle");
    const desc = document.getElementById("lightboxDesc");
    const wa = document.getElementById("lightboxWa");

    if (!box || !img) return;

    img.src = unsplashUrl(item.img2x || item.img, 1200, "webp");
    img.onerror = () => { img.src = unsplashUrl(item.img2x || item.img, 1200, "jpg"); };
    img.alt = item.title;
    title.textContent = item.title;
    desc.textContent = item.desc;
    wa.href = createWaLink(item.waMsg);

    box.hidden = false;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => box.classList.add("is-open"));
}

function closeLightbox() {
    const box = document.getElementById("lightbox");
    if (!box) return;
    box.classList.remove("is-open");
    setTimeout(() => {
        box.hidden = true;
        document.body.style.overflow = "";
        const img = document.getElementById("lightboxImg");
        if (img) img.src = "";
    }, 220);
}

function stepLightbox(dir) {
    const visible = getVisibleGalleryIndexes();
    if (!visible.length) return;
    let pos = visible.indexOf(lightboxIndex);
    if (pos === -1) pos = 0;
    pos = (pos + dir + visible.length) % visible.length;
    openLightbox(visible[pos]);
}

function initInteractiveGallery() {
    const filters = document.getElementById("galleryFilters");
    if (filters) {
        filters.addEventListener("click", (e) => {
            const btn = e.target.closest(".gallery-filter");
            if (!btn) return;
            applyGalleryFilter(btn.getAttribute("data-filter"));
        });
    }

    const grid = document.getElementById("galleryGrid");
    if (grid) {
        grid.addEventListener("click", (e) => {
            const openBtn = e.target.closest("[data-gallery-open]");
            if (!openBtn) return;
            const index = parseInt(openBtn.getAttribute("data-gallery-open"), 10);
            if (!Number.isNaN(index)) openLightbox(index);
        });
    }

    const box = document.getElementById("lightbox");
    if (box) {
        box.addEventListener("click", (e) => {
            if (e.target.closest("[data-lightbox-close]")) closeLightbox();
        });
        const prev = document.getElementById("lightboxPrev");
        const next = document.getElementById("lightboxNext");
        if (prev) prev.addEventListener("click", (e) => { e.stopPropagation(); stepLightbox(-1); });
        if (next) next.addEventListener("click", (e) => { e.stopPropagation(); stepLightbox(1); });
    }

    document.addEventListener("keydown", (e) => {
        const box = document.getElementById("lightbox");
        if (!box || box.hidden) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") stepLightbox(-1);
        if (e.key === "ArrowRight") stepLightbox(1);
    });

    // Swipe simple en móvil
    let touchX = null;
    if (box) {
        box.addEventListener("touchstart", (e) => {
            touchX = e.changedTouches[0].screenX;
        }, { passive: true });
        box.addEventListener("touchend", (e) => {
            if (touchX === null) return;
            const dx = e.changedTouches[0].screenX - touchX;
            touchX = null;
            if (Math.abs(dx) < 50) return;
            stepLightbox(dx > 0 ? -1 : 1);
        }, { passive: true });
    }
}



// Microinteracción: posición del brillo en botones
function initButtonShine() {
    document.addEventListener("pointermove", (e) => {
        const btn = e.target.closest(".btn");
        if (!btn) return;
        const rect = btn.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        btn.style.setProperty("--x", x + "%");
        btn.style.setProperty("--y", y + "%");
    }, { passive: true });
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    initMenu();
    initHeaderScroll();
    initContactForm();
    setYear();
    initActiveNav();
    initAdvancedLazyLoad();
    initButtonShine();
    setTimeout(initScrollAnimations, 80);
});
