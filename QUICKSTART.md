# 🚀 Quick Start Guide

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

## Installation Steps

### 1. Install Dependencies
```powershell
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- All animation libraries

### 2. Run Development Server
```powershell
npm run dev
```

The site will be available at: **http://localhost:3000**

### 3. Build for Production
```powershell
npm run build
npm start
```

## Troubleshooting

### If you see TypeScript errors:
The errors shown are normal during development and will resolve once dependencies are installed and the dev server is running.

### If animations aren't working:
1. Make sure all dependencies are installed
2. Clear the `.next` cache: `Remove-Item -Recurse -Force .next`
3. Restart the dev server

### If styles aren't loading:
1. Check that `tailwind.config.ts` is present
2. Verify `postcss.config.js` exists
3. Restart dev server

## Development Tips

### Hot Reload
The dev server supports hot module replacement - changes are reflected instantly.

### Preview Dark Mode
- Dark mode is enabled by default
- System preference detection is active
- You can toggle themes in browser DevTools

### Customize Content
1. **Programs:** Edit `components/sections/Programs.tsx`
2. **Images:** Replace Unsplash URLs with your own
3. **Colors:** Modify `tailwind.config.ts`
4. **Animations:** Adjust in each component

### Performance
- All images should be optimized (use WebP format)
- Animations are GPU-accelerated
- Code splitting is automatic with Next.js

## Project Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Next Steps

1. ✅ Install dependencies
2. ✅ Run dev server
3. 📝 Customize content
4. 🎨 Adjust colors/branding
5. 🖼️ Replace images
6. 🚀 Deploy (Vercel recommended)

## Deployment

### Recommended: Vercel
```powershell
npm install -g vercel
vercel
```

### Alternative: Netlify, AWS, etc.
Build the static export:
```powershell
npm run build
```

Then deploy the `.next` folder.

---

**Enjoy your stunning new website! 🎉**
