import Header from "./Header";
import SignupForm from "./SignupForm";

export default function SignupPage() {
  return (
    <>
      <Header />
      <main className="flex-grow flex items-center justify-center py-xl px-margin-mobile pt-24">
        <SignupForm />
      </main>
    </>
  );
}