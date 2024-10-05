/**
 * a function that returns the status of promises returned
 *
 */

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignUp(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(
      (values) => values.map((obj) => (
        {
          status: obj.status,
          value: obj.status === 'fulfilled' ? obj.value : String(obj.reason),
        }
      )),
    );
}
