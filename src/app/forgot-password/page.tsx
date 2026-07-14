import Header from "./Header";
import ForgotPasswordForm from "./ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <>
      <Header />
      <main className="flex-grow flex items-center justify-center px-margin-mobile py-xl pt-24">
        <ForgotPasswordForm />
      </main>
    </>
  );
}