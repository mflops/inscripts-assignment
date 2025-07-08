# React Spreadsheet Assignment

A pixel-perfect React spreadsheet prototype that replicates a Google Sheets/Excel-like experience.

## Features

- **Pixel-perfect Design**: Matches the Figma design specification
- **Google Sheets Experience**: Editable cells with keyboard navigation
- **Interactive Components**: All buttons log to console
- **Column Resizing**: Drag to resize columns
- **Status Management**: Color-coded status badges with validation

## Tech Stack

- React 18 + TypeScript (strict mode)
- Vite for build tooling
- Tailwind CSS for styling
- @tanstack/react-table for grid functionality

## Setup

```bash
npm install
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## Project Structure

```
src/
├── components/          # React components
│   ├── SpreadsheetTable.tsx    # Main spreadsheet
│   ├── columns.tsx             # Column definitions
│   ├── Toolbar.tsx             # Action toolbar
│   └── ...                     # Other UI components
├── constants/           # Status definitions
├── data.ts             # Sample data
└── App.tsx             # Main app
```

## Acceptance Criteria Status

✅ Pixel-perfect layout to Figma  
✅ Google Sheets/Excel-like experience  
✅ All buttons/tabs change state or log to console  
✅ Code passes lint and type-check  
✅ Clean commit history  

## Stretch Goals

✅ Keyboard navigation (arrow keys)  
✅ Column resize functionality  

## Trade-offs & Decisions

### Technical Decisions
- **@tanstack/react-table**: Chosen for robust grid functionality over custom implementation
- **Local State**: No external state management needed for this prototype
- **TypeScript Strict**: Enabled for better code quality

### Design Decisions
- **Color Accuracy**: Exact color matching with Figma design
- **Accessibility**: Proper focus management and keyboard navigation
- **Performance**: Optimized with useCallback and efficient state management

---

**Built with React 18, TypeScript, and Tailwind CSS**
