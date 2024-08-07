"use server";

export interface Company {
  id: string;
  name: string;
  description: string;
  location: string;
  website: string;
  revenue: number;
  employees: number;
}

export const fetchCompanies = async () => {
  const res = await fetch("https://venefish.enesien.com/api/companies");
  const data = await res.json();

  return {
    companies: data as Company[],
    revenueTotal: data.reduce(
      (acc: number, company: Company) => acc + company.revenue,
      0
    ),
    employeesTotal: data.reduce(
      (acc: number, company: Company) => acc + company.employees,
      0
    ),
  };
};
