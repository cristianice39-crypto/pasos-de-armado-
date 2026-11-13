document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. Efecto Máquina de Escribir (Portada)
    // ==========================================
    const texto = "BRAZO ROBÓTICO ARDUINO 6DOF";
    const elemento = document.getElementById("typewriter");
    let i = 0;

    function escribir() {
        if (elemento && i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escribir, 70);
        }
    }
    escribir();
});

const framesData = [
  {
    id: "01",
    frameClass: "frame-01",
    frameName: "LÁSER CONIC ORBITAL",
    badge: "PASO 01 // PRINCIPAL",
    isRealPhoto: true,
    fileName: "foto-01-ensamble-pinza.jpeg",
    title: "Paso 1: Impresión y Ensamble Inicial de la Pinza y el Antebrazo",
    description: "Vista general del efector final articulado en PLA plateado junto al cilindro de la base. Se verifica el calce de las piezas impresas y la disposición inicial de los micro-servomotores y cables Dupont.",
    tags: ["Impresión 3D", "Gripper 2-Dedos", "Micro Servos", "Arduino UNO"]
  },
  {
    id: "02",
    frameClass: "frame-02",
    frameName: "ESCÁNER BIOMÉTRICO HUD",
    badge: "PASO 02 // PRINCIPAL",
    isRealPhoto: true,
    fileName: "foto-02-detalle-servos.jpeg",
    title: "Paso 2: Acople de Transmisión en la Muñeca y Enrutamiento",
    description: "Primer plano de la articulación de muñeca. Se observa el engranaje dentado de la pinza para tracción firme y la integración del servomotor en el chasis con salida de cableado hacia la base.",
    tags: ["Cinemática", "Engranajes 3D", "Enrutamiento", "Torre Base"]
  },
  {
    id: "03",
    frameClass: "frame-03",
    frameName: "DOBLE ANILLO ROTATIVO",
    badge: "PASO 03 // PRINCIPAL",
    isRealPhoto: true,
    fileName: "foto-03-arduino-base.jpeg",
    title: "Paso 3: Montaje y Fijación del Arduino UNO R3 en la Base",
    description: "Vista cenital de la base cilíndrica con los cuatro soportes radiales de estabilidad. La placa Arduino UNO se atornilla al chasis mediante anclajes a medida listos para la electrónica.",
    tags: ["Arduino UNO R3", "Chasis 3D", "Soportes CAD", "Tornillería M3"]
  },
  {
    id: "04",
    frameClass: "frame-04",
    frameName: "RETÍCULA MILITAR TÁCTICA",
    badge: "PASO 04 // PRINCIPAL",
    isRealPhoto: true,
    fileName: "foto-04-shield-pwm.jpeg",
    title: "Paso 4: Integración del Shield PCA9685 PWM de 16 Canales",
    description: "Preparación del módulo controlador de servos de 12 bits sobre el Arduino UNO, incorporando el conector jack y cables de alimentación independiente para evitar caídas de tensión.",
    tags: ["Shield PWM 16-Ch", "PCA9685", "Alimentación Externa", "I2C"]
  },
  {
    id: "05",
    frameClass: "frame-05",
    frameName: "TELEMETRÍA DE PLASMA",
    badge: "PASO 05 // PRINCIPAL",
    isRealPhoto: true,
    fileName: "foto-05-interior-chasis.jpeg",
    title: "Paso 5: Verificación de Cavidad Interna y Componentes",
    description: "Inspección del espacio interior del chasis con la placa controladora fijada, rodeada de los servomotores embalados, conector de carga DC y herramientas de precisión.",
    tags: ["Subconjuntos", "Controlador", "Estación Maker", "Hardware"]
  },
  {
    id: "06",
    frameClass: "frame-06",
    frameName: "SERVO PULSE CHASIS",
    badge: "PASO 06 // PRINCIPAL",
    isRealPhoto: true,
    fileName: "foto-06-cableado-servos.jpeg",
    title: "Paso 6: Cableado y Conexión del Banco de 6 Servomotores",
    description: "Conexión simultánea de los actuadores al Shield PWM: tres motores de alto torque TowerPro MG996R para base y hombro, junto a tres micro-servos MG90S para la pinza y muñeca.",
    tags: ["3x MG996R", "3x MG90S", "6 DOF", "Prueba Eléctrica"]
  },
  {
    id: "07",
    frameClass: "frame-07",
    frameName: "CIRCUITO IMPRESO PCB",
    badge: "PASO 07 // PRINCIPAL",
    isRealPhoto: true,
    fileName: "foto-07-pinza-mecanismo.jpeg",
    title: "Paso 7: Verificación del Mecanismo de Eslabones Paralelos",
    description: "Vista lateral de la pinza armada con barras articuladas de cuatro puntos, asegurando el paralelismo constante de las mordazas durante los ciclos de agarre.",
    tags: ["Mecanismo 4-Barras", "Efector Final", "PLA Plata", "Precisión"]
  },
  {
    id: "08",
    frameClass: "frame-08",
    frameName: "PERSIANA ÓPTICA",
    badge: "PASO 08 // PRINCIPAL",
    isRealPhoto: true,
    fileName: "foto-08-mecanismo-cierre.jpeg",
    title: "Paso 8: Ajuste Mecánico y Apriete de Ejes en la Pinza",
    description: "Primer plano del apriete con pinzas y tornillos en las articulaciones del efector final para eliminar holguras y garantizar rigidez estructural en el agarre.",
    tags: ["Ajuste Fino", "Tornillería", "Mecánica 3D", "Ensamblaje"]
  },
  {
    id: "09",
    frameClass: "frame-09",
    frameName: "RADAR DE PROXIMIDAD",
    badge: "PASO 09 // PRINCIPAL",
    isRealPhoto: true,
    fileName: "foto-09-base-giratoria-servo.jpeg",
    title: "Paso 9: Montaje del Servomotor de Rotación en la Base",
    description: "Instalación del actuador principal en el cilindro de la base, configurado para proporcionar un giro horizontal fluido de 180° a toda la estructura superior.",
    tags: ["Base Giratoria", "Servo Base", "Eje Principal", "Chasis PLA"]
  },
  {
    id: "10",
    frameClass: "frame-10",
    frameName: "HAZ DE FIBRA ÓPTICA",
    badge: "PASO 10 // PRINCIPAL",
    isRealPhoto: true,
    fileName: "foto-10-ensamble-hombro.jpeg",
    title: "Paso 10: Ensamblaje del Hombro y Articulación Principal",
    description: "Colocación del soporte angular del hombro con su respectivo servo de alto torque y tornillería Allen, diseñado para soportar las cargas mecánicas del brazo.",
    tags: ["Hombro 6DOF", "Soporte Angular", "Torque Elevación", "CAD"]
  },
  {
    id: "11",
    frameClass: "frame-11",
    frameName: "CIBER-BLINDAJE INDUSTRIAL",
    badge: "PASO 11 // PRINCIPAL",
    isRealPhoto: true,
    fileName: "foto-11-brazo-articulado.jpeg",
    title: "Paso 11: Integración General del Brazo Articulado",
    description: "Ensamblaje final de los módulos estructurales principales, uniendo la base con el brazo vertical y validando el guiado limpio del cableado de control.",
    tags: ["Estructura DOF", "Cableado Interno", "Módulo Brazo", "Prototipo"]
  },
  {
    id: "12",
    frameClass: "frame-12",
    frameName: "NEÓN CYBERPUNK DUAL",
    badge: "VISTA DETALLE // 12",
    isRealPhoto: false,
    fileName: "foto-01-ensamble-pinza.jpeg",
    title: "Contraste Cromático Dual — Efector Final",
    description: "Visualización técnica bajo iluminación cian y magenta del módulo de pinza para destacar geometrías de impresión.",
    tags: ["Dual Glow", "Gripper", "Hardware"]
  },
  {
    id: "13",
    frameClass: "frame-13",
    frameName: "HOLOGRAMA ESPECTRAL",
    badge: "VISTA DETALLE // 13",
    isRealPhoto: false,
    fileName: "foto-03-arduino-base.jpeg",
    title: "Espectro Completo — Unidad de Control",
    description: "Esquema holográfico rotativo de la base estructural que alberga el microcontrolador central.",
    tags: ["Espectro", "Controlador", "Chasis"]
  },
  {
    id: "14",
    frameClass: "frame-14",
    frameName: "NÚCLEO REACTOR ARC",
    badge: "VISTA DETALLE // 14",
    isRealPhoto: false,
    fileName: "foto-04-shield-pwm.jpeg",
    title: "Perímetro Segmentado — Etapa de Potencia",
    description: "Encuadre técnico enfocado en la distribución de corriente y el shield de expansión PWM.",
    tags: ["CAD Style", "Potencia", "PCA9685"]
  },
  {
    id: "15",
    frameClass: "frame-15",
    frameName: "OSCILOSCOPIO DIGITAL",
    badge: "VISTA DETALLE // 15",
    isRealPhoto: false,
    fileName: "foto-06-cableado-servos.jpeg",
    title: "Barras de Señal — Banco de Actuadores",
    description: "Monitoreo visual del banco de conexiones múltiples para los 6 grados de libertad.",
    tags: ["Instrumentación", "Señal PWM", "6 DOF"]
  },
  {
    id: "16",
    frameClass: "frame-16",
    frameName: "MATRIZ CUÁNTICA",
    badge: "VISTA DETALLE // 16",
    isRealPhoto: false,
    fileName: "foto-07-pinza-mecanismo.jpeg",
    title: "Sincronía de Matriz — Mecanismo de Pinza",
    description: "Análisis de simetría cinemática en el movimiento de las mordazas del efector final.",
    tags: ["Sincronía", "Gripper", "Cinemática"]
  },
  {
    id: "17",
    frameClass: "frame-17",
    frameName: "CÁMARA DE ALTA VELOCIDAD",
    badge: "VISTA DETALLE // 17",
    isRealPhoto: false,
    fileName: "foto-09-base-giratoria-servo.jpeg",
    title: "Monitoreo de Torque — Eje Rotacional",
    description: "Evaluación de esfuerzos y tensiones mecánicas en el compartimento del servo de base.",
    tags: ["Torque Alto", "Base", "Eje Principal"]
  },
  {
    id: "18",
    frameClass: "frame-18",
    frameName: "ESCUDO DE GRAVEDAD",
    badge: "VISTA DETALLE // 18",
    isRealPhoto: false,
    fileName: "foto-10-ensamble-hombro.jpeg",
    title: "Degradado de Carga — Articulación Hombro",
    description: "Representación esquemática de la distribución de peso en la articulación principal.",
    tags: ["Cinemática", "Hombro", "Soporte"]
  },
  {
    id: "19",
    frameClass: "frame-19",
    frameName: "BÓVEDA CRIOGÉNICA",
    badge: "VISTA DETALLE // 19",
    isRealPhoto: false,
    fileName: "foto-05-interior-chasis.jpeg",
    title: "Contorno Criogénico — Chasis Interno",
    description: "Vista analítica de los componentes alojados en el núcleo de la estructura inferior.",
    tags: ["Cableado", "Chasis", "Hardware"]
  },
  {
    id: "20",
    frameClass: "frame-20",
    frameName: "TITANIUM CHASSIS PRO",
    badge: "VISTA DETALLE // 20",
    isRealPhoto: false,
    fileName: "foto-11-brazo-articulado.jpeg",
    title: "Acabado Aeroespacial — Ensamble General",
    description: "Perspectiva de alta durabilidad del chasis impreso en filamento metálico PLA.",
    tags: ["Titanio", "Prototipo", "PLA Plata"]
  }
];

const galleryGrid = document.getElementById("galleryGrid");

function renderCards() {
  galleryGrid.innerHTML = "";
  framesData.forEach(item => {
    const card = document.createElement("article");
    card.className = "card";

    const tagsHtml = item.tags.map(tag => `<span>${tag}</span>`).join("");
    const badgeClass = item.isRealPhoto ? "phase-badge" : "phase-badge secondary";

    card.innerHTML = `
      <div class="card-header">
        <span class="frame-id">MARCO #${item.id} // ${item.frameName}</span>
        <span class="${badgeClass}">${item.badge}</span>
      </div>

      <div class="frame-stage ${item.frameClass}">
        <div class="photo-inner">
          <img
            src="img/${item.fileName}"
            alt="${item.title}"
            loading="lazy"
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

renderCards();

/* =========================================================
   RED NEURONAL DE FONDO CON CANVAS
   ========================================================= */
(function () {
  'use strict';

  var RM = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);

  var cv = document.createElement('canvas');
  cv.className = 'rn-fondo';
  cv.setAttribute('aria-hidden', 'true');
  document.body.insertBefore(cv, document.body.firstChild);
  var ctx = cv.getContext('2d');

  var W = 0, H = 0, dpr = 1;
  var nodos = [], pulsos = [];
  var raf = 0, corriendo = false, ultimo = 0, pendiente = false;
  var mx = -999, my = -999;

  function crearNodos() {
    var n = Math.max(45, Math.min(110, Math.round(W * H / 11000)));
    nodos = [];
    for (var i = 0; i < n; i++) {
      nodos.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.45, vy: (Math.random() - 0.5) * 0.45,
        r: 1.4 + Math.random() * 1.6 
      });
    }
  }
  
  function medir() {
    var w = window.innerWidth, h = window.innerHeight;
    var cambioGrande = !nodos.length || w !== W || Math.abs(h - H) > 150;
    W = w; H = h;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = Math.round(W * dpr);
    cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (cambioGrande) crearNodos();
    else nodos.forEach(function (n) { if (n.y > H) n.y = Math.random() * H; });
  }

  function lanzarPulso() {
    if (nodos.length < 2) return;
    var i = (Math.random() * nodos.length) | 0;
    var j = (Math.random() * nodos.length) | 0;
    if (i === j) return;
    pulsos.push({ a: i, b: j, t: 0, v: 0.008 + Math.random() * 0.007 });
  }

  function dibujarPulso(p) {
    var a = nodos[p.a], b = nodos[p.b];
    if (!a || !b) return;
    var x = a.x + (b.x - a.x) * p.t, y = a.y + (b.y - a.y) * p.t;
    var tt = Math.max(0, p.t - 0.12);
    var x0 = a.x + (b.x - a.x) * tt, y0 = a.y + (b.y - a.y) * tt;
    var g = ctx.createLinearGradient(x0, y0, x, y);
    g.addColorStop(0, 'rgba(242,183,5,0)');
    g.addColorStop(1, 'rgba(242,183,5,0.9)');
    ctx.strokeStyle = g; ctx.lineWidth = 2.2;
    ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x, y); ctx.stroke();
    ctx.fillStyle = '#f2b705'; ctx.strokeStyle = 'rgba(13,18,29,0.8)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(x, y, 3.2, 0, 6.2832); ctx.fill(); ctx.stroke();
  }

  function dibujar(t, mover) {
    ctx.clearRect(0, 0, W, H);
    
    if (mover) {
      for (var k = 0; k < nodos.length; k++) {
        var q = nodos[k];
        q.x += q.vx; q.y += q.vy;
        if (q.x < 0 || q.x > W) q.vx *= -1;
        if (q.y < 0 || q.y > H) q.vy *= -1;
      }
    }

    ctx.save();
    var i, j, a, b, dx, dy, d;
    for (i = 0; i < nodos.length; i++) {
      a = nodos[i];
      ctx.fillStyle = 'rgba(242, 183, 5, 0.45)';
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, 6.2832); ctx.fill();

      for (j = i + 1; j < nodos.length; j++) {
        b = nodos[j]; dx = a.x - b.x; dy = a.y - b.y; d = Math.sqrt(dx * dx + dy * dy);
        if (d < 135) {
          ctx.strokeStyle = 'rgba(242, 183, 5,' + (0.18 * (1 - d / 135)).toFixed(3) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      dx = a.x - mx; dy = a.y - my; d = Math.sqrt(dx * dx + dy * dy);
      if (d < 160) {
        ctx.strokeStyle = 'rgba(242, 183, 5,' + (0.65 * (1 - d / 160)).toFixed(3) + ')';
        ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mx, my); ctx.stroke();
      }
    }

    if (mover) {
      if (t - ultimo > 600) { lanzarPulso(); ultimo = t; }
      for (i = pulsos.length - 1; i >= 0; i--) {
        pulsos[i].t += pulsos[i].v;
        if (pulsos[i].t >= 1) pulsos.splice(i, 1);
        else dibujarPulso(pulsos[i]);
      }
    }
    ctx.restore();
  }

  function ciclo(t) {
    if (!corriendo) return;
    dibujar(t, true);
    raf = requestAnimationFrame(ciclo);
  }
  
  function actualizarEstado() {
    var debe = !document.hidden && !RM;
    if (debe && !corriendo) { corriendo = true; raf = requestAnimationFrame(ciclo); }
    else if (!debe && corriendo) { corriendo = false; cancelAnimationFrame(raf); }
  }
  
  function pedirDibujo() {
    if (corriendo || pendiente) return;
    pendiente = true;
    requestAnimationFrame(function () { pendiente = false; dibujar(0, false); });
  }

  window.addEventListener('pointermove', function (e) { mx = e.clientX; my = e.clientY; }, { passive: true });
  document.documentElement.addEventListener('mouseleave', function () { mx = -999; my = -999; });
  window.addEventListener('resize', function () { medir(); pedirDibujo(); });
  window.addEventListener('scroll', pedirDibujo, { passive: true });
  document.addEventListener('visibilitychange', actualizarEstado);

  medir();
  dibujar(0, false);
  actualizarEstado();
})();
