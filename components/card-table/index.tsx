import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import { useCompanies } from "@/lib/useCompanies";
import { formatMoney } from "@/lib/utils";

export default ({
  companies,
  revenueTotal,
  employeesTotal,
}: ReturnType<typeof useCompanies>) => {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Companies List</CardTitle>
        <CardDescription>
          This is a list of super cool companies
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Website</TableHead>
              <TableHead>Revenue</TableHead>
              <TableHead>Employees</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {companies.map((company) => (
              <TableRow key={company.id}>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.location}</TableCell>
                <TableCell>{company.website}</TableCell>
                <TableCell>{formatMoney(company.revenue)}</TableCell>
                <TableCell>{company.employees}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell className="uppercase" colSpan={3}>
                Total
              </TableCell>
              <TableCell>{formatMoney(revenueTotal)}</TableCell>
              <TableCell>{employeesTotal}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
};
