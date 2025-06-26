# Yahoo Finance Clone

A professional, fully responsive, and optimized clone of Yahoo Finance built with React, Vite, and Tailwind CSS.

---

## 🚀 Features
- **Professional Yahoo Finance UI**: Header, navigation, sidebar, and homepage sections closely match Yahoo Finance.
- **Fluid & Responsive**: Uses modern CSS grid/flex and Tailwind for seamless experience on all devices.
- **Optimized Images**: All images use `loading="lazy"` and local assets for fast load and no layout shift.
- **Accessibility**: Semantic HTML, keyboard navigation, and ARIA labels for inclusive UX.
- **Component Structure**: Global and page-specific components, scalable for large projects.
- **Modern Tooling**: Vite, React 19, Tailwind CSS, Lucide icons, and more.

---

## 📁 Project Structure
```
yahoo-finance-clone/
  src/
    components/              # Global/shared components 
      ui/                   # UI primitives 
    pages/
      home/
        components/         # Home page-specific components
        HomePage.jsx
        index.js
      ... (other pages)
    data/                   # Static/mock data
    service/                # Data models/services
    assets/                 # Images and static assets
    hooks/                  # Custom React hooks
    router/                 # App routing
    index.css, App.css      # Global styles
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PNPM (recommended) or npm

### Installation
```bash
git clone https://github.com/yourusername/yahoo-finance-clone.git
cd yahoo-finance-clone
pnpm install # or npm install
```

### Development
```bash
pnpm dev # or npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
pnpm build # or npm run build
```

---

## ✨ Optimization & Accessibility
- **Fluid Layouts**: All grids and flex layouts use `min-w-0`, responsive breakpoints, and spacing utilities.
- **Image Optimization**: All images use `loading="lazy"` and fixed aspect ratios.
- **Accessibility**: Semantic tags (`<section>`, `<article>`), ARIA labels, and keyboard navigation on all cards and buttons.
- **Performance**: Pure presentational components use `React.memo` to avoid unnecessary re-renders.
- **Consistent UI**: Tailwind CSS for spacing, color, and typography.

---

## 🤝 Contributing
1. Fork the repo and create your branch: `git checkout -b feature/your-feature`
2. Make your changes and commit: `git commit -am 'Add new feature'`
3. Push to the branch: `git push origin feature/your-feature`
4. Open a Pull Request

---

## 📸 Screenshots
Add screenshots to the `/screenshots` folder and reference them here for desktop and mobile views.

---

## 📚 License
[MIT](LICENSE)

---

## 🙏 Credits

- [React](https://react.dev/), [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/), [Lucide Icons](https://lucide.dev/)

---

## Contact
For questions or feedback, open an issue or contact the maintainer.


