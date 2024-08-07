import { useEffect, useState } from "react";
import { Company, fetchCompanies } from "./actions";

export const useCompanies = () => {
  const [state, setState] = useState<{
    companies: Company[];
    revenueTotal: number;
    employeesTotal: number;
  }>({
    companies: [],
    revenueTotal: 0,
    employeesTotal: 0,
  });

  useEffect(() => {
    fetchCompanies()
      .then((data) => {
        setState(data);
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to fetch companies");
      });
  }, []);

  return state;
};
