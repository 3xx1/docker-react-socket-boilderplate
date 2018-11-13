import {
  UPDATE_VALUE
} from './constants';

export function increment(value) {
  return {
    type: UPDATE_VALUE,
    value
  };
}
