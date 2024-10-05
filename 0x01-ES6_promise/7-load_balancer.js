/**
 * A function that takes two promises
 * and returns the first resolved
 */

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise
    .any([chinaDownload, USDownload])
    .then((value) => value);
}
