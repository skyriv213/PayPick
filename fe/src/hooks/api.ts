export async function getApi (url:string) {
  try {
    const res = await fetch(url);

    return await res.json()
  }catch (error) {
    console.error(error);
  }
}

export async function postApi (url:string, newData:string | object) {
    try {
      const res = await fetch(`http://localhost:8080${url}`, {
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

// export async function postApi(url: string, newData: string | object) {
//   try {
//     const res = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newData)
//     });

//     const contentType = res.headers.get('Content-Type');
//     if (contentType && contentType.indexOf('application/json') !== -1) {
//       const jsonResponse = await res.json();
//       if (!res.ok) {
//         throw new Error(jsonResponse.message || 'Server error');
//       }
//       return jsonResponse;
//     } else {
//       const textResponse = await res.text();
//       throw new Error(textResponse);
//     }
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }


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