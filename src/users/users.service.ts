import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    getHello(): string {
        return 'Hello World!';
    }

    postHello(): string {
        return 'Hello World!';
    }

    putHello(): string {
        return 'Hello World!';
    }

    deleteHello(): string {
        return 'Hello World!';
    }

}
