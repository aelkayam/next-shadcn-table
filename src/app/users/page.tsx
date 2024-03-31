import { User, columns } from "./columns";
import { DataTable } from "@/components/data-table";

async function getData(): Promise<User[]> {
  const randomNumber = Math.floor(Math.random() * 100);
  const gender = Math.random() > 0.5 ? "men" : "women";

  return [
    {
      id: "728ed52f",
      name: "Alex Smith",
      email: "JS@example.com",
      image: `https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`,
      lastSeen: "2021-09-09T12:34:56Z",
    },

    {
      id: "759jg52f",
      name: "Chris Brown",
      email: "CB@example.com",
      image: `https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`,
      lastSeen: "2021-09-09T12:34:56Z",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="mb-6 text-3xl font-bold">All Users</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
