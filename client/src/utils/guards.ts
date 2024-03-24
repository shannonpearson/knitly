export function assertString(input: unknown): asserts input is string {
  if (typeof input !== 'string') throw new Error('Expected type string')
}
