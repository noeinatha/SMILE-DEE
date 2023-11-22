export default async function updateAppointments(bookingId:string , token:string , bookingDate:string , user:string , dentist:string) {
    const response = await fetch(`http://localhost:5000/api/v1/bookings/${bookingId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
         authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        bookingDate : bookingDate,
        user: user,
        dentist: dentist,
      }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      const error = errorData?.message || 'Failed to update booking';
      throw new Error(error);
    }
    return await response.json();
  }
