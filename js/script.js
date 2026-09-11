/* ============================================
   SNACK'S ANGIE'S — JavaScript v2
   Productos dinámicos + interacciones
   ============================================ */

const snacks = [
    {
        emoji: "🍿",
        title: "Snacks Dulces",
        desc: "Opciones dulces perfectas para cualquier antojo o celebración.",
        color: "snacks",
        waMsg: "Hola, quiero información sobre los Snacks Dulces de Snack's Angie's."
    },
    {
        emoji: "🥨",
        title: "Snacks Salados",
        desc: "Botanas saladas crujientes y sabrosas para compartir.",
        color: "snacks",
        waMsg: "Hola, quiero información sobre los Snacks Salados de Snack's Angie's."
    },
    {
        emoji: "🍬",
        title: "Botanas Mixtas",
        desc: "Combinaciones divertidas de dulces y salados para todos.",
        color: "snacks",
        waMsg: "Hola, quiero información sobre las Botanas Mixtas de Snack's Angie's."
    },
    {
        emoji: "🎉",
        title: "Packs para Fiestas",
        desc: "Selecciones especiales pensadas para cumpleaños y eventos.",
        color: "snacks",
        waMsg: "Hola, quiero información sobre packs de snacks para fiestas."
    }
];

const bolsitas = [
    {
        emoji: "🍬",
        title: "Bolsitas Clásicas",
        desc: "Dulces variados, ideales como detalle para invitados.",
        color: "dulces",
        waMsg: "Hola, quiero información sobre las Bolsitas Clásicas de Snack's Angie's."
    },
    {
        emoji: "🎁",
        title: "Bolsitas Temáticas",
        desc: "Personalizadas según el tema de tu evento.",
        color: "dulces",
        waMsg: "Hola, quiero información sobre las Bolsitas Temáticas de Snack's Angie's."
    },
    {
        emoji: "✨",
        title: "Bolsitas Premium",
        desc: "Selección especial de dulces de calidad.",
        color: "dulces",
        waMsg: "Hola, quiero información sobre las Bolsitas Premium de Snack's Angie's."
    }
];

const reposteria = [
    {
        emoji: "🎂",
        title: "Pasteles",
        desc: "Pasteles deliciosos para cumpleaños y ocasiones especiales.",
        color: "postres",
        waMsg: "Hola, quiero información sobre pasteles de Snack's Angie's."
    },
    {
        emoji: "🧁",
        title: "Cupcakes",
        desc: "Cupcakes decorados y personalizados, perfectos para regalar.",
        color: "postres",
        waMsg: "Hola, quiero información sobre cupcakes de Snack's Angie's."
    },
    {
        emoji: "🍰",
        title: "Postres",
        desc: "Variedad de postres individuales y para compartir.",
        color: "postres",
        waMsg: "Hola, quiero información sobre postres de Snack's Angie's."
    },
    {
        emoji: "🍭",
        title: "Detalles Personalizados",
        desc: "Dulces y detalles hechos a la medida de tu evento.",
        color: "postres",
        waMsg: "Hola, quiero información sobre detalles personalizados de Snack's Angie's."
    }
];

const mesas = [
    {
        emoji: "🍬",
        title: "Mesas Dulces",
        desc: "Llena de colores, dulces y detalles para celebraciones.",
        color: "dulces",
        waMsg: "Hola, me gustaría cotizar una Mesa Dulce de Snack's Angie's."
    },
    {
        emoji: "🍰",
        title: "Mesas con Postres",
        desc: "Opciones de postres para cumpleaños y eventos especiales.",
        color: "postres",
        waMsg: "Hola, me gustaría cotizar una Mesa con Postres de Snack's Angie's."
    },
    {
        emoji: "🍿",
        title: "Mesas con Snacks",
        desc: "Combinación divertida de snacks para compartir.",
        color: "snacks",
        waMsg: "Hola, me gustaría cotizar una Mesa con Snacks de Snack's Angie's."
    },
    {
        emoji: "🥗",
        title: "Mesas con Salados",
        desc: "Opciones saladas para complementar cualquier celebración.",
        color: "salados",
        waMsg: "Hola, me gustaría cotizar una Mesa con Salados de Snack's Angie's."
    }
];

const arreglos = [
    {
        emoji: "🎂",
        title: "Cumpleaños",
        desc: "Arreglos coloridos y dulces para festejar un cumpleaños.",
        color: "arreglos",
        waMsg: "Hola, quiero información sobre arreglos con dulces para cumpleaños."
    },
    {
        emoji: "💕",
        title: "Aniversarios",
        desc: "Detalles románticos y deliciosos para celebrar el amor.",
        color: "arreglos",
        waMsg: "Hola, quiero información sobre arreglos con dulces para aniversarios."
    },
    {
        emoji: "🎁",
        title: "Regalos",
        desc: "El regalo diferente, colorido y delicioso que todos amarán.",
        color: "arreglos",
        waMsg: "Hola, quiero información sobre arreglos con dulces para regalar."
    },
    {
        emoji: "✨",
        title: "Detalles Especiales",
        desc: "Para cualquier celebración o momento especial.",
        color: "arreglos",
        waMsg: "Hola, quiero información sobre arreglos con dulces especiales."
    }
];

function createWaLink(message) {
    return `https://wa.me/524445773025?text=${encodeURIComponent(message)}`;
}

function createCard(item, btnText = "Pedir por WhatsApp") {
    return `
        <article class="card fade-in">
            <div class="card-image ${item.color}">${item.emoji}</div>
            <div class="card-body">
                <h3 class="card-title">${item.title}</h3>
                <p class="card-desc">${item.desc}</p>
                <a href="${createWaLink(item.waMsg)}" class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">${btnText}</a>
            </div>
        </article>
    `;
}

function createMesaCard(item) {
    return `
        <article class="mesa-card fade-in">
            <div class="mesa-image ${item.color}">${item.emoji}</div>
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

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    initMenu();
    initHeaderScroll();
    initContactForm();
    setYear();
    initActiveNav();
    setTimeout(initScrollAnimations, 80);
});
