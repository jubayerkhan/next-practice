export default async function FetchData() {
  const data = await fetch("https://api.vercel.app/blog");
  const blogs = await data.json();
  return (
    <ul>
      {blogs.map((blog) => (
        <li key={blog.id}>{blog.title}</li>
      ))}
    </ul>
  );
}
