import { Document } from 'mongoose';

export interface Video extends Document {
  readonly description: string;
  readonly sources: Array<string>;
  readonly subtitle: string;
  readonly thumb: string;
  readonly title: string;
  readonly like: number;
  readonly view: number;
  readonly score: number;
}
