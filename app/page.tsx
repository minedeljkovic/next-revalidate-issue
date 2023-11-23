/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  const time = await fetch("https://worldtimeapi.org/api/ip", {
    next: { tags: ["current-time"] },
  })
    .then((_) => _.json())
    .then(({ unixtime }) => unixtime);

  return time.toString()
}
