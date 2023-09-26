// Define the KRA (Kenya Revenue Authority), NHIF, and NSSF values
const kraRate = 0.3;  // KRA tax rate (30%)
const nhifRates = {
  low: 1500,          // NHIF rate for low income earners
  high: 1700          // NHIF rate for high income earners
};
const nssfRate = 0.12; // NSSF contribution rate (12%)

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
  // Calculate gross salary by adding basic salary and benefits
  const grossSalary = basicSalary + benefits;

  // Calculate KRA (tax) deduction
  const kraDeduction = grossSalary * kraRate;

  // Calculate NHIF deduction based on income
  let nhifDeduction;
  if (grossSalary <= 5999) {
    nhifDeduction = nhifRates.low;
  } else {
    nhifDeduction = nhifRates.high;
  }

  // Calculate NSSF deduction
  const nssfDeduction = grossSalary * nssfRate;

  // Calculate net salary by subtracting deductions from gross salary
  const netSalary = grossSalary - (kraDeduction + nhifDeduction + nssfDeduction);

  return {
    grossSalary,
    kraDeduction,
    nhifDeduction,
    nssfDeduction,
    netSalary
  };
}

// Example usage:
const basicSalary = 50000;   // Replace with the actual basic salary
const benefits = 10000;      // Replace with the actual benefits

const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log('Gross Salary:', salaryDetails.grossSalary);
console.log('KRA Deduction:', salaryDetails.kraDeduction);
console.log('NHIF Deduction:', salaryDetails.nhifDeduction);
console.log('NSSF Deduction:', salaryDetails.nssfDeduction);
console.log('Net Salary:', salaryDetails.netSalary);







