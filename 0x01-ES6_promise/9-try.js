/**
 * A try..catch function implemented
 */

export default function guardrail(mathFunction) {
  let queue = [];
  try {
    queue = [...queue, mathFunction()];
  } catch (err) {
    queue = [...queue, String(err)];
  } finally {
    queue = [...queue, 'Guardrail was processed'];
  }
  return queue;
}
