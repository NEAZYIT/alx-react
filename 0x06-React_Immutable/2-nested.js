export default function accessImmutableObject (object, array) {
  let value = object
  for (const key of array) {
    if (value instanceof Map) {
      value = value.get(key)
    } else if (typeof value === 'object' && value !== null && key in value) {
      value = value[key]
    } else {
      return undefined
    }
  }
  return value
}
