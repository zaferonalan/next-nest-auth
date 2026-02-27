import argon2 from 'argon2';

const options: argon2.Options = {
  type: argon2.argon2id,
  memoryCost: 19456,
  timeCost: 2,
  parallelism: 2,
};

export const hashPassword = async (password: string) => {
  return await argon2.hash(password, options);
};

export const verifyPassword = async (
  hashedPassword: string,
  plainPassword: string,
) => {
  return await argon2.verify(hashedPassword, plainPassword);
};
