export default async function addAppointments(
  dentistId: string,
  token: string,
  bookingDate: string | undefined,
  user: string
) {
  const response = await fetch(
    `http://localhost:5000/api/v1/dentists/${dentistId}/bookings`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        bookingDate: bookingDate,
        user: user,
        dentist: dentistId,
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    const error = errorData?.message || "Failed to add booking";
    throw new Error(error);
  }
  return await response.json();
}
