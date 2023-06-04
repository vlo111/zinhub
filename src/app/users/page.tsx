import ListUsers from './list-users';
import { User } from './types';

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return (await res.json()) as User[];
}

export default async () => {
  const users = await getUsers();

  return <ListUsers users={users} />;
};
