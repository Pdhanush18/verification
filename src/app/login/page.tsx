import Header from "./Header";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="flex-grow flex items-center justify-center py-xl px-margin-mobile pt-24">
        <LoginForm />
      </main>
    </>
  );
}