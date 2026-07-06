# EmpLinked360 Design System

This document outlines the strict design guidelines for EmpLinked360 to ensure a highly professional, enterprise-grade aesthetic, expressly avoiding any "vibe-coded" or overly playful layouts.

## Core Philosophy
The design must evoke trust, stability, and high-end software engineering (similar to Stripe, Vercel, or Apple). 
- **No giant solid color blocks** for backgrounds.
- **No excessive gradients** or neon colors.
- **Maximum whitespace** for readability.
- **Subtle borders** and refined shadows.

## Color Palette
### 1. Backgrounds
- **Primary Page Background**: Clean White (`bg-white`)
- **Secondary Background**: Extremely light slate/gray (`bg-slate-50` or `bg-gray-50`) used only to differentiate sections slightly.
- **Dark Mode**: Deep, muted slate (`bg-slate-950`), avoiding pitch black.

### 2. Typography Colors
- **Headings**: Deep, almost black slate (`text-slate-900`) for maximum contrast and authority.
- **Body Text**: Muted slate (`text-slate-600`) for comfortable long-form reading.
- **Accents**: A single, sophisticated primary color. We will use a professional, subdued Corporate Blue (`text-blue-700`).

### 3. Borders & Dividers
- Use ultra-thin, subtle borders (`border-slate-200`) to separate components, rather than relying on heavy background colors.

## Component Styling
- **Cards**: Clean white backgrounds with 1px `slate-200` borders and very subtle, soft shadows (`shadow-sm`).
- **Icons**: Small, precise, and monochromatic (or dual-tone using the corporate blue), rather than massive glowing colorful icons.
- **Buttons**: Sharp, well-defined buttons. Primary buttons use the corporate blue with white text. Secondary buttons use transparent backgrounds with thin borders.

## Layout & Typography Structure
- **Typography Restrictions**: Absolute ban on `font-extrabold`, `text-6xl`, and `text-7xl`. These are too aggressive for an enterprise product.
- **Headings**: Use `text-3xl` or `text-4xl` for main page heroes, and `text-2xl` for section titles. Weight should be `font-semibold` or `font-bold` max.
- **Body Text**: Standardize on `text-base` (16px) with a comfortable `leading-relaxed` line height.
- **Grids**: Use clean, aligned grids (like Bento boxes or standard 3-column layouts) with consistent padding (`gap-8`).

## 5. Feature Presentation (Use-Case Driven)
When showcasing features on marketing or landing pages, avoid abstract technical representations (e.g., generic server racks, cloud icons, or abstract geometric shapes). Instead, visually demonstrate the **HR problem being solved**:
- **Tangible UI Snippets**: Show realistic code-based mockups of the software in action (e.g., a face scan for attendance, a map for field tracking, a dynamic payslip for payroll).
- **Action-Oriented**: Emphasize the "resolution" of the problem visually (e.g., "Proxy Prevented", "Location Verified", "Payroll Calculated").
- **Human-Centric**: The design should remind the viewer that the software manages *people* and *time*, not just data.
