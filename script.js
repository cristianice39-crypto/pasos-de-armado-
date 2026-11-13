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

// ==========================================
// 2. Galería: imágenes definidas por nombre
// ==========================================
const fotos = [
  "foto-01-ensamble-pinza.jpeg",
  "foto-02-detalle-servos.jpeg",
  "foto-03-arduino-base.jpeg",
  "foto-04-shield-pwm.jpeg",
  "foto-05-interior-chasis.jpeg",
  "foto-06-cableado-servos.jpeg",
  "foto-07-pinza-mecanismo.jpeg",
  "foto-08-mecanismo-cierre.jpeg",
  "foto-09-base-giratoria-servo.jpeg",
  "foto-10-ensamble-hombro.jpeg",
  "foto-11-brazo-articulado.jpeg"
];

const galleryGrid = document.getElementById("galleryGrid");

function renderCards() {
  galleryGrid.innerHTML = "";
  fotos.forEach((archivo, idx) => {
    const n = idx + 1;
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <span class="step-label">PASO ${n}</span>
      <div class="frame-stage">
        <div class="photo-inner">
          <img src="img/${archivo}" alt="Paso ${n}" loading="lazy" />
        </div>
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
