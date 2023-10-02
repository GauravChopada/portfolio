'use client'

export function convertToSubarrays<T>(data: T[]): T[][] {
    const subarrays: T[][] = [];
    for (let i = 0; i < data.length; i += 3) {
      const subarray = data.slice(i, i + 3);
      subarrays.push(subarray);
    }
    return subarrays;
}

export async function sendMail({name, email, subject, message}: {name: string, email: string, subject: string, message: string}): Promise<boolean> {
  const init = {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name, email, subject, message}),
  }

  const response = await fetch('https://gaurav-chopda-portfolio-server.vercel.app/send',init )
  return response.status === 200
}
