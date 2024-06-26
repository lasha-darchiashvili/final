import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { id, title, body } = await request.json();
  console.log(title);

  try {
    if (!title || !body) throw new Error("title and body are required");

    await sql`
    UPDATE bloggs
    SET title = ${title},
        body = ${body}
    WHERE id = ${id};
  `;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  try {
    const bloggs = await sql`SELECT * FROM bloggs;`;

    return NextResponse.json({ bloggs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
