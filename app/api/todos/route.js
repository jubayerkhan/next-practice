import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("crudApp");

  const todos = await db.collection("todos").find({}).toArray();

  return Response.json(todos);
}

export async function POST(req) {
  const body = await req.json();

  const client = await clientPromise;
  const db = client.db("crudApp");

  const result = await db.collection("todos").insertOne({
    text: body.text,
    completed: false,
  });

  return Response.json(result);
}

export async function PUT(req) {
  const body = await req.json();

  const client = await clientPromise;
  const db = client.db("crudApp");

  await db
    .collection("todos")
    .updateOne(
      { _id: new ObjectId(body.id) },
      { $set: { completed: body.completed } },
    );

  return Response.json({ success: true });
}

export async function DELETE(req) {
  const body = await req.json();

  const client = await clientPromise;
  const db = client.db("crudApp");

  await db.collection("todos").deleteOne({
    _id: new ObjectId(body.id),
  });

  return Response.json({ success: true });
}
