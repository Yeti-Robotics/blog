export default async function Home() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL!}/api/pages/6733fc7a2e5e0a2f4311a28a`
  );

  const page = await data.json();

  console.log(page);
  return (
    <div>
      <pre>{JSON.stringify(page, null, 2)}</pre>
    </div>
  );
}
