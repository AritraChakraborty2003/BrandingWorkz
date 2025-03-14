import Link from "next/link";
import axios from "axios";
export default async function Home() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  // ✅ Delay for 2 seconds
  await delay(1200);
  const data = await axios
    .get("https://api.codemap.online/api/v1/technologies")
    .then((res) => res.data);

  return (
    <>
      <p className="text-6xl font-extrabold">Hello, Next.js! 🚀</p>
      {data &&
        data.map((item: { _id: string; name: string; category: string }) => (
          <div key={item._id} className="">
            <p>{item.name}</p>
          </div>
        ))}

      <button className="bg-black p-2 text-white">
        <Link href="/about"> Click Me </Link>
      </button>
    </>
  );
}
