import { Injectable } from '@nestjs/common';
import { CreateQuioscoDto } from './dto/create-quiosco.dto';
import { UpdateQuioscoDto } from './dto/update-quiosco.dto';
import { users } from '../db/users';

@Injectable()
// here in service we can do operations with the database
// here is where we can do the CRUD operations
// actions
export class QuioscoService {
  create(createQuioscoDto: CreateQuioscoDto) {
    return 'This action adds a new quiosco';
  }

  async findAll() {
    return users;
  }

  findOne(id: number) {
    const user = users.find((user) => user.id === id);
    return user;
  }

  update(id: number, updateQuioscoDto: UpdateQuioscoDto) {
    const user = users.find((user) => user.id === id);
    user.email = updateQuioscoDto.email ?? user.email;
    user.name = updateQuioscoDto.name ?? user.name;
    return {
      message: 'User updated',
      user,
    };
  }

  remove(id: number) {
    const user = users.find((user) => user.id === id);
    const userIdx = users.indexOf(user);
    users.splice(userIdx, 1);
    return {
      message: 'User deleted',
    };
  }
}
