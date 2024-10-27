import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Create single data into table
  //   const result = await prisma.user.create({
  //     data: {
  //       name: "Rahul Sutradhar",
  //       email: "rahul1@example.com",
  //       address: "Cumilla, Bangladesh",
  //     },
  //   });
  //   console.log(result);

  // Create multiple data into table

  // const createMany = await prisma.user.createMany({
  //   data: [
  //       {
  //           name: "Rahul Sutradhar",
  //           email: "rahul2@example.com",
  //           address: "Cumilla, Bangladesh",
  //         },
  //         {
  //           name: "Arjun Dev",
  //           email: "arjun.dev@example.com",
  //           address: "Dhaka, Bangladesh",
  //         },
  //         {
  //           name: "Nila Sarker",
  //           email: "nila.sarker@example.com",
  //           address: "Chittagong, Bangladesh",
  //         },
  //         {
  //           name: "Sameer Islam",
  //           email: "sameer.islam@example.com",
  //           address: "Sylhet, Bangladesh",
  //         },
  //         {
  //           name: "Tania Rahman",
  //           email: "tania.rahman@example.com",
  //           address: "Khulna, Bangladesh",
  //         },
  //         {
  //           name: "Rohan Chatterjee",
  //           email: "rohan.chatterjee@example.com",
  //           address: "Rajshahi, Bangladesh",
  //         },
  //         {
  //           name: "Priya Das",
  //           email: "priya.das@example.com",
  //           address: "Cumilla, Bangladesh",
  //         },
  //         {
  //           name: "Farhan Ahmed",
  //           email: "farhan.ahmed@example.com",
  //           address: "Barisal, Bangladesh",
  //         },
  //         {
  //           name: "Maya Khatun",
  //           email: "maya.khatun@example.com",
  //           address: "Jessore, Bangladesh",
  //         },
  //         {
  //           name: "Adnan Hasan",
  //           email: "adnan.hasan@example.com",
  //           address: "Mymensingh, Bangladesh",
  //         },
  //         {
  //           name: "Zara Khan",
  //           email: "zara.khan@example.com",
  //           address: "Rangpur, Bangladesh",
  //         },
  //     {
  //       name: "Ayan Chakraborty",
  //       email: "ayan.chakraborty@example.com",
  //       address: "Gazipur, Bangladesh",
  //     },
  //     {
  //       name: "Raisa Karim",
  //       email: "raisa.karim@example.com",
  //       address: "Bogra, Bangladesh",
  //     },
  //     {
  //       name: "Imran Hossain",
  //       email: "imran.hossain@example.com",
  //       address: "Narayanganj, Bangladesh",
  //     },
  //     {
  //       name: "Nadia Akter",
  //       email: "nadia.akter@example.com",
  //       address: "Comilla, Bangladesh",
  //     },
  //     {
  //       name: "Sajid Faruk",
  //       email: "sajid.faruk@example.com",
  //       address: "Tangail, Bangladesh",
  //     },
  //     {
  //       name: "Mithila Rahman",
  //       email: "mithila.rahman@example.com",
  //       address: "Pabna, Bangladesh",
  //     },
  //     {
  //       name: "Anik Khan",
  //       email: "anik.khan@example.com",
  //       address: "Feni, Bangladesh",
  //     },
  //     {
  //       name: "Shamima Yasmin",
  //       email: "shamima.yasmin@example.com",
  //       address: "Jhenaidah, Bangladesh",
  //     },
  //     {
  //       name: "Raihan Uddin",
  //       email: "raihan.uddin@example.com",
  //       address: "Sirajganj, Bangladesh",
  //     },
  //     {
  //       name: "Tasmia Islam",
  //       email: "tasmia.islam@example.com",
  //       address: "Lakshmipur, Bangladesh",
  //     },
  //     {
  //       name: "Rakib Hasan",
  //       email: "rakib.hasan@example.com",
  //       address: "Noakhali, Bangladesh",
  //     },
  //     {
  //       name: "Shoriful Alam",
  //       email: "shoriful.alam@example.com",
  //       address: "Kushtia, Bangladesh",
  //     },
  //     {
  //       name: "Farzana Chowdhury",
  //       email: "farzana.chowdhury@example.com",
  //       address: "Narsingdi, Bangladesh",
  //     },
  //     {
  //       name: "Arif Mahmud",
  //       email: "arif.mahmud@example.com",
  //       address: "Magura, Bangladesh",
  //     },
  //     {
  //       name: "Sumaiya Zaman",
  //       email: "sumaiya.zaman@example.com",
  //       address: "Gopalganj, Bangladesh",
  //     },
  //     {
  //       name: "Nazmul Haque",
  //       email: "nazmul.haque@example.com",
  //       address: "Sunamganj, Bangladesh",
  //     },
  //     {
  //       name: "Asif Rahman",
  //       email: "asif.rahman@example.com",
  //       address: "Habiganj, Bangladesh",
  //     },
  //     {
  //       name: "Maruf Islam",
  //       email: "maruf.islam@example.com",
  //       address: "Bhola, Bangladesh",
  //     },
  //     {
  //       name: "Munira Nasrin",
  //       email: "munira.nasrin@example.com",
  //       address: "Sherpur, Bangladesh",
  //     },
  //     {
  //       name: "Tamim Chowdhury",
  //       email: "tamim.chowdhury@example.com",
  //       address: "Pirojpur, Bangladesh",
  //     }
  //   ],
  // });


  //  const createUser = await prisma.user.create({
  //       data: {
  //           username: "user3",
  //           email: "user3@ph.com",
  //           role: UserRole.user
  //       }
  //   });



  // const createProfile = await prisma.profile.create({
  //       data: {
  //           bio: "this is bio...",
  //           userId: 3
  //       }
  //   })

    //  const createCategory = await prisma.category.create({
    //     data: {
    //         name: "programming"
    //     }
    // })
  



    const createPost = await prisma.post.create({
      data: {
          title: "this is title 5",
          content: "this is content of the post. 5",
          authorId: 1,
          postCategory: {
              create: [
                  {
                      categoryId: 1
                  },
                  {
                      categoryId: 3
                  },
                  {
                      categoryId: 2
                  }
              ]
          }
      },
      include: {
          postCategory: true
      }
  })
  console.log(createPost)
};

main();
