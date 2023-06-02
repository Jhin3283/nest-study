import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'jung min',
      email: 'jullme@example.com',
      password: 'password1',
    },
    {
      id: 2,
      name: 'ki hwan27',
      email: 'hwan27@example.com',
      password: 'password2',
    },
    {
      id: 3,
      name: 'gwang ho',
      email: 'gwang@example.com',
      password: 'password3',
    },
  ];

  create(user: User): void {
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, user: User): void {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = user;
  }

  delete(id: number): void {
    const index = this.users.findIndex((user) => user.id === id);
    this.users.splice(index, 1);
  }
}
