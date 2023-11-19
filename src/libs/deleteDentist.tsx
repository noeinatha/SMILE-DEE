export default async function deleteDentist(dentistId:string , token:string) {
    const response = await fetch(`http://localhost:5000/api/v1/dentists/${dentistId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  
    if (!response.ok) {
      throw new Error(`Failed to delete dentist with ID ${dentistId}`);
    }
    return await response.json();
  }