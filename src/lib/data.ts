
export type Command = {
  id: string;
  name: string;
  category: 'linux' | 'python';
  description: string;
  example: string;
  tags: string[];
};

export const COMMANDS: Command[] = [
  {
    id: 'ls',
    name: 'ls',
    category: 'linux',
    description: 'List directory contents.',
    example: 'ls -la',
    tags: ['files', 'navigation'],
  },
  {
    id: 'grep',
    name: 'grep',
    category: 'linux',
    description: 'Search for patterns in files.',
    example: 'grep "error" logfile.txt',
    tags: ['text processing', 'search'],
  },
  {
    id: 'chmod',
    name: 'chmod',
    category: 'linux',
    description: 'Change file mode bits (permissions).',
    example: 'chmod +x script.sh',
    tags: ['permissions', 'security'],
  },
  {
    id: 'print',
    name: 'print()',
    category: 'python',
    description: 'Prints a message to the standard output device.',
    example: 'print("Hello, World!")',
    tags: ['basics', 'output'],
  },
  {
    id: 'list-comp',
    name: 'List Comprehension',
    category: 'python',
    description: 'A concise way to create lists.',
    example: '[x**2 for x in range(10)]',
    tags: ['data structures', 'logic'],
  },
  {
    id: 'os-walk',
    name: 'os.walk()',
    category: 'python',
    description: 'Generate file names in a directory tree by walking the tree.',
    example: 'import os\nfor root, dirs, files in os.walk("."): print(files)',
    tags: ['standard library', 'files'],
  },
];

export type Flashcard = {
  id: string;
  question: string;
  answer: string;
  category: string;
  mastered: boolean;
};

export const FLASHCARDS: Flashcard[] = [
  { id: 'f1', question: 'How do you list all files including hidden ones in Linux?', answer: 'ls -a', category: 'Linux', mastered: false },
  { id: 'f2', question: 'What is the Python command to get the length of a list?', answer: 'len(my_list)', category: 'Python', mastered: false },
  { id: 'f3', question: 'How do you remove a directory and its contents in Linux?', answer: 'rm -rf [dir]', category: 'Linux', mastered: false },
  { id: 'f4', question: 'What keyword defines a function in Python?', answer: 'def', category: 'Python', mastered: false },
];
