let users = [
  { id: 1, name: "Jubayer" },
];

export async function GET() {
  return Response.json(users);
}

export async function POST(req) {
  const newUser = await req.json();
  users.push(newUser);
  return Response.json(users);
}

export async function PUT(req) {
  const updated = await req.json();
  users = users.map(u =>
    u.id === updated.id ? updated : u
  );
  return Response.json(users);
}

export async function DELETE(req) {
  const { id } = await req.json();
  users = users.filter(u => u.id !== id);
  return Response.json(users);
}
