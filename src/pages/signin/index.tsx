import Link from "next/link";
import SignIn from "~/components/register/signin";
import AuthenticationLayout from "~/components/shared/authentication-layout";

const Index = () => {
  return (
    <AuthenticationLayout>
      <SignIn />
      <div className="mt-3 flex items-center justify-center gap-1 text-center">
        <p>Don&apos;t have an account?</p>
        <Link href="register" className="text-hashaccent">
          register
        </Link>
      </div>
    </AuthenticationLayout>
  );
};

export default Index;
