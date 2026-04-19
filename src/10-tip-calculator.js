/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  if (typeof billAmount !== "number" || billAmount <= 0 || typeof serviceRating !== "number"){
    return null
  }

  return serviceRating === 5 ? {tipPercentage: 25, tipAmount: 0.25 * billAmount, totalAmount: (0.25 * billAmount) + billAmount} :
    serviceRating === 4 ? {tipPercentage: 20, tipAmount: 0.20 * billAmount, totalAmount: (0.20 * billAmount) + billAmount} :
    serviceRating === 3 ? {tipPercentage: 15, tipAmount: 0.15 * billAmount, totalAmount: (0.15 * billAmount) + billAmount} :
    serviceRating === 2 ? {tipPercentage: 10, tipAmount: 0.10 * billAmount, totalAmount: (0.10 * billAmount) + billAmount} :
    serviceRating === 1 ? {tipPercentage: 5, tipAmount: 0.05 * billAmount, totalAmount: (0.05 * billAmount) + billAmount} : null

}
