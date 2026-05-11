# ⚡ Quick Start Guide

Get your portfolio running in 5 minutes!

## 🚀 Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 What You Get

✅ **4 Complete Pages**
- Home with hero section & featured projects
- About with skills & career goals
- Projects showcase with 8+ sample projects
- Contact form with validation

✅ **5+ Reusable Components**
- Professional Navbar with theme toggle
- Responsive Footer with social links
- Beautiful Hero Section
- Project Cards with hover effects
- Skill Cards with icons

✅ **Built-in Features**
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- ✨ Smooth animations
- 🔗 SEO optimized
- ♿ Accessible

## 🎯 Quick Customization (5 minutes)

### 1. Update Your Name
**File**: `app/page.tsx` (line ~46)
```typescript
Hi, I'm <Your Name>
```

### 2. Update About Section
**File**: `app/about/page.tsx`
- Update journey description (line ~60)
- Update career goals (line ~150)

### 3. Add Your Projects
**File**: `app/projects/page.tsx`
- Modify the `allProjects` array (line ~10)

### 4. Update Contact Info
**File**: `app/contact/page.tsx`
- Update email, phone, location (line ~60)

### 5. Add Social Links
**File**: `components/HeroSection.tsx`
- Update GitHub & LinkedIn URLs (line ~100)

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── page.tsx          ← Home page
│   ├── about/page.tsx    ← About page
│   ├── projects/page.tsx ← Projects page
│   ├── contact/page.tsx  ← Contact page
│   ├── layout.tsx        ← Main layout with theme
│   └── globals.css       ← Global styles
├── components/           ← React components
├── lib/                  ← Theme context
└── package.json
```

## 🛠️ Available Commands

```bash
# Development
npm run dev      # Start dev server

# Production
npm run build    # Build for production
npm start        # Start production server

# Linting
npm run lint     # Check code style
```

## 🎨 Customization Guide

See `CUSTOMIZATION_GUIDE.md` for detailed personalization instructions.

## 📚 Full Documentation

See `README_PORTFOLIO.md` for complete documentation.

## 🌐 Deploy (Free Options)

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Push code to GitHub
2. Connect to Netlify
3. Deploy!

### Other Options
- AWS Amplify
- GitHub Pages
- Railway
- Render

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| **Next.js 16** | Latest React framework with App Router |
| **TypeScript** | Full type safety |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Smooth animations |
| **Dark Mode** | Built-in theme toggle |
| **Responsive** | Mobile, tablet, desktop |
| **SEO Ready** | Meta tags configured |
| **Fast** | Static generation & optimization |

## 🤔 Common Questions

### Q: How do I change colors?
A: Search and replace `from-blue-600 to-purple-600` with your gradient colors in the tailwind classes.

### Q: How do I add more projects?
A: Edit the `allProjects` array in `app/projects/page.tsx` and add new project objects.

### Q: How do I add images?
A: Add images to `/public` folder and import using Next.js `Image` component.

### Q: Is dark mode fully implemented?
A: Yes! Dark mode is fully functional with localStorage persistence.

### Q: How do I deploy?
A: See deployment options above. Vercel is recommended for Next.js projects.

## 📞 Need Help?

1. Check `CUSTOMIZATION_GUIDE.md` for detailed instructions
2. Review component files in `/components` folder
3. Check Next.js docs: https://nextjs.org/docs
4. Check Tailwind docs: https://tailwindcss.com/docs

## 🎉 You're Ready!

Your professional portfolio is set up and ready to customize. 

Next steps:
1. ✏️ Personalize the content
2. 🔗 Add your social links
3. 📸 Add your projects
4. 🚀 Deploy online
5. 🎊 Share with the world!

---

**Happy coding! 💻**
