# CryptoTracker

Real-time cryptocurrency price tracker with simulated market data.

![CryptoTracker Demo](https://i.imgur.com/XYZ123.gif)

## Features

- Real-time price updates every 2 seconds
- Market cap and volume tracking
- Price change indicators (1h, 24h, 7d)
- Supply information with visual indicators
- 7-day price history charts
- Responsive design

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Charts**: Chart.js with react-chartjs-2
- **Icons**: Lucide React
- **Build Tool**: Vite

## Architecture

```
src/
├── app/              # Redux store setup
├── components/       # React components
├── features/         # Redux slices and selectors
├── services/         # Business logic
├── types/           # TypeScript definitions
└── utils/           # Helper functions
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Rohits906/crypto-tracker.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## Note

This project uses simulated data for demonstration purposes. In a production environment, you would want to connect to a real cryptocurrency API.