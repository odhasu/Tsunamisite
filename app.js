/* ================================
   TSUNAMI CLIENT - APP.JS v2
================================ */

// ---- Version Modal ----
const versions = [
  { mc: "1.21.11", label: "Latest", isLatest: true },
  { mc: "1.21.10", label: "Stable" },
  { mc: "1.21.5", label: "Stable" },
  { mc: "1.21.4", label: "Stable" },
  { mc: "1.21.1", label: "Stable" },
  { mc: "1.21", label: "Stable" },
];

function openModal() {
  document.getElementById("versionModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("versionModal").classList.remove("active");
  document.body.style.overflow = "";
}

// Close modal clicking outside
document.getElementById("versionModal").addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});

// Close modal on Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});

// Render version list
const versionList = document.getElementById("versionList");
versionList.innerHTML = versions.map(v => `
  <a href="#" class="version-row ${v.isLatest ? 'latest-ver' : ''}" onclick="handleVersionClick('${v.mc}', event)">
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
  // Replace with actual download links per version
  alert(`Downloading Tsunami Client for Minecraft ${mc}...\n\nReplace this with your actual download link in app.js`);
  closeModal();
}

// ---- Features Data ----
const features = [
  // Automation
  { name: "AH Sniper", desc: "Multi-item sniping, faster, now with enchantment support.", category: "automation" },
  { name: "AdvancedStashFinder", desc: "Disconnects instantly when a base is found with customization options.", category: "automation" },
  { name: "Ah Sell", desc: "Lists items in the auction house automatically.", category: "automation" },
  { name: "Auto Order", desc: "Sells orders automatically.", category: "automation" },
  { name: "AutoFirework", desc: "Recoded better AutoFirework for elytra flying.", category: "automation" },
  { name: "AutoSell", desc: "/sell selected items.", category: "automation" },
  { name: "AutoShulkerOrder", desc: "Automatically buys and orders shulkers for profit.", category: "automation" },
  { name: "AutoShulkerShellOrder", desc: "Automatically buys and orders shulker shells for profit.", category: "automation" },
  { name: "Undetected Tree Farmer", desc: "Reworked & fully bypasses detection (3 Modules for different functions).", category: "automation" },
  { name: "Auto Trident", desc: "Fully automated trident usage.", category: "automation" },
  { name: "Beta Spawner Order", desc: "Early testing release for spawner ordering.", category: "automation" },
  { name: "Block Notifier", desc: "Get alerts for specific block detections.", category: "automation" },
  { name: "Bone Dropper", desc: "Drops only bones from spawners with option to order them.", category: "automation" },
  { name: "ChunkFinder v3", desc: "Improved detection of suspicious chunks that may have bases.", category: "automation" },
  { name: "CoordSnapper", desc: "Copies your coords to clipboard.", category: "automation" },
  { name: "CrateBuyer", desc: "Automatically buys items from Crates. Fixed to buy shovel.", category: "automation" },
  { name: "ElytraAutoFly", desc: "Automatically flies to selected coords with elytra.", category: "automation" },
  { name: "Emergency Seller", desc: "Sells items instantly at a high price.", category: "automation" },
  { name: "End & Nether RTP", desc: "Explore both dimensions with random teleports.", category: "automation" },
  { name: "Hide Scoreboard", desc: "Removes the server's scoreboard.", category: "automation" },
  { name: "Hover Totem", desc: "Equips a totem when hovered over.", category: "automation" },
  { name: "ItemSwap", desc: "Can be used for Shield breaker, mace swap, sword hit, etc.", category: "automation" },
  { name: "Legit Autototem", desc: "Legitimate auto totem equipping (being fixed for detection).", category: "automation" },
  { name: "Order Sniper", desc: "Instantly snipes orders for the best prices and orders the items.", category: "automation" },
  { name: "OrderDropper", desc: "Drops items from orders.", category: "automation" },
  { name: "Player Detection PanicPay", desc: "Emergency disconnect when players are detected.", category: "automation" },
  { name: "PlayerDetection", desc: "Alerts when a player renders.", category: "automation" },
  { name: "Region Map", desc: "Added region-based mapping functionality.", category: "automation" },
  { name: "RTP for Biomes", desc: "Teleport directly to specific biome types.", category: "automation" },
  { name: "RTPBaseFinder", desc: "RTP's and digs down and repeats until it finds a base.", category: "automation" },
  { name: "RTPEndBaseFinder", desc: "Fixed to not kick you anymore. Removed Enderman Protection.", category: "automation" },
  { name: "RTper", desc: "Random teleport in End & Nether until near selected coords.", category: "automation" },
  { name: "ShopBuyer", desc: "Purchases items from /shop automatically.", category: "automation" },
  { name: "ShulkerDropper", desc: "Buys Shulkers from /shop and drops them.", category: "automation" },
  { name: "Spawner Notifier", desc: "Alerts when spawners are detected.", category: "automation" },
  { name: "SpawnerDropper", desc: "Updated for Donut spawner changes. Includes bone dropper functionality.", category: "automation" },
  { name: "SpawnerProtect", desc: "Fixed: Now doesn't trigger on restarts. Emergency distance added.", category: "automation" },
  { name: "TabDetector", desc: "Alerts when a player joins the server.", category: "automation" },
  { name: "TpaMacro", desc: "Automates /tpa requests and acceptances.", category: "automation" },
  { name: "TunnelBaseFinder", desc: "Mines until it finds a base using baritone.", category: "automation" },
  { name: "UndetectedTunneler", desc: "Mines until it finds a base.", category: "automation" },
  // ESP (Xray and Map Art ESP removed)
  { name: "1x1 Holes", desc: "Highlights 1x1 holes.", category: "esp" },
  { name: "ClusterFinder", desc: "Highlights amethyst clusters.", category: "esp" },
  { name: "Covered Hole", desc: "Highlights holes that were covered.", category: "esp" },
  { name: "DeepslateESP", desc: "Highlights deepslate above a threshold.", category: "esp" },
  { name: "VillagerESP", desc: "Highlights villagers and zombie villagers.", category: "esp" },
  { name: "WanderingESP", desc: "Highlights wandering traders.", category: "esp" },
  { name: "1x1 Hole Detector", desc: "Detects and marks dangerous holes nearby.", category: "esp" },
  { name: "BlockESP", desc: "Highlights selected block types in range.", category: "esp" },
  { name: "ChestESP", desc: "Highlights chests and storage containers.", category: "esp" },
  { name: "PlayerESP", desc: "Highlights players through walls.", category: "esp" },
  { name: "SpawnerESP", desc: "Highlights mob spawners.", category: "esp" },
  { name: "FullBright", desc: "Maximum brightness, no dark areas.", category: "esp" },
  // Combat
  { name: "Legit Anchor Macro", desc: "Safer & more reliable usage. Switches back to anchor. Stop on kill.", category: "combat" },
  { name: "AntiTrap", desc: "Allows you to pearl through armor stands.", category: "combat" },
  { name: "AutoInv Totem", desc: "Auto-opens inventory to insert totems.", category: "combat" },
  { name: "Legit Crystal Macro", desc: "Auto places obsidian when right clicking. Stop on kill.", category: "combat" },
  { name: "Old Crystal Macro", desc: "Re-added by popular request. Classic crystal macro.", category: "combat" },
  { name: "Faster Crystal Macro", desc: "Optimized for higher speed crystal placement.", category: "combat" },
  { name: "ElytraSwap", desc: "Swaps between armor and elytra instantly.", category: "combat" },
  { name: "PearlThrow", desc: "Throws ender pearls automatically with a keybind.", category: "combat" },
];

// ---- Render Features ----
let currentFilter = "all";

function renderFeatures(filter) {
  const grid = document.getElementById("featuresGrid");
  const filtered = filter === "all" ? features : features.filter(f => f.category === filter);
  grid.innerHTML = filtered.map(f => `
    <div class="feature-card" data-cat="${f.category}">
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
    a: "Disclaimer: Use at your own risk. While Tsunami Client is officially allowed, we are not responsible for any consequences that may arise from using third-party software."
  },
  {
    q: "Why is Tsunami free?",
    a: "We believe in providing quality tools to the Minecraft community without paywalls. Tsunami is completely free and will always remain free, supported by our community."
  },
  {
    q: "What Minecraft version does Tsunami support?",
    a: "Tsunami Client supports Minecraft 1.21 through 1.21.11 (Fabric). We update regularly to support the latest versions."
  },
  {
    q: "How do I install Tsunami Client?",
    a: "1. Install Fabric for your version (1.21-1.21.11)  2. Download Fabric API  3. Place Tsunami Client jar in your mods folder  4. Launch Minecraft with Fabric profile"
  },
  {
    q: "Is Tsunami only for DonutSMP?",
    a: "While optimized for DonutSMP, many features work on other servers. However, some automation features are specifically tailored for DonutSMP mechanics."
  },
  {
    q: "How can I get support?",
    a: "Join our Discord community for troubleshooting, updates, and support from both developers and experienced users."
  }
];

const faqList = document.getElementById("faqList");
faqList.innerHTML = faqs.map((f, i) => `
  <div class="faq-item" id="faq-${i}">
    <div class="faq-q" onclick="toggleFaq(${i})">
      <span>${f.q}</span>
      <span class="faq-chevron">⌄</span>
    </div>
    <div class="faq-a">${f.a}</div>
  </div>
`).join("");

function toggleFaq(i) {
  document.getElementById(`faq-${i}`).classList.toggle("open");
}

// ---- Particle Canvas ----
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
    n.x += n.vx; n.y += n.vy;
    if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
    if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(56,210,255,0.5)";
    ctx.fill();
    for (let j = i + 1; j < NODES; j++) {
      const m = nodes[j];
      const dx = n.x - m.x, dy = n.y - m.y;
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

// ---- Navbar scroll ----
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.style.background = window.scrollY > 20
    ? "rgba(8,12,15,0.97)"
    : "rgba(8,12,15,0.85)";
});
