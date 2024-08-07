import CardTable from "@/components/card-table";
import { fetchCompanies } from "@/lib/actions";
import { notFound } from "next/navigation";

const fetchData = async () => {
  try {
    return await fetchCompanies();
  } catch (e) {
    console.log(e);
  }
  return null;
};

export default async function Home() {
  const data = await fetchData();
  if (!data) {
    return notFound();
  }

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
          companies={data.companies}
          revenueTotal={data.revenueTotal}
          employeesTotal={data.employeesTotal}
        />
      </div>
    </div>
  );
}
