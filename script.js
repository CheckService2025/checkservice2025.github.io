/**
 * CONFIGURACIÓN DE GALERÍA (ARRAY DE OBJETOS)
 */
const fotosTrabajos = [
    { src: './assets/multimedia/alternadores/alt_1.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/8.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/10.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/11.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/12.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/13.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/18.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/19.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/20.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/21.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/22.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/23.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/24.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/25.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/26.webp', categoria: 'Alternadores' },

    { src: './assets/multimedia/burro/1.webp', categoria: 'Motor de Arranque' },
    { src: './assets/multimedia/burro/2.webp', categoria: 'Motor de Arranque' },
    { src: './assets/multimedia/burro/3.webp', categoria: 'Motor de Arranque' },
    { src: './assets/multimedia/burro/4.webp', categoria: 'Motor de Arranque' },
    { src: './assets/multimedia/burro/5.webp', categoria: 'Motor de Arranque' },
    { src: './assets/multimedia/burro/6.webp', categoria: 'Motor de Arranque' },
    { src: './assets/multimedia/burro/7.webp', categoria: 'Motor de Arranque' },
    { src: './assets/multimedia/burro/9.webp', categoria: 'Motor de Arranque' },
    { src: './assets/multimedia/burro/14.webp', categoria: 'Motor de Arranque' },
    { src: './assets/multimedia/burro/15.webp', categoria: 'Motor de Arranque' },
    { src: './assets/multimedia/burro/16.webp', categoria: 'Motor de Arranque' },
    { src: './assets/multimedia/burro/17.webp', categoria: 'Motor de Arranque' },

    { src: './assets/multimedia/inyeccion/iny_1.webp', categoria: 'Inyeccion Electronica' },
    { src: './assets/multimedia/inyeccion/iny_2.webp', categoria: 'Inyeccion Electronica' },
    { src: './assets/multimedia/inyeccion/iny_3.webp', categoria: 'Inyeccion Electronica' },
    { src: './assets/multimedia/inyeccion/iny_4.webp', categoria: 'Inyeccion Electronica' },
    { src: './assets/multimedia/inyeccion/iny_5.webp', categoria: 'Inyeccion Electronica' },

    { src: './assets/multimedia/electricidad/elec_1.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_2.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_3.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_4.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_5.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_6.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_7.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_8.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_9.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_10.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_11.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_12.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_13.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_14.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_15.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_16.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_17.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_18.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_19.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_20.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_21.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_22.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_23.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_24.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_25.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_26.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_27.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_28.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_29.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_30.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_31.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_32.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_33.webp', categoria: 'Electricidad' },

    { src: './assets/multimedia/electronica/electronica_1.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_2.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_3.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_4.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_5.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_6.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_7.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_8.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_9.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_10.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_11.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_12.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_13.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_14.webp', categoria: 'Electronica' },

    { src: './assets/multimedia/distribucion/dist_1.webp', categoria: 'Distribucion' },
    { src: './assets/multimedia/distribucion/dist_2.webp', categoria: 'Distribucion' },
    { src: './assets/multimedia/distribucion/dist_3.webp', categoria: 'Distribucion' },
    { src: './assets/multimedia/distribucion/dist_4.webp', categoria: 'Distribucion' },
    { src: './assets/multimedia/distribucion/dist_5.webp', categoria: 'Distribucion' },
    { src: './assets/multimedia/distribucion/dist_6.webp', categoria: 'Distribucion' },
    { src: './assets/multimedia/distribucion/dist_7.webp', categoria: 'Distribucion' },
    { src: './assets/multimedia/distribucion/dist_8.webp', categoria: 'Distribucion' },
    { src: './assets/multimedia/distribucion/dist_9.webp', categoria: 'Distribucion' },

    { src: './assets/multimedia/general/grl_1.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_2.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_3.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_4.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_5.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_6.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_7.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_8.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_9.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_10.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_11.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_12.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_13.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_14.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_15.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_16.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_17.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_18.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_19.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_20.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_21.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_22.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_23.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_24.webp', categoria: 'Mecanica General' },

    { src: './assets/multimedia/tapa/tapa_1.webp', categoria: 'Tapa de Cilindro' },
    { src: './assets/multimedia/tapa/tapa_2.webp', categoria: 'Tapa de Cilindro' },
    { src: './assets/multimedia/tapa/tapa_3.webp', categoria: 'Tapa de Cilindro' },
    { src: './assets/multimedia/tapa/tapa_4.webp', categoria: 'Tapa de Cilindro' },
    { src: './assets/multimedia/tapa/tapa_5.webp', categoria: 'Tapa de Cilindro' },
    { src: './assets/multimedia/tapa/tapa_6.webp', categoria: 'Tapa de Cilindro' },
    { src: './assets/multimedia/tapa/tapa_7.webp', categoria: 'Tapa de Cilindro' },
    { src: './assets/multimedia/tapa/tapa_.webp', categoria: 'Tapa de Cilindro' },
    { src: './assets/multimedia/tapa/tapa_9.webp', categoria: 'Tapa de Cilindro' },
    { src: './assets/multimedia/tapa/tapa_10.webp', categoria: 'Tapa de Cilindro' },
    { src: './assets/multimedia/tapa/tapa_11.webp', categoria: 'Tapa de Cilindro' },

    { src: './assets/multimedia/nosotros/nsts_1.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_2.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_3.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_4.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_5.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_6.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_7.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_8.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_9.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_10.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_11.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_12.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_13.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_14.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_15.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_16.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_17.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_18.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_19.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_20.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_21.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_22.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_23.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_24.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_25.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_26.webp', categoria: 'Nosotros' },
];

// Variables globales para el visor (Lightbox)
let albumActual = [];
let indiceActual = 0;

/**
 * NAVEGACIÓN SPA
 */
function navigate(viewId) {
    const views = document.querySelectorAll('.view-container');
    views.forEach(v => v.classList.remove('active'));

    const target = document.getElementById(viewId);
    if (target) {
        target.classList.add('active');
    }

    const links = document.querySelectorAll('.nav-link');
    links.forEach(l => {
        l.classList.remove('active-link');
        if (l.getAttribute('data-target') === viewId) {
            l.classList.add('active-link');
        }
    });

    document.getElementById('nav-links').classList.remove('show');
    window.scrollTo({top: 0, behavior: 'smooth'});

    if (viewId === 'multimedia') {
        renderGallery('todos');
    }
}

/**
 * MENÚ MÓVIL
 */
function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('show');
}

/**
 * LÓGICA DE GALERÍA (Muestra portadas o filtros)
 */
function renderGallery(filtro = 'todos') {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;
    grid.innerHTML = ''; 

    if (filtro === 'todos') {
        // Obtenemos categorías únicas presentes en el array
        const categoriasUnicas = [...new Set(fotosTrabajos.map(f => f.categoria))];
        
        categoriasUnicas.forEach(cat => {
            // Buscamos la primera foto de esa categoría para que sea la portada
            const portada = fotosTrabajos.find(f => f.categoria === cat);
            crearCard(portada, grid, true);
        });
    } else {
        // Si hay un filtro, mostramos todas las de esa categoría
        const filtradas = fotosTrabajos.filter(f => f.categoria === filtro);
        if (filtradas.length === 0) {
            grid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; padding: 20px;">Próximamente fotos de esta categoría.</p>';
        } else {
            filtradas.forEach(foto => crearCard(foto, grid, false));
        }
    }
}

function crearCard(foto, contenedor, esPortada) {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    
    // Si es portada, agregamos el texto de la categoría abajo
    const label = esPortada ? `<div class="category-badge">${foto.categoria.toUpperCase()}</div>` : '';
    
    div.innerHTML = `
        ${label}
        <img src="${foto.src}" alt="Trabajo Check Service" onclick="abrirLightbox('${foto.categoria}', '${foto.src}')">
    `;
    contenedor.appendChild(div);
}

/**
 * LÓGICA DEL VISOR (LIGHTBOX)
 */
function abrirLightbox(categoria, fotoInicial) {
    // Filtramos el álbum que queremos recorrer
    albumActual = fotosTrabajos.filter(f => f.categoria === categoria);
    // Buscamos el índice de la foto donde hicimos clic
    indiceActual = albumActual.findIndex(f => f.src === fotoInicial);
    
    document.getElementById('lightbox-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Bloquear scroll fondo
    actualizarLightbox();
}

function actualizarLightbox() {
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    
    img.src = albumActual[indiceActual].src;
    caption.innerText = `${albumActual[indiceActual].categoria.toUpperCase()} (${indiceActual + 1} / ${albumActual.length})`;
}

function cambiarFoto(dir) {
    indiceActual += dir;
    if (indiceActual < 0) indiceActual = albumActual.length - 1;
    if (indiceActual >= albumActual.length) indiceActual = 0;
    actualizarLightbox();
}

function cerrarLightbox() {
    document.getElementById('lightbox-modal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Habilitar scroll
}

function filterGallery(categoria, btn) {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGallery(categoria);
}

/**
 * ENVÍO DE TURNOS A WHATSAPP
 */
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('b-name').value;
        const tel = document.getElementById('b-tel').value;
        const auto = document.getElementById('b-car').value;
        const servicio = document.getElementById('b-service').value;

        const nroCheckService = "5491151507872"; 

        const msjHeader = `*SOLICITUD DE TURNO - CHECK SERVICE*%0A`;
        const msjBody = `----------------------------------%0A` +
                        `*Cliente:* ${nombre}%0A` +
                        `*Vehículo:* ${auto}%0A` +
                        `*Servicio:* ${servicio}%0A` +
                        `*Contacto:* ${tel}%0A` +
                        `----------------------------------%0A` +
                        `Hola, solicito coordinar un turno para este servicio.`;

        const urlFinal = `https://api.whatsapp.com/send?phone=${nroCheckService}&text=${msjHeader}${msjBody}`;
        window.open(urlFinal, '_blank');
        
        this.reset();
    });
}

// Cerrar con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") cerrarLightbox();
});