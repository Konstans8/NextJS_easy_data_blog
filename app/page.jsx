import Link from "next/link";

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
  const data = await res.json(); 
  return data;
}


export default async function Home() {
  const posts = await fetchData();

  return (
    <>
      <h1>Main Page</h1>
      {posts.map(el => {
        return <div key={el.id} className="post">
          <h2>{el.title}</h2>
          <p>{el.body}</p>
          <Link href={`/post/` + el.id}>Post details</Link>
        </div>
      })}
    </>
  )
}
