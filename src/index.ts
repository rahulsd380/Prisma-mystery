import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {

    // Create data into table
  const result = await prisma.user.create({
    data: {
      name: "Rahul Sutradhar",
      email: "rahul1@example.com",
      address: "Cumilla, Bangladesh",
    },
  });
  console.log(result);
};

main();
