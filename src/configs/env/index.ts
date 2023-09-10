/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
export enum Env {
  API_1 = 'API_1',
  API_2 = 'API_2',
}

export function getEnv(key: keyof typeof Env) {
  return process.env[`NEXT_PUBLIC_${key}`]
}
