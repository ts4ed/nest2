import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'Почтовый адрес' })
  readonly email: string;
  @ApiProperty({ example: 'password1234', description: 'Пароль' })
  readonly password: string;
}
