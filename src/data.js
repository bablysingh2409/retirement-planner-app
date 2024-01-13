// data.js
const goalAmount = 300000; // Employee's retirement savings goal
const monthlyIncome = 300; // Employee's estimated monthly income

const employeeContributionPercentage = 0.12; // Employee contributes 12%
const employerContributionPercentage = 0.24; // Employer contributes 24%

const retirementData = [];
let totalInvestment = 0;

for (let age = 20; age <= 65; age++) {
  const monthlyInvestment = monthlyIncome * (employeeContributionPercentage + employerContributionPercentage);
  const employeeContribution = monthlyIncome * employeeContributionPercentage;
  const employerContribution = monthlyIncome * employerContributionPercentage;

  totalInvestment += monthlyInvestment;

  retirementData.push({
    age,
    employer: employerContribution,
    employee: employeeContribution,
    totalInterest: calculateCompoundInterest(totalInvestment, age),
    totalInvestment: totalInvestment.toFixed(2),
  });
}

function calculateCompoundInterest(principal, years) {
  const interestRate = 0.06; 
  const compoundedTimesPerYear = 12; 

  const totalCompoundedTimes = years * compoundedTimesPerYear;
  const ratePerPeriod = interestRate / compoundedTimesPerYear;

  const compoundInterest = principal * Math.pow(1 + ratePerPeriod, totalCompoundedTimes) - principal;

  return compoundInterest.toFixed(2);
}

export default retirementData;
