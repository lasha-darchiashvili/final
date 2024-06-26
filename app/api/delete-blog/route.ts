import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  const { id } = await request.json();

  try {
    if (!id) throw new Error("ID is required");

    await sql`DELETE FROM bloggs WHERE id = ${id};`;

    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
