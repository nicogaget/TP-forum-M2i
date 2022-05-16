import { Message } from './message.entity';

export class Sujet {
  id!: string;
  title!: string;
  likes!: number;
  messages!: Message[];
  createdAt: Date = new Date('now');
  updatedAt: Date = new Date('now');
  constructor() {}
}
