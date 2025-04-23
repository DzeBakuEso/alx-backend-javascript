export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Check if the endpoint has been tracked in the weakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment the query count for the endpoint
  const currentCount = weakMap.get(endpoint);
  weakMap.set(endpoint, currentCount + 1);

  // Check if the query count has reached or exceeded 5
  if (currentCount + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
