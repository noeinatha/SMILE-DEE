export default async function getAppointments(token: string) {
  const response = await fetch("http://localhost:5000/api/v1/bookings", {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Cannot get user Appointments");
  }
  return await response.json();
}
