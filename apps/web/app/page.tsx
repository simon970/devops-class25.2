
import { prismaClient } from "@repo/db/client";


export default async function Home() {
  const user = await prismaClient.users.findFirst();

  return (
    <div>
      name:
      {user?.username}
      password:
      {user?.password}
      <br />
      <div>
        hey there
      </div>
    </div>
  );
}
