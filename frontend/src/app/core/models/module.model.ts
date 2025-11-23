import { Question } from './question.model';

export interface Module {
  id: number;
  name: string;
  content: string;
  orderIndex: number;
  questions: Question[];
}
