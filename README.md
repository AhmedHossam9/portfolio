# Portfolio Website

A stunning, professional-grade personal portfolio website built with Next.js, React, and Framer Motion. This portfolio features smooth animations, micro-interactions, and a modern UI design that's fully responsive and includes light/dark mode.

## ✨ Features

- **Modern Design**: Clean, minimalist design with premium aesthetics
- **Smooth Animations**: Framer Motion powered animations and micro-interactions
- **Responsive Layout**: Fully responsive design for all devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Performance Optimized**: Built with Next.js for optimal performance
- **Accessibility**: WCAG compliant with proper semantic HTML
- **SEO Ready**: Optimized meta tags and structured data

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter + Poppins)
- **State Management**: React Context API

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── Navbar.tsx     # Navigation component
│   ├── Hero.tsx       # Hero section
│   ├── About.tsx      # About section
│   ├── Projects.tsx   # Projects section
│   ├── ProjectCard.tsx # Individual project card
│   ├── Skills.tsx     # Skills section
│   ├── Contact.tsx    # Contact section
│   └── Footer.tsx     # Footer component
├── lib/               # Utility functions
│   ├── theme-context.tsx # Theme context
│   └── utils.ts       # Helper functions
├── data/              # Data files
│   └── portfolio.ts   # Portfolio data
└── animations/        # Animation variants
    └── variants.ts    # Framer Motion variants
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update the placeholder data in `src/data/portfolio.ts`:
- Replace `[Your Name]` with your actual name
- Update project descriptions and technologies
- Modify skills and expertise levels
- Change contact information and social links

### Styling
- Colors: Modify the color palette in `tailwind.config.js`
- Fonts: Update Google Fonts imports in `globals.css`
- Animations: Adjust timing and effects in `src/animations/variants.ts`

### Content
- Projects: Add/remove projects in the projects array
- Skills: Modify the skills array with your expertise
- About: Update the about text with your story
- Contact: Change contact details and form fields

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌙 Theme System

- **Light Mode**: Clean, bright design with subtle shadows
- **Dark Mode**: Dark theme with proper contrast ratios
- **Auto-detect**: Automatically detects system preference
- **Persistent**: Remembers user's choice

## 🎭 Animation Features

- **Entrance Animations**: Elements animate in when entering viewport
- **Hover Effects**: Interactive hover states with smooth transitions
- **Scroll Animations**: Staggered animations on scroll
- **Micro-interactions**: Button presses, form interactions, and more

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder

### Other Platforms
The project can be deployed to any static hosting service.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration Files

- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `next.config.js` - Next.js configuration
- `postcss.config.js` - PostCSS configuration

## 📚 Dependencies

### Production
- `next`: React framework
- `react`: UI library
- `framer-motion`: Animation library
- `lucide-react`: Icon library
- `clsx`: Class name utility
- `tailwind-merge`: Tailwind class merging

### Development
- `typescript`: Type safety
- `tailwindcss`: Utility-first CSS
- `autoprefixer`: CSS vendor prefixes
- `eslint`: Code linting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to:
- Open an issue on GitHub
- Contact me through the contact form
- Reach out on social media

---

**Happy coding! 🚀**
