export class Message {
  id!: String;
  content!: String;
  likes!: number;
  author!: String;
  createdAt: Date = new Date('now');
  updatedAt: Date = new Date('now');

  constructor() {}
}
