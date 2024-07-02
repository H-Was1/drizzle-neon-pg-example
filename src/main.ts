import 'dotenv/config';
import { db } from './drizzle/db';
import { PostTable, UserTable } from './drizzle/schema';
import { eq, sql } from 'drizzle-orm';

async function main() {
  // await db.delete(UserTable);
  await db.insert(PostTable).values({
    authorId: 'e158a5b0-9475-41dc-ae51-0122a7cd6538',
    title: 'post about something',
  });
  // await db
  //   .insert(UserTable)
  //   .values([
  //     {
  //       name: 'franklin clay',
  //       email: 'franklinclay@example.com',
  //       age: 29,
  //     },
  //     {
  //       name: 'sally jackson',
  //       age: 46,
  //       email: 'sallyjackson@example.com',
  //     },
  //   ])
  //   .returning({
  //     id: UserTable.id,
  //     name: UserTable.name,
  //     email: UserTable.email,
  //     age: UserTable.age,
  //     role: UserTable.role,
  //   })
  // .onConflictDoUpdate({
  //   target: UserTable.email,
  //   set: { name: 'Updated Name' },
  // });
  const user = await db.query.UserTable.findMany({
    where: (UserTable, { eq }) =>
      eq(UserTable.age, 46) && eq(UserTable.email, 'sallyjackson@example.com'),
  });
  console.log(user);
}

main();
