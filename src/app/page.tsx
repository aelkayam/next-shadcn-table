import { User, columns } from "@/app/users/columns";
import { DataTable } from "@/components/data-table";
import { ModeToggle } from "@/components/mode-toggle";

async function getUsers(): Promise<User[]> {
  const res = await fetch(
    "https://6609847d0f324a9a2883613c.mockapi.io/api/users"
  );
  const data = await res.json();
  return data;
}

export default async function Page() {
  const data = await getUsers();

  return (
    <section className="py-24">
      <div className="container">
        <div className="flex items-center justify-between mb-2">
          <h1 className="mb-6 text-3xl font-bold">All Users</h1>
          <ModeToggle />
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
