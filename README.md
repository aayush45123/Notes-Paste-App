
# 📝 PasteSaver – A Simple Paste Management App

**PasteSaver** is a lightweight React application that allows users to create, update, view, delete, and share code snippets (or “pastes”) using Redux and localStorage for state management and persistence.

---

## 🚀 Features

- ✍️ **Create/Edit Pastes** – Add a title and code content.
- 🔍 **Search** – Instantly search your saved pastes by title.
- 📋 **Copy to Clipboard** – One-click copy for easy sharing.
- 📤 **Share Link** – Generate and copy a shareable link.
- 🗑️ **Delete** – Remove any paste you no longer need.
- 📦 **Persisted in localStorage** – Your pastes are saved between sessions.

---

## 🖥️ Technologies Used

- **React**
- **Redux Toolkit**
- **React Router DOM**
- **react-hot-toast** for notifications
- **CSS Modules** for scoped styling
- **localStorage** for data persistence

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Home.jsx         # Create or edit pastes
│   ├── Navbar.jsx       # Navigation bar
│   ├── Pastes.jsx       # List and manage all pastes
│   ├── ViewPaste.jsx    # View individual paste (read-only)
├── redux/
│   └── pasteSlice.js    # Redux slice for pastes
├── styles/
│   └── *.module.css     # Component-specific CSS
```

---

## 📸 Screenshots
## App Screenshots

### Home Page
![Home](public/images/Screenshot%202025-06-13%20175255.png)

### Home Page
![Details](public/images/Screenshot%202025-06-13%20175311.png)

### Paste Page
![Share](public/images/Screenshot%202025-06-13%20175439.png)


```md
![PasteSaver Screenshot](./assets/screenshot1.png)
```

---

## 🛠️ Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/pastesaver.git
cd pastesaver
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the app:**

```bash
npm start
```

4. **Build for production:**

```bash
npm run build
```

---

## 🧠 How It Works

- Each paste is uniquely identified by `_id` (timestamp-based).
- Redux manages the paste state via `pasteSlice.js`.
- All pastes are synced to `localStorage`.
- Users can edit a paste using a query parameter (`?pasteId=id`).
- Share links use dynamic routing like `/pastes/:id`.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
