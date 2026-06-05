export default async function PostDetails({ params }) {
  console.log(params.id);
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  console.log(res);
  if (!res.ok) {
    return <h2>Post not found</h2>;
  }

  const post = await res.json();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
}
