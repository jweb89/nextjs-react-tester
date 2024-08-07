"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCompanies } from "@/lib/useCompanies";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import { formatMoney } from "@/lib/utils";
import CardTable from "@/components/card-table";

export default function Home() {
  const { companies, employeesTotal, revenueTotal } = useCompanies();

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-tl from-blue-400 to-blue-700 text-white space-y-6">
      <div className="bg-white/10 p-4">
        <div className="container">
          <h2 className="font-ornate text-2xl font-semibold tracking-tighter ">
            React Next.js Tester
          </h2>
        </div>
      </div>
      <div className="container">
        <CardTable
          companies={companies}
          employeesTotal={employeesTotal}
          revenueTotal={revenueTotal}
        />
      </div>
    </div>
  );
}
