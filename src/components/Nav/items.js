import { nanoid } from 'nanoid';

const items = [
  {
    text: 'Home',
    id: nanoid(),
    to: '/',
    end: true,
  },
  {
    text: 'Phonebook',
    id: nanoid(),
    to: '/phonebook',
    end: false,
  },
  {
    text: 'Videoplayer',
    id: nanoid(),
    to: '/videoplayer',
    end: false,
  },
  {
    text: 'Reader',
    id: nanoid(),
    to: '/reader',
    end: false,
  },
  {
    text: 'Feedback',
    id: nanoid(),
    to: '/feedback',
    end: false,
  },
];

export default items;
