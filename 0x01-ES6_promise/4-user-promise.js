/**
 * A simple Promise fulfilled
 */

export default function signUpeUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    resolve(
      {
        firstName,
        lastName,
      },
    );
    reject(new Error());
  });
}
