import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()
    getHello(): string {
        return this.usersService.getHello();
    }
    @Post()
    postHello(): string {
        return this.usersService.getHello();
    }

    @Put()
    putHello(): string {
        return this.usersService.getHello();
    }

    @Delete()
    deleteHello(): string {
        return this.usersService.getHello();
    }


}

