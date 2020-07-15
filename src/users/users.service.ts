import { Injectable } from '@nestjs/common';
import { InjectModel } from 'mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    let createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findOneByEmail(email): Model<User> {
    return await this.userModel.findOne({ email: email });
  }
}
