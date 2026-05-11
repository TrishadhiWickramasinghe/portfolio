# 🚀 Professional Portfolio Website

A modern, fully responsive, production-ready portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

### 🎨 Design & UI
- **Modern, Clean Minimal UI** - Glassmorphism and soft shadow card designs
- **Dark/Light Mode Toggle** - Seamless theme switching with localStorage persistence
- **Smooth Animations** - Framer Motion animations for page transitions and hover effects
- **Fully Responsive** - Mobile, tablet, and desktop optimized layouts
- **Professional Aesthetic** - Developer-focused, modern design system

### 📱 Pages

#### 1. **Home Page** (`/`)
- Hero section with professional introduction
- Featured projects showcase (3 projects)
- Call-to-action buttons (View Projects, Contact Me)
- Social media links (GitHub, LinkedIn)
- Profile section with emoji avatar
- Smooth scroll animations
- CTA section for project inquiries

#### 2. **About Page** (`/about`)
- Developer journey introduction
- Stats display (15+ Projects, 2+ Years Experience, 100% Passion, ∞ Growth Mindset)
- Skills organized by category:
  - **Frontend**: React, Next.js, TypeScript, Tailwind CSS
  - **Backend**: Node.js, PostgreSQL, MongoDB, REST APIs
  - **Tools & DevOps**: Git, Docker, Figma, CI/CD
- Career goals section with detailed descriptions
- Beautiful skill cards with icons

#### 3. **Projects Page** (`/projects`)
- Complete project grid (8+ sample projects)
- Each project card includes:
  - Project title
  - Impact-focused description
  - Technology badges
  - GitHub link
  - Live demo link
  - Emoji project icon
- Responsive grid layout (1 column on mobile, 2 on tablet, 3 on desktop)
- CTA section for project inquiries

#### 4. **Contact Page** (`/contact`)
- Contact form with validation:
  - Name field (required)
  - Email field (required, email validation)
  - Message field (required, min 10 characters)
- Contact information section:
  - Email with mailto link
  - Phone number with tel link
  - Location information
- Success message on form submission
- "What I'm Looking For" section (Internships, Freelance, Collaboration)
- Response time notice

### 🎯 Components

#### **Navbar** (`components/Navbar.tsx`)
- Sticky navigation with backdrop blur
- Active route highlighting
- Theme toggle button
- Logo/branding section
- Responsive design

#### **Footer** (`components/Footer.tsx`)
- Brand information
- Quick navigation links
- Social media icons (GitHub, LinkedIn, Twitter, Email)
- Copyright information
- Built with technologies display

#### **HeroSection** (`components/HeroSection.tsx`)
- Large, impactful heading with gradient text
- Professional tagline
- Profile image section
- CTA buttons with Framer Motion animations
- Social media links
- Scroll indicator

#### **ProjectCard** (`components/ProjectCard.tsx`)
- Project image/emoji placeholder
- Title, description, and tech stack
- Code and Live Demo buttons
- Hover animations
- Responsive design

#### **SkillCard** (`components/SkillCard.tsx`)
- Icon display with hover rotation
- Technology name
- Optional description
- Beautiful gradient backgrounds
- Smooth hover animations

#### **ContactForm** (`components/ContactForm.tsx`)
- Two-column layout (desktop) / responsive (mobile)
- Form validation with error messages
- Contact information cards (Email, Phone, Location)
- Success message display
- Input field styling with focus states

#### **ThemeToggle** (`components/ThemeToggle.tsx`)
- Sun/Moon icons based on theme
- Smooth transitions
- Accessible button

### 🛠️ Tech Stack

- **Framework**: Next.js 16.2.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Geist Sans & Geist Mono (via Next.js)

## 📂 Project Structure

```
/
├── app/
│   ├── layout.tsx              # Root layout with ThemeProvider
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── projects/
│   │   └── page.tsx            # Projects page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   └── not-found.tsx           # 404 page
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ProjectCard.tsx
│   ├── SkillCard.tsx
│   ├── ContactForm.tsx
│   ├── ThemeToggle.tsx
│   └── index.ts                # Component exports
├── lib/
│   └── ThemeContext.tsx        # Theme context & provider
├── public/                      # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── postcss.config.mjs
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Update Personal Information

1. **Home Page** - Edit `app/page.tsx`:
   - Change the name in the hero section
   - Update the tagline and description
   - Modify the featured projects

2. **About Page** - Edit `app/about/page.tsx`:
   - Update the journey description
   - Modify stats (projects, years, etc.)
   - Customize career goals

3. **Projects Page** - Edit `app/projects/page.tsx`:
   - Add/remove/modify projects in `allProjects` array
   - Update project descriptions, technologies, and links

4. **Contact Page** - Edit `app/contact/page.tsx`:
   - Update contact information
   - Modify the "What I'm Looking For" section

### Personalize Content

- **Name**: Change "Your Name" in home, about, and footer
- **Social Links**: Update GitHub, LinkedIn, Twitter, email links
- **Profile Image**: Replace emoji with actual image in HeroSection
- **Project Emojis**: Change emoji icons for each project
- **Colors**: Modify Tailwind classes for custom color schemes

## 🌙 Theme System

The theme system uses:
- **Tailwind CSS dark mode class strategy**
- **localStorage persistence** for user preference
- **System preference detection** as fallback
- **SSR-safe implementation** for Next.js

## 📱 Responsive Design

- **Mobile**: Full-width layouts, single column grids
- **Tablet**: 2-column grids, optimized spacing
- **Desktop**: 3+ column grids, full feature display

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Focus-visible styles for keyboard navigation
- Alt text for images
- Proper heading hierarchy

## 🔍 SEO

- Meta tags in layout
- Open Graph tags ready
- Proper heading structure
- Fast performance with Next.js optimization
- Sitemap-ready structure

## 📊 Performance

- **Static Site Generation** for fast builds
- **Image Optimization** via Next.js
- **CSS Minification** via Tailwind
- **Code Splitting** with Next.js App Router
- **Smooth Scrolling** behavior

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Code Style

- TypeScript for type safety
- ESLint for code consistency
- Tailwind CSS for styling
- Component-based architecture

## 📝 License

This portfolio template is open source and available for personal use.

## 🤝 Contributing

Feel free to fork, modify, and use this template for your own portfolio!

## 📞 Contact & Support

- Update the contact form in `/app/contact/page.tsx` with your actual email
- Add your social media links throughout the site
- Customize all content to match your professional identity

---

**Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS**
