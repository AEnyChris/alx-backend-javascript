/**
 * Async and await
 */

import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let outCome;
  try {
    const photoResp = await uploadPhoto();
    const userResp = await createUser();
    outCome = {
      photo: { status: photoResp.status, body: photoResp.body },
      user: { firstName: userResp.firstName, lastName: userResp.lastName },
    };
  } catch (err) {
    outCome = {
      photo: null,
      user: null,
    };
  }

  return outCome;
}
