# 📅 Interactive Wall Calendar – React Component

A polished, interactive, and responsive calendar component inspired by a physical wall calendar aesthetic. Built using React and CSS Modules with a strong focus on user experience, clean architecture, and modern UI design.

---

## 🚀 Live Demo

> Deployed Link : (https://tuf-assignment-coral.vercel.app/)

---

## 🎥 Demo Video

> Deployed Link video : (https://drive.google.com/file/d/1P7EpuHE3gWkD9SfaxKKKatMw0ptb1R9t/view?usp=sharing)

---

## ✨ Features

### 🎨 Wall Calendar Aesthetic

* Hero image dynamically changes based on the current month
* Clean, modern, and warm UI inspired by real-world wall calendars
* Smooth visual hierarchy between image, dates, and notes

---

### 📅 Interactive Date Selection

* Click to select a **date range (start → end)**
* Visual states:

  * Start date
  * End date
  * In-range dates
* Highlight for **today’s date**
* Selected date indicator

---

### 📝 Notes System (Per-Day Persistence)

* Add notes for **individual dates**
* Automatically saved using **localStorage**
* Notes persist even after page reload
* Visual indicator (dot) on dates with notes
* Last selected date is restored on reload

---

### 📦 State Management

* Managed using React Hooks (`useState`, `useEffect`)
* Clean separation of:

  * Date state
  * Range selection
  * Notes storage
  * UI state (selected date)

---

### 💾 Data Persistence

* Notes stored as structured JSON in localStorage
* Safe parsing using try-catch to prevent crashes
* Remembers last selected date for better UX

---

### 📱 Fully Responsive Design

* Desktop: Spacious grid layout with clear hierarchy
* Mobile: Optimized stacking and touch-friendly interactions

---

### 🎯 UX Enhancements

* Button-like interactive day cells with hover & click feedback
* Smooth transitions and micro-interactions
* Clear visual feedback for all states
* Context-aware notes placeholder

---

## 🧠 Design Decisions

### 1. Component Structure

The application is structured to maintain separation of concerns:

* Calendar logic
* UI rendering
* State management

---

### 2. Date Handling

* Native JavaScript `Date` object used for lightweight handling
* Avoided external libraries to keep bundle size minimal

---

### 3. LocalStorage Strategy

* Notes stored as key-value pairs:

```json
{
  "Mon Mar 18 2027": "Meeting with team"
}
```

* Ensures quick lookup and scalability

---

### 4. UX First Approach

* Avoided empty states by restoring last selected date
* Visual indicators (dots) improve discoverability
* Hover + active states improve perceived responsiveness

---

## 🛠 Tech Stack

* **React.js**
* **CSS Modules**
* **JavaScript (ES6+)**
* **LocalStorage API**

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── Calendar.jsx
 │
 ├── css/
 │    ├── calendar.module.css
 │
 ├── App.jsx
 ├── main.jsx
```

---

## ⚙️ Setup Instructions

```bash
# Clone the repository
git clone <your-repo-link>

# Navigate to project
cd project-folder

# Install dependencies
npm install

# Run the project
npm start
```

---

## 🚀 Future Improvements

* Drag-to-select date range (like booking platforms)
* Animated transitions (Framer Motion)
* Theme extraction from hero images
* Notes preview tooltip on hover
* Backend integration for cloud sync

---

## 🧪 Edge Cases Handled

* Invalid JSON in localStorage (safe fallback)
* No selected date state
* Month transitions without state mutation
* Date comparison consistency using `toDateString()`

---

## 🙌 What This Project Demonstrates

* Strong understanding of **React state management**
* Ability to convert **static UI → interactive product**
* Focus on **UX + performance**
* Clean and maintainable code practices

---

## 📬 Contact

**Mohammad Ziya**
B.Tech CSIT | MERN Developer

> *(Add LinkedIn / GitHub here)*

---

⭐ If you like this project, feel free to give it a star!
