import { Badge } from './badge.model';
import { Module } from './module.model';

export interface Course {
  id: number;
  name: string;
  description: string;
  duration: number;
  active: boolean;
  badge?: Badge;
  modules: Module[];
  createdAt: Date;
}
