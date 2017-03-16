import content from '../assets/content';

export const GET_CONTENT = 'GET_CONTENT';

export function getContent() {
  return {
    type: GET_CONTENT,
    payload: content
  }
}