* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: #0f172a;
  color: white;
}

header {
  text-align: center;
  padding: 35px 15px;
  background: #1e293b;
}

header h1 {
  color: #38bdf8;
  margin-bottom: 12px;
}

nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 18px;
  background: #111827;
}

button {
  background: #0284c7;
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background: #0369a1;
}

main {
  max-width: 850px;
  margin: 30px auto;
  padding: 20px;
}

.section {
  background: #1e293b;
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 20px;
}

.section h2 {
  color: #38bdf8;
  margin-bottom: 18px;
}

.section p {
  margin-bottom: 15px;
}

input, textarea {
  display: block;
  width: 100%;
  padding: 12px;
  margin: 12px 0;
  border: 1px solid #475569;
  border-radius: 6px;
  background: #0f172a;
  color: white;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

.hidden {
  display: none;
}

.material-card {
  background: #334155;
  padding: 18px;
  margin-top: 15px;
  border-radius: 8px;
  overflow-wrap: anywhere;
}

.material-card h3 {
  color: #7dd3fc;
  margin-bottom: 10px;
}

.material-card a {
  color: #38bdf8;
}

footer {
  text-align: center;
  padding: 22px;
  background: #111827;
  margin-top: 40px;
}

#message {
  margin-top: 15px;
}
