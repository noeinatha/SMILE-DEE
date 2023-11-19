export default async function updateDentist(dentistId:string , token:string , name:string , expertist:string , hospital:string , address:string , tel:string , picture:string) {
    const response = await fetch(`http://localhost:5000/api/v1/dentists/${dentistId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
         authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name : name,
        expertist: expertist,
        hospital: hospital,
        address: address,
        tel: tel,
        picture: picture
      }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      const error = errorData?.message || 'Failed to delete dentist';
      throw new Error(error);
    }
    return await response.json();
  }
