function convertToSubarrays<T>(data: T[]): T[][] {
    const subarrays: T[][] = [];
    for (let i = 0; i < data.length; i += 3) {
      const subarray = data.slice(i, i + 3);
      subarrays.push(subarray);
    }
    return subarrays;
}

export {convertToSubarrays}