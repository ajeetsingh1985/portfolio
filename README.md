# Ajeet Singh - Personal Profile Website

A modern, responsive personal profile website built with React and Tailwind CSS, showcasing professional journey, achievements, and personal life.

## 🚀 Features

### Professional Sections
- **Hero Section**: Eye-catching introduction with name, title, and tagline
- **About Section**: Professional identity and leadership philosophy
- **Geographic Journey Map**: Interactive visualization of journey from Rudrapur → Delhi → Pennsylvania
- **Education Timeline**: Academic credentials with detailed institution information
- **Career Timeline**: Interactive timeline from 2005 to present with major milestones
- **Assurant Journey**: Detailed view of projects, promotions, and achievements
- **Current Role Highlight**: Focus on Status Service and Oracle optimization initiatives
- **What Excites**: Motivations, passions, and professional drivers

### Personal Sections
- **Family & Personal Life**: Hobbies, fun facts, and personal values
- **Location Highlights**: Images and historical context for each geographic location

### Technical Features
- ✅ Fully responsive design for all devices
- ✅ React Router for smooth navigation
- ✅ Tailwind CSS for modern, utility-first styling
- ✅ Interactive components with hover effects
- ✅ Smooth animations and transitions
- ✅ Clean, maintainable code with comments
- ✅ Modular component architecture

## 🛠️ Technology Stack

- **React 18.3.1** - UI library
- **React Router DOM 6.27.0** - Routing
- **Tailwind CSS 3.4.15** - Styling
- **Vite 6.0.1** - Build tool and dev server
- **PostCSS & Autoprefixer** - CSS processing

## 📁 Project Structure

```
ajeet-singh-profile/
├── .github/
│   └── copilot-instructions.md
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── AssurantJourney.jsx
│   │   ├── CareerTimeline.jsx
│   │   ├── CurrentRole.jsx
│   │   ├── EducationTimeline.jsx
│   │   ├── FamilySection.jsx
│   │   ├── Footer.jsx
│   │   ├── GeographicJourney.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   └── WhatExcites.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd c:\Repos\Learning
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization Guide

### Updating Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, title, and tagline

2. **About Section** (`src/components/About.jsx`):
   - Modify leadership philosophy and technical expertise

3. **Geographic Journey** (`src/components/GeographicJourney.jsx`):
   - Update locations array with your journey details
   - Replace placeholder images with actual images

4. **Education Timeline** (`src/components/EducationTimeline.jsx`):
   - Update education array with your academic credentials

5. **Career Timeline** (`src/components/CareerTimeline.jsx`):
   - Modify milestones array with your career history

6. **Family Section** (`src/components/FamilySection.jsx`):
   - Update family information, hobbies, and fun facts

### Adding Your Family Photos

1. **Upload Photos**: Place your images in `public/images/` directory:
   - `family1.jpg`, `family2.jpg`, etc. - For the carousel
   - `wedding.jpg` - Wedding photo (2012)
   - `daughter.jpg` - Daughter's photo (2016)
   - `son.jpg` - Son's photo (2020)

2. **Update Paths** (if using different filenames):
   Edit `src/components/FamilySection.jsx`:
   ```javascript
   const familyPhotos = [
     '/images/family1.jpg',  // Change to your filename
     '/images/family2.jpg',
     // ... more photos
   ];
   ```

3. **See Instructions**: Check `public/images/README.md` for detailed upload instructions

### Color Scheme

Modify the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Update these color values
  }
}
```

## 📝 Component Documentation

Each component is well-documented with comments explaining:
- Component purpose
- Props (if applicable)
- Key functionality
- Data structures

### Key Components

- **Navigation**: Responsive navbar with mobile menu
- **Hero**: Main introduction section
- **GeographicJourney**: Interactive map with location markers
- **CareerTimeline**: Interactive timeline with filtering
- **AssurantJourney**: Detailed project showcase
- **CurrentRole**: Highlights of current responsibilities

## 🎯 Data Structures

### Location Data
```javascript
{
  id: number,
  name: string,
  title: string,
  years: string,
  description: string,
  highlights: string[],
  image: string,
  coordinates: { top: string, left: string }
}
```

### Career Milestone
```javascript
{
  year: string,
  title: string,
  company: string,
  role: string,
  description: string,
  technologies: string[],
  achievements: string[]
}
```

## 🔧 Development Tips

1. **Hot Reload**: Vite provides instant hot module replacement (HMR)
2. **Component Testing**: Test components individually by navigating to specific routes
3. **Responsive Testing**: Use browser dev tools to test on different screen sizes
4. **Performance**: Images should be optimized before deployment

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
1. Update `vite.config.js` with base path
2. Run `npm run build`
3. Deploy the `dist` folder

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

This is a personal profile website, but suggestions for improvements are welcome!

## 📧 Contact

**Ajeet Singh**
- Email: ajeet@example.com
- LinkedIn: [Update with actual link]
- Location: Pennsylvania, USA

## 🙏 Acknowledgments

- Built with React and Tailwind CSS
- Inspired by modern portfolio designs
- Icons: Emoji-based for simplicity

---

**Note**: Remember to replace all placeholder data with actual information before deployment:
- Family member names and details
- Social media links
- Contact information
- Images (replace placeholder URLs)
- Specific dates and achievements
