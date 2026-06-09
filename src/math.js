export function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

export function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}