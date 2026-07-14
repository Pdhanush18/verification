# CertVerify - Certificate Verification Portal

A modern, fully responsive certificate verification platform built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**. This project converts your original HTML design into a production-ready Next.js application with component-based architecture.

## 🚀 Project Features

- **Modern Architecture**: Built with Next.js App Router and React Server Components
- **TypeScript Support**: Full type safety across the application
- **Responsive Design**: Mobile-first design that works perfectly on all devices
- **Custom Tailwind Theme**: Enterprise-grade color palette and typography system
- **Component-Based**: Modular, reusable React components
- **Performance Optimized**: Built-in Next.js optimization and caching
- **Material Icons**: Integrated Google Material Symbols for beautiful iconography

## 📁 Project Structure

```
certverify/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── globals.css          # Global styles and animations
│   ├── page.tsx             # Home page (main entry point)
│   ├── favicon.ico
│   └── ...
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── HeroSection.tsx       # Hero banner with CTA
│   ├── TrustedBySection.tsx  # Trusted institutions display
│   ├── WhyCertVerifySection.tsx # 3-pillar features
│   ├── StatsSection.tsx      # Key metrics display
│   ├── BentoGridSection.tsx  # Feature highlight grid
│   ├── TrustIndicators.tsx   # Trust badges
│   └── Footer.tsx            # Site footer with links
├── public/                  # Static assets
├── node_modules/            # Dependencies
├── tailwind.config.ts        # Tailwind configuration with custom theme
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
├── package.json
└── README.md
```

## 🎨 Key Components

### Header.tsx
- Fixed navigation bar with logo and menu
- Sign Up and Help buttons
- Mobile-responsive hamburger menu

### HeroSection.tsx
- Gradient background with floating animation
- Main headline and value proposition
- Call-to-action buttons
- Verification tool visual mockup
- Animated verification input

### TrustedBySection.tsx
- Showcase of institutional logos/names
- Grayscale styling for professional appearance

### WhyCertVerifySection.tsx
- 3-pillar feature showcase (Security, Speed, Acceptance)
- Hover effects with color transitions
- Icon-based visual hierarchy

### StatsSection.tsx
- Key performance metrics
- 4-column grid layout with large numbers

### BentoGridSection.tsx
- Asymmetric grid layout (8/4 column split)
- Feature highlight with background image
- Additional stat boxes

### TrustIndicators.tsx
- Security badges and certifications
- Hover glow effects
- Left-aligned text layout

### Footer.tsx
- 4-column link structure
- Social media links
- Copyright information

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd certverify
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

The page will automatically reload when you make changes.

### Build for Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.ts` to customize colors:

```typescript
colors: {
  'primary': '#003d9b',
  'on-surface': '#101c2d',
  // ... more colors
}
```

### Typography

Customize fonts in `tailwind.config.ts`:

```typescript
fontFamily: {
  'sans': ['Hanken Grotesk', 'sans-serif'],
  // ... more fonts
}
```

### Add New Sections

1. Create a new component in `components/YourSection.tsx`
2. Import it in `app/page.tsx`
3. Add it to the main render

Example:
```typescript
// components/YourSection.tsx
export default function YourSection() {
  return (
    <section className="py-32 bg-surface">
      {/* Your content */}
    </section>
  );
}

// app/page.tsx
import YourSection from '@/components/YourSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen">
        {/* ... existing sections */}
        <YourSection />
      </main>
      <Footer />
    </>
  );
}
```

## 📦 Dependencies

- **next**: Next.js framework
- **react**: React library
- **typescript**: Type safety
- **tailwindcss**: Utility-first CSS framework
- **postcss**: CSS processing

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

The project can be deployed to:
- AWS Amplify
- Netlify
- Docker containers
- Traditional Node.js servers

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Features of the Design

1. **Responsive Grid Layout**: Automatically adapts from 1 column on mobile to multi-column on desktop
2. **Smooth Animations**: Float animations and hover effects
3. **Accessible Icons**: Material Symbols for consistent iconography
4. **Color-Coded Sections**: Distinct sections with custom background colors
5. **Interactive Elements**: Hover states and transitions throughout
6. **Professional Typography**: Custom Hanken Grotesk font with multiple sizes

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is created as a demonstration of modern Next.js best practices.

## 🤝 Contributing

Feel free to extend and customize this project for your needs. You can:
- Add more sections
- Modify the color scheme
- Add animations
- Integrate with backend APIs
- Add authentication

## 📞 Support

For questions or issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [Tailwind CSS documentation](https://tailwindcss.com/docs)
3. Check component implementations in the `components/` folder

---

**Built with ❤️ using Next.js 15, React 19, and Tailwind CSS**
