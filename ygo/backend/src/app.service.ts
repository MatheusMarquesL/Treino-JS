import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  private users: any[] = [];

  create(user: any) {
    const newUser = {
      id: Date.now(),
      ...user
    };

    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  update(id: number, updatedUser: any) {
    const index = this.users.findIndex(user => user.id === id);

    if (index === -1) {
      return { message: 'Usuário não encontrado' };
    }

    this.users[index] = { ...this.users[index], ...updatedUser };
    return this.users[index];
  }

  remove(id: number) {
    const index = this.users.findIndex(user => user.id === id);

    if (index === -1) {
      return { message: 'Usuário não encontrado' };
    }

    const removedUser = this.users.splice(index, 1);
    return removedUser[0];
  }
}