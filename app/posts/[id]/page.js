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
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex gap-4 items-center mb-4">
        <h1 className="text-4xl font-bold">{post.id}.</h1>
        <h1 className="text-3xl font-bold uppercase">{post.title}</h1>
      </div>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
}
