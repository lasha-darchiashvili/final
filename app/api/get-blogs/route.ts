import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;
export async function GET() {
  try {
    const bloggs = await sql`SELECT * FROM bloggs ORDER BY id;`;
    return NextResponse.json({ bloggs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
