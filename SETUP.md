# Portfolio Setup Guide

## Prerequisites

Before you can run this portfolio website, you need to have Node.js installed on your system.

### Installing Node.js

1. **Download Node.js**
   - Go to [https://nodejs.org/](https://nodejs.org/)
   - Download the LTS (Long Term Support) version
   - Choose the Windows installer (.msi) for your system architecture

2. **Install Node.js**
   - Run the downloaded installer
   - Follow the installation wizard
   - Make sure to check "Add to PATH" during installation
   - Complete the installation

3. **Verify Installation**
   - Close and reopen your terminal/PowerShell
   - Run: `node --version`
   - Run: `npm --version`
   - Both commands should return version numbers

## Project Setup

Once Node.js is installed, follow these steps:

1. **Navigate to Project Directory**
   ```bash
   cd portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The portfolio should now be running!

## Alternative Package Managers

If you prefer using other package managers:

### Yarn
```bash
yarn install
yarn dev
```

### pnpm
```bash
pnpm install
pnpm dev
```

## Troubleshooting

### "npm is not recognized"
- Node.js is not installed or not in PATH
- Restart your terminal after installing Node.js
- Check if Node.js is properly installed

### Port 3000 already in use
- Another application is using port 3000
- Kill the process or use a different port
- Run: `npm run dev -- -p 3001`

### Build Errors
- Make sure all dependencies are installed
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version compatibility

## Project Structure

After installation, you should see:
```
portfolio/
├── node_modules/        # Dependencies (created after npm install)
├── src/                 # Source code
├── package.json         # Project configuration
├── package-lock.json    # Dependency lock file (created after npm install)
├── tailwind.config.js   # Tailwind CSS configuration
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## Next Steps

1. **Customize Content**
   - Edit `src/data/portfolio.ts` with your information
   - Replace placeholder text and images
   - Update contact details

2. **Customize Styling**
   - Modify colors in `tailwind.config.js`
   - Update fonts in `src/app/globals.css`
   - Adjust animations in `src/animations/variants.ts`

3. **Deploy**
   - Build: `npm run build`
   - Deploy to Vercel, Netlify, or your preferred hosting service

## Support

If you encounter any issues:
1. Check this setup guide
2. Verify Node.js installation
3. Check the main README.md for more details
4. Open an issue on GitHub if problems persist

---

**Happy coding! 🚀**
