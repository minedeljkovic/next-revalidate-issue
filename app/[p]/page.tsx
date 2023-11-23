export function generateStaticParams() {
  return ["a", "b"].map((p) => ({ p }));
}
export const dynamicParams = false;

export default async function WithStaticParam({
  params: { p },
}: {
  params: { p: string };
}) {
  const time = await fetch("https://worldtimeapi.org/api/ip", {
    next: { tags: ["current-time"] },
  })
    .then((_) => _.json())
    .then(({ unixtime }) => unixtime);

  return `${p} ${time.toString()}`;
}
