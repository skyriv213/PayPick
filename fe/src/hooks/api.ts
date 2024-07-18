export const baseUrl = `http://localhost:8080`

export async function getApi (url:string) {
  try {
    const res = await fetch(url);

    return await res.json()
  }catch (error) {
    console.error(error);
  }
}

export async function postApi (url:string, newData:string) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData)
      });

      return await res.json()
    }catch (error) {
    console.error(error);
  }
}

export async function putApi (url:string, newData:string) {
  try {
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });

    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

export async function deleteApi(url: string) {
  try {
    const res = await fetch(url, { method: 'DELETE' });

    return await res.json();
  } catch (error) {
    console.error(error);
  }
}