# Trivia Data Visualization

A mini React app that visualizes data from the [Open Trivia DB API](https://opentdb.com).  
It displays the **distribution of questions by category and difficulty**, and allows filtering by category.

---

## Features

- Fetches **50 trivia questions** from the Open Trivia DB API
- Displays:
  - Questions distribution by **Category**
  - Questions distribution by **Difficulty**
- Filter to view a **single category**
- Built using:
  - React (Functional Components + Hooks)
  - Recharts for charts
- Simple, clean, and responsive UI

---

## Project Structure

```
src/
├── api/
│   └── triviaApi.js          # API logic
│
├── components/
│   ├── CategoryChart.jsx     # Bar chart for categories
│   ├── DifficultyChart.jsx   # Pie chart for difficulty
│   ├── FilterBar.jsx         # Dropdown filter
│   └── ContentContainer.jsx  # Main logic container
│
├── App.jsx                   # App entry point
├── index.js
└── App.css                   # Styling
```

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/trivia-visualizer.git
   cd trivia-visualizer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the app locally:**
   ```bash
   npm start
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## Deployment (GitHub Pages)

1. Add this line to `package.json`:
   ```json
   "homepage": "https://<your-username>.github.io/trivia-visualizer"
   ```

2. Install GitHub Pages:
   ```bash
   npm install gh-pages --save-dev
   ```

3. Add scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

Then your app will be live at  
`https://<your-username>.github.io/trivia-visualizer`

---

## API Reference

- Questions endpoint: [`https://opentdb.com/api.php?amount=50`](https://opentdb.com/api.php?amount=50)
- Categories endpoint: [`https://opentdb.com/api_category.php`](https://opentdb.com/api_category.php)

---
