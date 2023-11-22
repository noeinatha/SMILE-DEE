import RegisterForm from "@/components/RegisterForm";
export default function RegisterPage() {
  return (
    <div className="flex h-[calc(100vh-80px)] flex-col items-center justify-between p-14 top bg-gradient-to-r from-darkpurple to-fadebg">
      <RegisterForm />
    </div>
  );
}
