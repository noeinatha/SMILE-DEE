export default async function deleteDentist(dentistId:string , token:string) {
    const response = await fetch(`http://localhost:5000/api/v1/dentists/${dentistId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      const error = errorData?.message || 'Failed to delete dentist';
      throw new Error(error);
    }
    return await response.json();
  }
