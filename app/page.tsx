import { redirect } from "next/navigation";

type HomeProps = {
  params: { [key: string]: string };
};

export default async function Home({ params }: HomeProps): Promise<void> {
  redirect("/main");
}