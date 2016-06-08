export const SET_HELLO= 'SET_HELLO';

export function setHello(data) {
  return {
    type: SET_HELLO,
    data,
  };
}
