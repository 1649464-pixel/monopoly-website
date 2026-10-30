* {
  box-sizing: border-box;
}

:root {
  --bg: #0d1b2a;
  --bg-alt: #13293d;
  --panel: rgba(21, 35, 50, 0.82);
  --surface: #f4efe8;
  --text: #eaf2ff;
  --muted: #b7ccdf;
  --gold: #f8d66d;
  --light: #f8fafc;
  --shadow: rgba(0, 0, 0, 0.22);
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: "Inter", sans-serif;
  background: linear-gradient(135deg, #081421, var(--bg) 32%, #0d2032 100%);
  color: var(--text);
}

body {
  min-height: 100vh;
}

button,
input {
  font: inherit;
}

.page-shell {
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px 20px 36px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 22px;
}

.eyebrow {
  margin: 0 0 8px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.68rem;
  font-weight: 800;
}

h1 {
  margin: 0;
  font-size: clamp(2.2rem, 4vw, 3.5rem);
}

h2 {
  margin-top: 0;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.room-badge {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(248, 214, 109, 0.12);
  border: 1px solid rgba(248, 214, 109, 0.7);
  color: var(--gold);
  font-weight: 700;
}

.primary-btn,
.secondary-btn {
  border: none;
  border-radius: 12px;
  padding: 12px 18px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.12s ease, filter 0.15s ease;
}

.primary-btn {
  background: linear-gradient(180deg, #f7d267 0%, #dca82b 100%);
  color: #171717;
  box-shadow: 0 12px 24px rgba(220, 168, 43, 0.3);
}

.secondary-btn {
  background: #dfe9f8;
  color: #0f172a;
}

.primary-btn:hover,
.secondary-btn:hover {
  transform: translateY(-1px);
  filter: brightness(1.05);
}

.panel {
  background: rgba(19, 31, 46, 0.88);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  box-shadow: 0 24px 40px rgba(0, 0, 0, 0.2);
}

.lobby-screen {
  padding: 28px 20px;
}

.lobby-inner {
  max-width: 760px;
  margin: 0 auto;
}

.auth-form,
.join-block {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;
}

input {
  width: 100%;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  padding: 12px 14px;
  color: var(--text);
}

.split-form {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 16px;
  margin-top: 22px;
}

.join-row {
  display: flex;
  gap: 12px;
}

.room-list-wrap {
  margin-top: 28px;
}

.room-list {
  list-style: none;
  padding: 0;
  margin: 14px 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.room-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
}

.room-list .room-meta {
  color: var(--muted);
  font-size: 0.8rem;
}

.game-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(280px, 0.7fr);
  gap: 24px;
}

.board-panel {
  background: rgba(20, 31, 46, 0.78);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 22px;
  box-shadow: 0 18px 32px rgba(0,0,0,0.18);
  padding: 20px;
}

.board {
  display: grid;
  grid-template-columns: repeat(4, minmax(120px, 1fr));
  gap: 12px;
  min-height: 720px;
}

.tile {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 160px;
  padding: 10px 8px 8px;
  border-radius: 18px;
  border: 2px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
  overflow: hidden;
}

.tile::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 18px;
  background: rgba(255,255,255,0.18);
}

.tile.highlight {
  box-shadow: 0 0 0 3px rgba(248,214,109,0.85), inset 0 0 30px rgba(255,255,255,0.1);
}

.tile .tile-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  min-height: 22px;
}

.tile .badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 76px;
  padding: 5px 8px;
  border-radius: 999px;
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(0,0,0,0.17);
}

.tile .name {
  font-weight: 800;
  font-size: 0.9rem;
  line-height: 1.2;
}

.tile .meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  font-size: 0.7rem;
  color: rgba(255,255,255,0.85);
}

.tile .players {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 10px;
}

.token {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.7);
  font-size: 0.72rem;
  font-weight: 800;
  color: #07131d;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.turn-panel,
.log-panel,
.players-panel {
  padding: 18px 18px 16px;
}

.panel-label {
  margin: 0 0 10px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.68rem;
  font-weight: 800;
}

#turnLabel {
  margin: 0 0 14px;
  font-size: 1.8rem;
}

.dice-row {
  display: flex;
  gap: 12px;
  margin-bottom: 18px;
}

.dice {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border-radius: 18px;
  background: linear-gradient(180deg, #f5f7fb, #dfe9f8);
  color: #0d1b2a;
  font-size: 1.8rem;
  font-weight: 800;
  box-shadow: inset 0 -6px 0 rgba(15, 23, 42, 0.08);
}

.full-width {
  width: 100%;
}

.log {
  max-height: 260px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-right: 4px;
}

.log-entry {
  border-radius: 10px;
  padding: 10px 12px;
  line-height: 1.4;
  background: rgba(255,255,255,0.05);
}

.players-panel {
  margin-top: 24px;
}

.players {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 14px;
}

.player-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 14px 16px;
}

.player-card.active {
  border-color: rgba(248,214,109,0.9);
  box-shadow: inset 0 0 0 1px rgba(248,214,109,0.8);
}

.player-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.player-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 800;
}

.player-money {
  font-weight: 700;
  color: var(--gold);
}

.player-properties {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  min-height: 32px;
  margin-top: 10px;
}

.property-chip {
  font-size: 0.68rem;
  padding: 4px 8px;
  border-radius: 999px;
  background: rgba(248,214,109,0.12);
  border: 1px solid rgba(248,214,109,0.5);
}

.hidden {
  display: none !important;
}

@media (max-width: 980px) {
  .game-layout {
    grid-template-columns: 1fr;
  }

  .board {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
  }
}

@media (max-width: 560px) {
  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .split-form,
  .join-row {
    grid-template-columns: 1fr;
    display: grid;
  }

  .board {
    grid-template-columns: 1fr;
  }
}
