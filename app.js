/* ================================
   TSUNAMI CLIENT - APP.JS v3
================================ */

// ---- Version Modal ----
const versions = [
  { mc: "1.21.11", label: "Soon", isLatest: true, file: null },
  { mc: "1.21.10", label: "Soon", file: null },
  { mc: "1.21.5", label: "Soon", file: null },
  { mc: "1.21.4", label: "Soon", file: null },
  { mc: "1.21.1", label: "Stable", file: "downloads/tsunamiclient-1.21.1.jar" },
  { mc: "1.21", label: "Stable", file: "downloads/tsunamiclient-1.21.jar" },
];

function openModal() {
  document.getElementById("versionModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("versionModal").classList.remove("active");
  document.body.style.overflow = "";
}

document.getElementById("versionModal").addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});

// ---- Render Versions ----
const versionList = document.getElementById("versionList");

versionList.innerHTML = versions.map(v => `
  <a href="#" class="version-row ${v.isLatest ? 'latest-ver' : ''}" 
     onclick="handleVersionClick('${v.mc}', event)">
    <div class="version-row-left">
      <span class="version-name">Tsunami Client for MC ${v.mc}</span>
      <span class="version-meta">🔧 Fabric • Verified</span>
    </div>
    <div style="display:flex;align-items:center;gap:10px">
      <span class="version-badge ${v.isLatest ? '' : 'stable'}">${v.label}</span>
      <span class="version-dl-icon">⬇</span>
    </div>
  </a>
`).join("");

function handleVersionClick(mc, e) {
  e.preventDefault();

  const version = versions.find(v => v.mc === mc);

  if (!version || !version.file) {
    alert("This version is not available yet.");
    return;
  }

  // GitHub Pages safe download
  const link = document.createElement("a");
  link.href = version.file + "?raw=true";
  link.setAttribute("download", "");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  closeModal();
}

// ---- Features Data ----
const features = [
  { name: "AH Sniper", desc: "Multi-item sniping, faster, now with enchantment support.", category: "automation" },
  { name: "AdvancedStashFinder", desc: "Disconnects instantly when a base is found with customization options.", category: "automation" },
  { name: "Ah Sell", desc: "Lists items in the auction house automatically.", category: "automation" },
  { name: "Auto Order", desc: "Sells orders automatically.", category: "automation" },
  { name: "AutoFirework", desc: "Recoded better AutoFirework for elytra flying.", category: "automation" },
  { name: "AutoSell", desc: "/sell selected items.", category: "automation" },
  { name: "AutoShulkerOrder", desc: "Automatically buys and orders shulkers for profit.", category: "automation" },
  { name: "AutoShulkerShellOrder", desc: "Automatically buys and orders shulker shells for profit.", category: "automation" },
  { name: "Undetected Tree Farmer", desc: "Reworked & fully bypasses detection.", category: "automation" },
  { name: "Auto Trident", desc: "Fully automated trident usage.", category: "automation" },
  { name: "Block Notifier", desc: "Get alerts for specific block detections.", category: "automation" },
  { name: "ChunkFinder v3", desc: "Improved detection of suspicious chunks.", category: "automation" },
  { name: "CoordSnapper", desc: "Copies your coords to clipboard.", category: "automation" },
  { name: "ElytraAutoFly", desc: "Automatically flies to selected coords.", category: "automation" },
  { name: "PlayerDetection", desc: "Alerts when a player renders.", category: "automation" },

  { name: "1x1 Holes", desc: "Highlights 1x1 holes.", category: "esp" },
  { name: "ChestESP", desc: "Highlights chests.", category: "esp" },
  { name: "PlayerESP", desc: "Highlights players through walls.", category: "esp" },
  { name: "SpawnerESP", desc: "Highlights mob spawners.", category: "esp" },
  { name: "FullBright", desc: "Maximum brightness.", category: "esp" },

  { name: "Legit Anchor Macro", desc: "Safer anchor usage.", category: "combat" },
  { name: "AntiTrap", desc: "Pearl through armor stands.", category: "combat" },
  { name: "Legit Crystal Macro", desc: "Auto places obsidian.", category: "combat" },
  { name: "ElytraSwap", desc: "Instant armor/elytra swap.", category: "combat" },
  { name: "PearlThrow", desc: "Auto ender pearl throw.", category: "combat" },
];

// ---- Render Features ----
let currentFilter = "all";

function renderFeatures(filter) {
  const grid = document.getElementById("featuresGrid");
  const filtered = filter === "all"
    ? features
    : features.filter(f => f.category === filter);

  grid.innerHTML = filtered.map(f => `
    <div class="feature-card">
      <span class="feature-badge">Module</span>
      <h4>${f.name}</h4>
      <p>${f.desc}</p>
    </div>
  `).join("");
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderFeatures(currentFilter);
  });
});

renderFeatures("all");

// ---- FAQ ----
const faqs = [
  {
    q: "Is Tsunami Client safe to use?",
    a: "Use at your own risk. We are not responsible for consequences of third-party software."
  },
  {
    q: "What Minecraft version does Tsunami support?",
    a: "Supports Minecraft 1.21 through 1.21.11 (Fabric)."
  },
  {
    q: "How do I install Tsunami Client?",
    a: "1. Install Fabric 2. Download Fabric API 3. Put jar in mods folder 4. Launch Fabric profile"
  }
];

const faqList = document.getElementById("faqList");

faqList.innerHTML = faqs.map((f, i) => `
  <div class="faq-item" id="faq-${i}">
    <div class="faq-q" onclick="toggleFaq(${i})">
      <span>${f.q}</span>
      <span>⌄</span>
    </div>
    <div class="faq-a">${f.a}</div>
  </div>
`).join("");

function toggleFaq(i) {
  document.getElementById(`faq-${i}`).classList.toggle("open");
}

// ---- Particle Background ----
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const NODES = 70;
const nodes = Array.from({ length: NODES }, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  vx: (Math.random() - 0.5) * 0.3,
  vy: (Math.random() - 0.5) * 0.3,
  r: Math.random() * 2 + 1
}));

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < NODES; i++) {
    const n = nodes[i];
    n.x += n.vx;
    n.y += n.vy;

    if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
    if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(56,210,255,0.5)";
    ctx.fill();

    for (let j = i + 1; j < NODES; j++) {
      const m = nodes[j];
      const dx = n.x - m.x;
      const dy = n.y - m.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 150) {
        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = `rgba(56,210,255,${0.15 * (1 - dist / 150)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(drawParticles);
}

drawParticles();

// ---- Navbar Scroll Effect ----
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.style.background =
    window.scrollY > 20
      ? "rgba(8,12,15,0.97)"
      : "rgba(8,12,15,0.85)";
});