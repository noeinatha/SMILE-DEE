import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="h-[calc(100vh-80px)] flex flex-col items-center justify-between p-14 top bg-gradient-to-l from-darkpurple to-fadebg">
      <LoginForm />
    </div>
  );
}
