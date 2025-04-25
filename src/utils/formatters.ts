// Format number as currency
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: value < 1 ? 4 : 2,
    maximumFractionDigits: value < 1 ? 6 : 2,
  }).format(value);
}

// Format number with commas
export function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value);
}

// Format large numbers with abbreviations (K, M, B, T)
export function formatCompactNumber(value: number): string {
  if (value >= 1e12) {
    return `$${(value / 1e12).toFixed(2)}T`;
  } else if (value >= 1e9) {
    return `$${(value / 1e9).toFixed(2)}B`;
  } else if (value >= 1e6) {
    return `$${(value / 1e6).toFixed(2)}M`;
  } else if (value >= 1e3) {
    return `$${(value / 1e3).toFixed(2)}K`;
  }
  return `$${value.toFixed(2)}`;
}

// Format percentage
export function formatPercentage(value: number): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
}

// Get CSS class for percentage change
export function getPercentageColorClass(value: number): string {
  if (value > 0) {
    return 'text-green-500';
  } else if (value < 0) {
    return 'text-red-500';
  }
  return 'text-gray-500';
}

// Format supply
export function formatSupply(value: number, symbol: string): string {
  return `${formatNumber(Math.round(value))} ${symbol}`;
}