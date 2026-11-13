const framesData = [
  {
    id: "01",
    frameClass: "frame-01",
    frameName: "LÁSER CONIC ORBITAL",
    isRealPhoto: true,
    fileName: "foto-01-ensamble-pinza.jpeg",
    title: "Ensamble Mecánico de Pinza y Antebrazo Impreso en 3D",
    description: "Vista general del efector final (gripper) articulado en PLA plateado sostenido junto a la base cilíndrica del brazo robótico. Se observan los micro-servomotores instalados, cables Dupont y la guía en pantalla del proyecto con Arduino UNO.",
    tags: ["Impresión 3D", "Gripper 2-Dedos", "Micro Servos", "Arduino UNO"]
  },
  {
    id: "02",
    frameClass: "frame-02",
    frameName: "ESCÁNER BIOMÉTRICO HUD",
    isRealPhoto: true,
    fileName: "foto-02-detalle-servos.jpeg",
    title: "Detalle de Transmisión de Muñeca y Cableado Interno",
    description: "Primer plano de la articulación de muñeca y el antebrazo. Se aprecia el engranaje dentado de la pinza para mayor agarre, la integración del servomotor en la carcasa y el enrutamiento de cables hacia la base giratoria.",
    tags: ["Cinemática", "Engranajes 3D", "Enrutamiento", "Torre Base"]
  },
  {
    id: "03",
    frameClass: "frame-03",
    frameName: "DOBLE ANILLO ROTATIVO",
    isRealPhoto: true,
    fileName: "foto-03-arduino-base.jpeg",
    title: "Montaje de Placa Arduino UNO en Base Estructural",
    description: "Vista cenital del interior de la base impresa en 3D con cuatro soportes radiales de estabilidad. La placa Arduino UNO R3 se encuentra fijada mediante tornillería metálica lista para recibir la etapa de potencia.",
    tags: ["Arduino UNO R3", "Chasis 3D", "Soportes CAD", "Tornillería M3"]
  },
  {
    id: "04",
    frameClass: "frame-04",
    frameName: "RETÍCULA MILITAR TÁCTICA",
    isRealPhoto: true,
    fileName: "foto-04-shield-pwm.jpeg",
    title: "Integración de Shield PCA9685 PWM de 16 Canales",
    description: "Presentación del módulo controlador de servos de 16 canales y 12 bits (PCA9685) antes de acoplarse sobre el Arduino UNO, con conector jack de alimentación independiente y cableado de potencia.",
    tags: ["Shield PWM 16-Ch", "PCA9685", "Alimentación Externa", "I2C"]
  },
  {
    id: "05",
    frameClass: "frame-05",
    frameName: "TELEMETRÍA DE PLASMA",
    isRealPhoto: true,
    fileName: "foto-05-interior-chasis.jpeg",
    title: "Preparación de Componentes y Subconjuntos Electrónicos",
    description: "Inspección de la cavidad interna de la base con el microcontrolador ya atornillado, rodeado de servomotores embalados, conector de carga DC y herramientas de precisión.",
    tags: ["Subconjuntos", "Controlador", "Estación Maker", "Hardware"]
  },
  {
    id: "06",
    frameClass: "frame-06",
    frameName: "SERVO PULSE CHASIS",
    isRealPhoto: true,
    fileName: "foto-06-cableado-servos.jpeg",
    title: "Banco de Pruebas de 6 Servomotores (MG996R + MG90S)",
    description: "Conexión simultánea de los 6 grados de libertad al Shield PWM: tres servomotores de alto torque TowerPro MG996R y tres micro-servos metálicos MG90S para la pinza.",
    tags: ["3x MG996R", "3x MG90S", "6 DOF", "Prueba Eléctrica"]
  },
  {
    id: "07",
    frameClass: "frame-07",
    frameName: "CIRCUITO IMPRESO PCB",
    isRealPhoto: true,
    fileName: "foto-07-pinza-mecanismo.jpeg",
    title: "Mecanismo de Eslabones Paralelos de la Pinza Robótica",
    description: "Vista lateral del mecanismo articulado de cuatro barras de la pinza impresa en 3D, garantizando que ambas mordazas dentadas se mantengan paralelas durante la apertura.",
    tags: ["Mecanismo 4-Barras", "Efector Final", "PLA Plata", "Precisión"]
  },
  {
    id: "08",
    frameClass: "frame-08",
    frameName: "PERSIANA ÓPTICA",
    isRealPhoto: true,
    fileName: "foto-08-mecanismo-cierre.jpeg",
    title: "Ajuste de Tuercas y Mecanismo de Cierre de Pinza",
    description: "Primer plano del proceso de apriete con pinzas de precisión en los ejes de giro y soportes de la mordaza, asegurando cero holguras mecánicas en el efector final.",
    tags: ["Ajuste Fino", "Tornillería", "Mecánica 3D", "Ensamblaje"]
  },
  {
    id: "09",
    frameClass: "frame-09",
    frameName: "RADAR DE PROXIMIDAD",
    isRealPhoto: true,
    fileName: "foto-09-base-giratoria-servo.jpeg",
    title: "Instalación de Servo de Rotación en la Base del Chasis",
    description: "Detalle del alojamiento del servomotor principal de base dentro del cilindro impreso en 3D, responsable del giro horizontal de 180° de todo el manipulador.",
    tags: ["Base Giratoria", "Servo Base", "Eje Principal", "Chasis PLA"]
  },
  {
    id: "10",
    frameClass: "frame-10",
    frameName: "HAZ DE FIBRA ÓPTICA",
    isRealPhoto: true,
    fileName: "foto-10-ensamble-hombro.jpeg",
    title: "Estructura del Hombro Articulado y Montaje de Brazo",
    description: "Vista del soporte angular del hombro con el servomotor de elevación principal montado y asegurado con tornillos Allen para soportar el peso de los eslabones superiores.",
    tags: ["Hombro 6DOF", "Soporte Angular", "Torque Elevación", "CAD"]
  },
  {
    id: "11",
    frameClass: "frame-11",
    frameName: "CIBER-BLINDAJE INDUSTRIAL",
    isRealPhoto: true,
    fileName: "foto-11-brazo-articulado.jpeg",
    title: "Estructura General del Brazo Articulado Semi-Montado",
    description: "Ensamblaje parcial que conecta la base cilíndrica con el brazo vertical, mostrando el paso ordenado de cables de control hacia los actuadores superiores.",
    tags: ["Estructura DOF", "Cableado Interno", "Módulo Brazo", "Prototipo"]
  },
  {
    id: "12",
    frameClass: "frame-12",
    frameName: "NEÓN CYBERPUNK DUAL",
    isRealPhoto: false,
    fileName: "foto-01-ensamble-pinza.jpeg",
    title: "Marco 12 — Contraste Cromático Dual",
    description: "Iluminación lateral magenta y cian para resaltar componentes electrónicos sobre superficies oscuras.",
    tags: ["Marco 12", "Dual Glow", "Hardware"]
  },
  {
    id: "13",
    frameClass: "frame-13",
    frameName: "HOLOGRAMA ESPECTRAL",
    isRealPhoto: false,
    fileName: "foto-03-arduino-base.jpeg",
    title: "Marco 13 — Espectro Completo de Control",
    description: "Borde multicolor rotativo que acompaña la arquitectura de control central basada en Arduino.",
    tags: ["Marco 13", "Espectro", "Controlador"]
  },
  {
    id: "14",
    frameClass: "frame-14",
    frameName: "NÚCLEO REACTOR ARC",
    isRealPhoto: false,
    fileName: "foto-04-shield-pwm.jpeg",
    title: "Marco 14 — Perímetro Segmentado de Potencia",
    description: "Borde punteado técnico ideal para etapas de alimentación y drivers PWM.",
    tags: ["Marco 14", "CAD Style", "Potencia"]
  },
  {
    id: "15",
    frameClass: "frame-15",
    frameName: "OSCILOSCOPIO DIGITAL",
    isRealPhoto: false,
    fileName: "foto-06-cableado-servos.jpeg",
    title: "Marco 15 — Barras Horizontales de Señal",
    description: "Enfoque vertical limpio con bordes superior e inferior tipo instrumento de medición en bus I2C.",
    tags: ["Marco 15", "Instrumentación", "Señal PWM"]
  },
  {
    id: "16",
    frameClass: "frame-16",
    frameName: "MATRIZ CUÁNTICA",
    isRealPhoto: false,
    fileName: "foto-07-pinza-mecanismo.jpeg",
    title: "Marco 16 — Cuadrantes Sincronizados de Pinza",
    description: "Dos arcos opuestos girando en sincronía alrededor del mecanismo del efector final.",
    tags: ["Marco 16", "Sincronía", "Gripper"]
  },
  {
    id: "17",
    frameClass: "frame-17",
    frameName: "CÁMARA DE ALTA VELOCIDAD",
    isRealPhoto: false,
    fileName: "foto-09-base-giratoria-servo.jpeg",
    title: "Marco 17 — Alerta Térmica y Torque Base",
    description: "Borde carmesí con sombra interna para destacar esfuerzos mecánicos en la base del robot.",
    tags: ["Marco 17", "Torque Alto", "Alerta"]
  },
  {
    id: "18",
    frameClass: "frame-18",
    frameName: "ESCUDO DE GRAVEDAD",
    isRealPhoto: false,
    fileName: "foto-10-ensamble-hombro.jpeg",
    title: "Marco 18 — Degradado Vertical de Carga",
    description: "Transición sobria de cian a violeta para documentación cinemática del hombro.",
    tags: ["Marco 18", "Cinemática", "Docs"]
  },
  {
    id: "19",
    frameClass: "frame-19",
    frameName: "BÓVEDA CRIOGÉNICA",
    isRealPhoto: false,
    fileName: "foto-05-interior-chasis.jpeg",
    title: "Marco 19 — Contorno Azul Hielo",
    description: "Marco luminoso de baja saturación para diagramas de cableado interno.",
    tags: ["Marco 19", "Cableado", "Clean UI"]
  },
  {
    id: "20",
    frameClass: "frame-20",
    frameName: "TITANIUM CHASSIS PRO",
    isRealPhoto: false,
    fileName: "foto-11-brazo-articulado.jpeg",
    title: "Marco 20 — Acabado Metálico Aeroespacial",
    description: "Bisel metálico oscuro diseñado para combinar con piezas impresas en filamento PLA plateado.",
    tags: ["Marco 20", "Titanio", "Prototipo"]
  }
];

const galleryGrid = document.getElementById("galleryGrid");
const onlyPhotosToggle = document.getElementById("onlyPhotosToggle");

function renderCards(onlyReal = false) {
  galleryGrid.innerHTML = "";
  const items = onlyReal ? framesData.filter(item => item.isRealPhoto) : framesData;

  items.forEach(item => {
    const card = document.createElement("article");
    card.className = "card";

    const tagsHtml = item.tags.map(tag => `<span>${tag}</span>`).join("");
    const badgeClass = item.isRealPhoto ? "file-badge" : "file-badge demo";

    card.innerHTML = `
      <div class="card-header">
        <span class="frame-id">MARCO #${item.id} // ${item.frameName}</span>
        <span class="${badgeClass}">img/${item.fileName}</span>
      </div>

      <div class="frame-stage ${item.frameClass}">
        <div class="photo-inner">
          <img
            src="img/${item.fileName}"
            alt="${item.title}"
            loading="lazy"
            onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22750%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%230f172a%22/><text x=%2250%25%22 y=%2246%25%22 fill=%22%2300f0ff%22 font-family=%22monospace%22 font-size=%2218%22 text-anchor=%22middle%22>Sube tu foto a:</text><text x=%2250%25%22 y=%2252%25%22 fill=%22%23ffffff%22 font-family=%22monospace%22 font-size=%2216%22 text-anchor=%22middle%22>img/${item.fileName}</text></svg>'"
          />
        </div>
      </div>

      <div class="photo-caption">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="tech-tags">${tagsHtml}</div>
      </div>
    `;

    galleryGrid.appendChild(card);
  });
}

onlyPhotosToggle.addEventListener("change", (e) => {
  renderCards(e.target.checked);
});

renderCards(false);