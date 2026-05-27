/*
AI: Certainly! You can cache the tax calculation using useMemo() hook. Here’s how you can do it:
*/

import React, { useState, useMemo } from "react";

const TAX_BANDS = [
  { limit: 12570, rate: 0 },
  { limit: 50270, rate: 0.2 },
  { limit: 125140, rate: 0.4 },
  { limit: Infinity, rate: 0.45 },
];

function calculateIncomeTax(income) {
  let tax = 0;
  let previousLimit = 0;

  for (const band of TAX_BANDS) {
    if (income > band.limit) {
      tax += (band.limit - previousLimit) * band.rate;
      previousLimit = band.limit;
    } else {
      tax += (income - previousLimit) * band.rate;
      break;
    }
  }

  return tax;
}

export default function TaxCalculator() {
  const [income, setIncome] = useState(0);

  const tax = useMemo(() => {
    return calculateIncomeTax(income);
  }, [income]);

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold">UK Income Tax Calculator</h1>
      <input
        type="number"
        className="border p-2 w-full rounded"
        value={income}
        onChange={(e) => setIncome(Number(e.target.value))}
        placeholder="Enter your annual income"
      />
      <div className="text-lg">
        Estimated Tax: <strong>£{tax.toFixed(2)}</strong>
      </div>
    </div>
  );
}
