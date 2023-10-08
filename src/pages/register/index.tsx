import Link from "next/link";
import Register from "~/components/register/register";
import AuthenticationLayout from "~/components/shared/authentication-layout";

const Index = () => {
  return (
    <AuthenticationLayout>
      <Register />
      <div className="mt-3 flex items-center justify-center gap-1 text-center">
        <p>Already have an account?</p>
        <Link href="signin" className="text-hashaccent">
          sign in
        </Link>
      </div>
    </AuthenticationLayout>
  );
};

export default Index;
