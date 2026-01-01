# 🏍️ BikeDekho PX2

BikeDekho PX2 is a modern, persona-driven bike information and comparison platform designed specifically for Indian bike buyers. The platform provides comprehensive bike specifications, expert reviews, user insights, and real-world scenarios to help buyers make informed decisions.

## ✨ Features

- **Persona-Based Experience**: Tailored content based on user persona (Daily Commuter, Weekend Warrior, Long-Distance Tourer)
- **Comprehensive Bike Information**: Detailed specifications, variants, and pricing
- **Quick Decision Insights**: Cards for quick comparison, mileage mystery, true cost calculator, and more
- **Expert Reviews**: Professional insights with surprising facts and detailed analysis
- **User Reviews & Ratings**: Real owner experiences and modifications
- **Visual Comparison**: Side-by-side bike comparison with decision matrix
- **Real-World Scenarios**: Typical day stories and scenario battlegrounds
- **Mileage Calculator**: Detailed fuel efficiency analysis
- **Media Gallery**: High-quality images, 360° view, and color options
- **City-Specific Pricing**: On-road prices across different Indian cities
- **FAQ Section**: Common questions and detailed answers

## 🚀 Tech Stack

### Frontend (React App)
- **React 19** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Code linting and quality

### Legacy HTML Version
The project also includes a legacy HTML/CSS/JS version with vanilla implementations.

## 📁 Project Structure

```
bikedekho-px2/
├── bikedekho-react/          # Modern React application
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── Header/       # Header with persona selector
│   │   │   ├── Hero/         # Hero section with match badge
│   │   │   ├── KeySpecs/     # Key specifications
│   │   │   ├── QuickInsights/ # Quick decision cards
│   │   │   ├── Variants/     # Bike variants & pricing
│   │   │   ├── ExpertReview/ # Expert reviews & insights
│   │   │   ├── Reviews/      # User reviews & mods
│   │   │   ├── Comparison/   # Visual comparison & matrix
│   │   │   ├── RealWorld/    # Scenarios & typical day
│   │   │   ├── Mileage/      # Mileage calculator
│   │   │   ├── Media/        # Gallery & 360° view
│   │   │   ├── FAQ/          # FAQs & city prices
│   │   │   ├── Verdict/      # Final verdict
│   │   │   └── ui/           # Reusable UI components
│   │   ├── contexts/         # React contexts (Persona)
│   │   ├── data/             # Bike data
│   │   ├── types/            # TypeScript type definitions
│   │   └── hooks/            # Custom React hooks
│   ├── public/               # Static assets
│   └── package.json          # Dependencies
├── css/                      # Legacy CSS files
├── js/                       # Legacy JavaScript files
└── current-structure/        # Design references & screenshots

```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### React Application

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/bikedekho-px2.git
   cd bikedekho-px2
   ```

2. **Navigate to the React app**
   ```bash
   cd bikedekho-react
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

### Legacy HTML Version

Simply open `index.html`, `dominar_v3.html`, or `Dominar_new px.html` in a web browser.

## 📜 Available Scripts

In the `bikedekho-react` directory:

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Persona Types

The platform adapts content based on three user personas:

1. **Daily Commuter** 🏙️
   - Focus: Fuel efficiency, maintenance costs, city traffic handling
   - Priority: Mileage, comfort, running costs

2. **Weekend Warrior** 🌄
   - Focus: Performance, handling, weekend riding experience
   - Priority: Power, braking, ride quality

3. **Long-Distance Tourer** 🛣️
   - Focus: Highway stability, comfort, fuel tank capacity
   - Priority: Range, comfort, long-distance capabilities

## 🚢 Deployment

### Vercel Deployment

This project is configured to deploy the React app from the `bikedekho-react` subdirectory.

**Important**: The `vercel.json` file is configured to:
- Build from the `bikedekho-react` directory
- Output to `bikedekho-react/dist`
- Use Vite framework settings

#### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect the `vercel.json` configuration
4. The React app will be deployed (not the legacy HTML files)

Alternatively, you can deploy using the Vercel CLI:
```bash
vercel
```

### Project Structure Note

⚠️ **Important**: This repository contains both:
- **Modern React App** (in `bikedekho-react/`) - This is what gets deployed
- **Legacy HTML Files** (in root directory) - These are for reference only

The `vercel.json` ensures that the modern React app is deployed, not the legacy files.

## 🔧 Configuration

### Vercel Configuration
Deployment settings are in `vercel.json` at the root level

### Vite Configuration
Configuration can be found in `bikedekho-react/vite.config.ts`

### TypeScript Configuration
- `tsconfig.json` - Base TypeScript configuration
- `tsconfig.app.json` - App-specific configuration
- `tsconfig.node.json` - Node-specific configuration

### ESLint Configuration
ESLint rules are defined in `bikedekho-react/eslint.config.js`

## 📊 Data Structure

Bike data is structured in TypeScript with comprehensive type definitions. See `src/types/bike.ts` for the complete data model.

Example bike data includes:
- Basic information (name, tagline, pricing)
- Specifications (engine, dimensions, features)
- Variants and colors
- Expert reviews and ratings
- User reviews and common modifications
- Comparison with rival bikes
- Real-world scenarios and use cases

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style

- Use TypeScript for type safety
- Follow ESLint rules
- Use functional components with hooks
- Keep components small and focused
- Write meaningful commit messages

## 🐛 Known Issues

- Legacy HTML files may need modernization
- Some features may be specific to Dominar 250 data

## 🗺️ Roadmap

- [ ] Add more bike models
- [ ] Implement bike search functionality
- [ ] Add user authentication
- [ ] Create comparison between multiple bikes
- [ ] Add booking/test ride integration
- [ ] Mobile app version
- [ ] Progressive Web App (PWA) support

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing-fast build tool
- Tailwind CSS for the utility-first CSS framework
- All contributors who help improve this project

## 📧 Contact

For questions or support, please open an issue or contact [your-email@example.com]

---

**Note**: This is a demo/portfolio project showcasing modern web development practices for a bike information platform.

