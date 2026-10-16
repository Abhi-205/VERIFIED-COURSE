* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #070d20;
  --panel: #111d3c;
  --panel2: #172952;
  --blue: #168bff;
  --cyan: #26d9f2;
  --text: #f2f6ff;
  --muted: #a8b9df;
  --border: #294878;
}

html { scroll-behavior: smooth; }

body {
  font-family: Arial, Helvetica, sans-serif;
  color: var(--text);
  background: radial-gradient(ellipse at top, #112957 0, var(--bg) 60%);
  min-height: 100vh;
  line-height: 1.6;
}

button, input, textarea, select { font: inherit; }

button {
  cursor: pointer;
  transition: .2s ease;
}

button:hover { transform: translateY(-2px); }

.announcement {
  text-align: center;
  padding: 10px;
  color: var(--cyan);
  background: #101b42;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
}

.announcement span {
  color: #9cf6a5;
  margin-left: 12px;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 5%;
  border-bottom: 1px solid var(--border);
  background: rgba(7,13,32,.94);
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(14px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  text-decoration: none;
  flex-shrink: 0;
}

.logo {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, #168bff, #1746df);
  font-size: 24px;
}

.brand strong { font-size: 23px; }
.brand strong span { color: var(--blue); }
.brand small {
  display: block;
  color: var(--muted);
  font-size: 11px;
}

nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 7px;
}

.nav-btn, .filter, .popular button {
  background: transparent;
  color: var(--muted);
  border: 1px solid transparent;
  padding: 10px 13px;
  border-radius: 9px;
}

.nav-btn.active, .nav-btn:hover {
  background: linear-gradient(120deg, #168bff, #13c8e7);
  color: white;
}

main {
  max-width: 1320px;
  margin: auto;
  padding: 35px 24px 70px;
}

.section { display: block; }
.hidden { display: none !important; }

.hero {
  text-align: center;
  padding: 45px 0 30px;
}

.eyebrow {
  color: var(--cyan);
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 1.5px;
  margin-bottom: 18px;
}

.hero h1, .page-heading h1 {
  font-size: clamp(32px, 5vw, 58px);
  line-height: 1.15;
  font-weight: 900;
  margin-bottom: 22px;
}

.hero h1 span, .page-heading h1 span {
  color: #28d7f5;
}

.hero > p {
  color: var(--cyan);
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 28px;
}

.search-bar {
  display: flex;
  gap: 10px;
  max-width: 980px;
  margin: 25px auto 20px;
  padding: 8px;
  border: 1px solid #2875ca;
  border-radius: 18px;
  background: #0e1c3b;
  box-shadow: 0 0 25px #147fff15;
}

input, textarea, select {
  width: 100%;
  padding: 13px 15px;
  color: white;
  background: #0a1530;
  border: 1px solid #2b4672;
  border-radius: 9px;
  outline: none;
}

input:focus, textarea:focus, select:focus {
  border-color: var(--cyan);
}

input::placeholder, textarea::placeholder {
  color: #91a6ce;
}

.search-bar input {
  border: none;
  background: transparent;
  font-size: 16px;
}

.search-bar button, .primary-btn {
  background: linear-gradient(110deg, #20c8ed, #147dff);
  color: white;
  border: none;
  padding: 13px 25px;
  border-radius: 12px;
  font-weight: bold;
  white-space: nowrap;
}

.popular {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 9px;
  color: var(--muted);
  font-size: 13px;
}

.popular button, .filter {
  background: #152b51;
  border-color: #2b4777;
  color: #c8dcff;
}

.popular button:hover, .filter.active {
  background: #138ee8;
  color: white;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 15px;
  margin: 35px 0 65px;
}

.feature {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 22px;
  border: 1px solid var(--border);
  border-radius: 15px;
  background: linear-gradient(130deg, #162c55, #0f1a35);
}

.feature > span { font-size: 28px; }
.feature h3 { font-size: 14px; color: var(--cyan); }
.feature p { color: var(--muted); font-size: 13px; }

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  margin: 45px 0 24px;
}

.section-heading h2 { font-size: clamp(20px, 2.7vw, 28px); }
.section-heading p { color: var(--muted); font-size: 14px; }

.text-btn {
  border: none;
  background: transparent;
  color: var(--cyan);
  font-weight: bold;
  white-space: nowrap;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.note-card, .platform-card {
  padding: 23px;
  border: 1px solid #294a80;
  border-radius: 17px;
  background: linear-gradient(140deg, #192f5b, #111d3c);
  box-shadow: 0 12px 30px #00000016;
  min-width: 0;
}

.note-card:hover, .platform-card:hover, .branch-card:hover {
  border-color: #26b7fa;
  box-shadow: 0 8px 30px #168bff1c;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.tag {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 6px;
  background: #075c9b;
  color: #70e9ff;
  font-size: 12px;
  font-weight: bold;
}

.level {
  color: #ffe17b;
  background: #51431b;
  padding: 5px 9px;
  border-radius: 6px;
  font-size: 12px;
}

.note-card h3, .platform-card h3 {
  font-size: 19px;
  line-height: 1.4;
  margin-bottom: 12px;
}

.note-card p, .platform-card p {
  font-size: 14px;
  color: #c3d3f1;
  margin: 9px 0;
  overflow-wrap: anywhere;
}

.card-category { color: var(--cyan) !important; }

.card-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.card-actions button, .card-actions a {
  flex: 1;
  text-align: center;
  padding: 11px 8px;
  border-radius: 10px;
  border: 1px solid #31548a;
  background: #1b3766;
  color: white;
  text-decoration: none;
  font-size: 13px;
  font-weight: bold;
}

.card-actions .download {
  background: linear-gradient(100deg, #12bfae, #20cbe0);
  border: none;
  color: #041c35;
}

.card-actions button:disabled {
  opacity: .5;
  cursor: not-allowed;
}

.bookmark {
  border: 1px solid #3b5687;
  background: #13284b;
  color: #ffe16a;
  border-radius: 7px;
  padding: 6px 10px;
}

.platform-number {
  color: #66f1d2;
  background: #164a52;
  padding: 5px 9px;
  border-radius: 6px;
  margin-right: 8px;
}

.platform-card .highlights {
  color: var(--cyan);
  font-size: 12px;
  font-weight: bold;
  margin-top: 18px;
}

.platform-card ul {
  list-style: none;
  color: #d5e4ff;
  font-size: 13px;
  margin-top: 8px;
}

.platform-card li { margin: 6px 0; }
.platform-card li::before { content: "✓  "; color: #57e7cf; }

.best-for {
  border-top: 1px solid #31466d;
  padding-top: 12px;
  margin-top: 15px;
  color: var(--cyan);
  font-size: 13px;
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
}

.filter-row select { width: auto; min-width: 180px; }

.page-heading {
  text-align: center;
  padding: 40px 0 25px;
}

.page-heading > p:last-child {
  color: var(--muted);
}

.wide-input { margin: 15px 0; }

.branch-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin: 25px 0 40px;
}

.branch-card {
  background: linear-gradient(135deg, #182f5d, #101b39);
  border: 1px solid var(--border);
  border-radius: 15px;
  padding: 25px 15px;
  color: white;
  text-align: center;
  font-size: 27px;
}

.branch-card h3 { font-size: 16px; margin-top: 10px; }
.branch-card p { font-size: 13px; color: var(--cyan); }

.subheading { margin: 25px 0 15px; }

.semester-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.semester-grid button {
  border: 1px solid var(--border);
  border-radius: 9px;
  padding: 15px;
  background: #172b51;
  color: white;
}

.upload-form, .account-panel {
  max-width: 850px;
  margin: 20px auto;
  padding: 25px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 16px;
}

.upload-form {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.upload-form label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  color: #c7d9fa;
}

.full-width { grid-column: 1 / -1; }
.upload-form .primary-btn { justify-self: start; }
#uploadMessage { color: var(--cyan); }

.account-panel h2 { margin-bottom: 18px; }
.account-panel .cards-grid { margin-bottom: 25px; }

.empty-state {
  grid-column: 1 / -1;
  text-align: center;
  color: var(--muted);
  padding: 35px 15px;
  border: 1px dashed #35517d;
  border-radius: 12px;
}

footer {
  text-align: center;
  padding: 35px 20px;
  border-top: 1px solid var(--border);
  background: #080f22;
}

footer .brand { justify-content: center; margin-bottom: 10px; }
footer p { color: var(--muted); font-size: 13px; }
.footer-small { margin-top: 12px; }

dialog {
  width: min(650px, 92%);
  max-height: 85vh;
  margin: auto;
  padding: 30px;
  overflow: auto;
  background: #122347;
  color: white;
  border: 1px solid #3b6ca7;
  border-radius: 15px;
}

dialog::backdrop { background: #020817d9; }

.close-btn {
  float: right;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: #1b3766;
  color: white;
}

#previewContent { padding-top: 30px; }
#previewContent p { color: var(--muted); margin: 12px 0; }

@media (max-width: 900px) {
  .navbar { flex-direction: column; align-items: flex-start; }
  nav { justify-content: flex-start; width: 100%; }
  .feature-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .branch-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 600px) {
  main { padding: 20px 14px 45px; }
  .announcement { font-size: 10px; }
  .announcement span { display: block; margin: 3px 0 0; }
  .navbar { padding: 14px; }
  nav { gap: 5px; }
  .nav-btn { font-size: 12px; padding: 8px; }
  .brand strong { font-size: 20px; }
  .hero { padding-top: 35px; }
  .hero h1 { font-size: 34px; }
  .hero > p { font-size: 12px; letter-spacing: 1px; }
  .search-bar { flex-direction: column; }
  .search-bar button { width: 100%; }
  .feature-grid, .cards-grid, .branch-grid, .upload-form {
    grid-template-columns: 1fr;
  }
  .section-heading { align-items: flex-start; }
  .section-heading h2 { font-size: 20px; }
  .section-heading .text-btn { font-size: 12px; }
  .semester-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .upload-form .full-width { grid-column: auto; }
  .filter-row select { width: 100%; }
  .note-card, .platform-card { padding: 17px; }
  .card-actions { flex-direction: column; }
}
