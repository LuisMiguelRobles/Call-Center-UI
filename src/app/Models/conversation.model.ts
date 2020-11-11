import { Messages } from './messages.model';
import { Rating } from './rating.model';

export interface Conversartion {
  messages: Messages [];
  rating: Rating;
}
