# Premium Portfolio Website - Dona Trishadhi Gayani Wickramasinghe

## 🚀 Project Overview

A modern, premium-quality personal portfolio website built with cutting-edge web technologies. The portfolio showcases Dona's professional journey, skills, and projects as a Software Engineering Student and Full-Stack Developer.

**Live URL:** [Your deployment URL here]

## ✨ Features

### Pages & Sections
- **Home** - Hero section with professional intro, featured projects, and CTA
- **About** - Professional profile, personal details, education timeline, and exam results
- **Skills** - Categorized technical skills with proficiency indicators and soft skills
- **Projects** - Showcase of featured projects with detailed descriptions and tech stacks
- **Contact** - Contact form with social media links and business information

### Design & UX
- ✅ Dark/Light mode toggle with persistent storage
- ✅ Responsive mobile-first design
- ✅ Smooth page transitions with Framer Motion
- ✅ Glassmorphism card designs
- ✅ Gradient accents and modern UI
- ✅ Animated section transitions
- ✅ Professional typography and spacing
- ✅ Accessibility-focused design
- ✅ Sticky responsive navbar with mobile menu
- ✅ Custom 404 page

### Performance & SEO
- ✅ TypeScript for type safety
- ✅ Server-side rendering with Next.js
- ✅ Optimized images and assets
- ✅ SEO metadata for all pages
- ✅ Fast page load times
- ✅ Smooth scrolling behavior

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Font:** Geist (Google Fonts)
- **Dark Mode:** Custom Context API

## 📁 Project Structure

```
/app
  ├── /about
  │   └── page.tsx          # About page with education & personal details
  ├── /contact
  │   └── page.tsx          # Contact form and business info
  ├── /projects
  │   └── page.tsx          # Projects showcase
  ├── /skills
  │   └── page.tsx          # Skills categorized by expertise
  ├── globals.css           # Global styles and theme
  ├── layout.tsx            # Root layout with providers
  ├── not-found.tsx         # 404 error page
  └── page.tsx              # Home page

/components
  ├── ContactForm.tsx       # Reusable contact form
  ├── Footer.tsx            # Site footer
  ├── HeroSection.tsx       # Hero section component
  ├── Navbar.tsx            # Navigation bar
  ├── ProjectCard.tsx       # Project showcase card
  ├── SectionTitle.tsx      # Reusable section title
  ├── SkillCard.tsx         # Skill display card
  ├── ThemeToggle.tsx       # Dark/light mode toggle
  └── index.ts              # Component exports

/lib
  └── ThemeContext.tsx      # Theme context provider

/public
  └── [static assets]

package.json
tsconfig.json
next.config.ts
tailwind.config.js
postcss.config.mjs
eslint.config.mjs
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
cd my-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in browser

### Build for Production

```bash
npm run build
npm run start
```

## 📝 Customization

### Update Personal Information

Edit `/components/HeroSection.tsx` to change:
- Name and title
- Professional bio
- Social media links

### Update Contact Info

Edit `/components/ContactForm.tsx` to update:
- Email address
- Phone number
- Physical address
- Social media links

### Modify Skills

Edit `/app/skills/page.tsx` to:
- Add/remove skill categories
- Update proficiency levels
- Add new soft skills

### Update Projects

Edit `/app/projects/page.tsx` to:
- Add new projects
- Update project descriptions
- Change technology stacks
- Add project badges

## 🎨 Color Palette

- **Primary Gradient:** Blue (#3B82F6) to Purple (#7C3AED)
- **Background (Light):** White (#FFFFFF)
- **Background (Dark):** Gray (#0F172A)
- **Text (Light):** Gray (#111827)
- **Text (Dark):** White (#FFFFFF)
- **Accent:** Various gradient colors for visual interest

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Focus-visible styles for keyboard navigation
- Color contrast compliance
- Keyboard navigation support
- Screen reader friendly

## 🔧 Configuration

### Next.js Config
- App Router enabled
- TypeScript strict mode
- ESLint configured

### Tailwind CSS
- Custom theme colors
- Dark mode support
- Responsive design utilities
- Smooth transitions

## 📊 Performance Tips

- Images are optimized
- CSS is minified
- JavaScript is code-split
- Smooth animations use `will-change`
- Lazy loading for components

## 🌐 Deployment

### Recommended Hosting Platforms
1. **Vercel** (official Next.js deployment)
2. **Netlify**
3. **GitHub Pages**
4. **AWS Amplify**

### Deployment Steps (Vercel)
```bash
npm install -g vercel
vercel
```

## 📧 Contact & Support

For questions or support regarding this portfolio template, reach out to:
- **Email:** gayaniw880@gmail.com
- **Phone:** +94 762502377
- **Location:** No 548/3, Pahala Koswatta, Halmillawewa

## 📄 License

This project is personal portfolio. Feel free to use it as inspiration for your own portfolio.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for utility-first styling
- Framer Motion for smooth animations
- React Icons for icon library

---

**Built with ❤️ by Dona Trishadhi Gayani Wickramasinghe**
