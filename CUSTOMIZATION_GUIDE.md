# 🎨 Portfolio Customization Guide

This guide will help you personalize the portfolio website with your own information, projects, and branding.

## 📝 Step-by-Step Customization

### Step 1: Update Your Name & Title

#### File: `app/page.tsx` (Home Page)
```typescript
// Update the hero section
<h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
  Hi, I'm <span className="...">Your Name</span>  // ← Change "Your Name"
</h1>

<p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-4 max-w-3xl mx-auto">
  Software Engineering Student & Full Stack Developer  // ← Update title
</p>
```

#### File: `components/Footer.tsx`
```typescript
<p className="text-center text-gray-600 dark:text-gray-400 text-sm">
  © {currentYear} Your Name. All rights reserved.  // ← Change "Your Name"
</p>
```

### Step 2: Update Social Media Links

#### File: `components/HeroSection.tsx` & `components/Footer.tsx`
```typescript
// Replace these URLs with your actual profiles
{[
  { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/yourhandle', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:your.email@example.com', label: 'Email' },
].map((social) => (
  // ... render links
))}
```

### Step 3: Customize Home Page Projects

#### File: `app/page.tsx`
```typescript
const featuredProjects = [
  {
    title: 'Your Project Title',  // ← Change title
    description: 'Brief description of what the project does and its impact.',  // ← Update
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],  // ← Add your tech stack
    githubUrl: 'https://github.com/yourusername/project-name',  // ← Your GitHub repo
    liveUrl: 'https://your-project-demo.com',  // ← Your live demo link
    image: '🚀',  // ← Choose an emoji that represents the project
  },
  // ... add more projects
];
```

### Step 4: Update About Page Content

#### File: `app/about/page.tsx`

1. **Update Journey Section**:
```typescript
<p>
  I'm a software engineering student with a passion for building...
  // Replace this with your actual story
</p>
```

2. **Update Statistics**:
```typescript
{[
  { number: '15+', label: 'Projects Built' },  // ← Update with your numbers
  { number: '2+', label: 'Years Experience' },
  // ...
]}
```

3. **Update Skills** - The skills section uses React Icons. Here are popular icons:
   - Frontend: React, Next.js, TypeScript, Tailwind CSS, Vue, Angular
   - Backend: Node.js, Python, PostgreSQL, MongoDB, Django, Express
   - Tools: Git, Docker, AWS, Firebase, Figma, VSCode

   Import from `react-icons/si` (Skill Icons) or other react-icons packages.

### Step 5: Add All Your Projects

#### File: `app/projects/page.tsx`
```typescript
const allProjects = [
  {
    title: 'Project Name',
    description: 'What this project does and why it matters',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/...',
    liveUrl: 'https://your-project.com',
    image: '📱',  // Choose emoji or use image placeholder
  },
  // ... add all your projects (8 shown in template)
];
```

### Step 6: Customize Contact Information

#### File: `app/contact/page.tsx` & `components/ContactForm.tsx`
```typescript
{[
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'your.email@example.com',  // ← Your email
    href: 'mailto:your.email@example.com',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+1 (555) 123-4567',  // ← Your phone number
    href: 'tel:+15551234567',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'City, State, Country',  // ← Your location
    href: '#',
  },
]}
```

### Step 7: Update SEO Metadata

#### File: `app/layout.tsx`
```typescript
export const metadata: Metadata = {
  title: "Your Name | Portfolio | Software Engineer",  // ← Update title
  description: "Brief description of your skills and what you offer",  // ← Update
  keywords: ["developer", "portfolio", "your-name", "your-skills"],  // ← Add keywords
};
```

### Step 8: Customize 404 Page

#### File: `app/not-found.tsx`
```typescript
<motion.h1>
  404
</motion.h1>
<h2 className="text-3xl font-bold ...">
  Page Not Found  // Keep as is or customize message
</h2>
```

## 🎯 Emoji Selection Guide

### Project Emojis
- **E-commerce**: 🛒 🏪 🛍️
- **Tasks**: ✅ 📋 📌
- **Chat**: 💬 💭 📱
- **Portfolio**: 🌐 💼 📊
- **Weather**: 🌤️ ⛅ 🌦️
- **Movies**: 🎬 🎥 📽️
- **Code**: 💾 📝 ⚙️
- **Fitness**: 💪 🏋️ 🥗

### Skill Icons (from React Icons)
```bash
npm search react-icons
# Popular packages:
# - react-icons/si (Simple Icons) - Best for tech logos
# - react-icons/fa (Font Awesome)
# - react-icons/bi (Bootstrap Icons)
```

## 🎨 Color Customization

The portfolio uses a blue-to-purple gradient as the primary color scheme.

### Change Primary Colors

Update all instances of `from-blue-600 to-purple-600`:

```bash
# Search and replace in your IDE:
# Find: from-blue-600 to-purple-600
# Replace with: from-green-600 to-emerald-600  # or your colors
```

### Tailwind Color Options
- Blue-Purple: `from-blue-600 to-purple-600` (current)
- Green-Emerald: `from-green-600 to-emerald-600`
- Pink-Rose: `from-pink-600 to-rose-600`
- Indigo-Violet: `from-indigo-600 to-violet-600`
- Orange-Red: `from-orange-600 to-red-600`

## 📸 Add Profile Image

### Option 1: Use Emoji (Default)
Keep the current emoji in `HeroSection.tsx`:
```typescript
<div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-6xl">
  👨‍💻  // Replace with your emoji
</div>
```

### Option 2: Add Real Image
1. Add image to `/public` folder (e.g., `profile.png`)
2. Update `HeroSection.tsx`:
```typescript
import Image from 'next/image';

<Image
  src="/profile.png"
  alt="Profile"
  width={128}
  height={128}
  className="w-full h-full rounded-full object-cover"
/>
```

## 🔗 Important Links to Update

- **GitHub Profile**: Update all `https://github.com` links
- **LinkedIn Profile**: Update all `https://linkedin.com` links
- **Email**: Update all `mailto:` links
- **Live Demo URLs**: Replace `https://example.com` with actual URLs
- **Twitter/Social**: Update with your handles

## ✅ Customization Checklist

- [ ] Update your name throughout the site
- [ ] Update job title/role description
- [ ] Add your GitHub link
- [ ] Add your LinkedIn link
- [ ] Add your email address
- [ ] Add your phone number
- [ ] Update your location
- [ ] Add 4+ of your best projects
- [ ] Update technologies you know
- [ ] Customize about page story
- [ ] Update career goals section
- [ ] Choose color scheme
- [ ] Add profile image
- [ ] Update all social media links
- [ ] Test all links work
- [ ] Test dark mode
- [ ] Test mobile responsiveness

## 🚀 Next Steps

1. **Personalize Content**: Follow the steps above to add your information
2. **Add Real Projects**: Replace sample projects with your actual work
3. **Update Links**: Ensure all social/demo links are correct
4. **Test Thoroughly**: Test on different devices and browsers
5. **Deploy**: Ready to deploy to Vercel, Netlify, or your hosting

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

**Happy customizing! 🎉**
