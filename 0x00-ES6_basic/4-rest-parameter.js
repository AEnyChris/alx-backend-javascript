export default function returnHowManyArguments(...Args) {
  const count = Args.length;
  /* let count = 0;
  for (const arg in Args){
    count += 1;
  }; */
  return count;
}
