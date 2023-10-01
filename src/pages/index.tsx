import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { ModeToggle } from "~/components/themes/button-theme";
import { Button } from "~/components/ui/button";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className="flex items-center justify-between p-4">
          <div>
            <svg
              className="hidden w-36 lg:block lg:w-44"
              fill="none"
              viewBox="0 0 334 56"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#2962FF"
                fill-rule="evenodd"
                d="M4.464 18.71c-5.133 5.131-5.133 13.449 0 18.58l14.868 14.862c5.133 5.13 13.454 5.13 18.586 0L52.786 37.29c5.133-5.13 5.133-13.448 0-18.579L37.918 3.848c-5.133-5.13-13.454-5.13-18.586 0L4.464 18.71ZM35.13 34.503a9.193 9.193 0 0 0 0-13.006 9.2 9.2 0 0 0-13.01 0 9.193 9.193 0 0 0 0 13.006 9.202 9.202 0 0 0 13.01 0Z"
                clip-rule="evenodd"
              />
              <path
                fill="#0F172A"
                d="M69.636 49.346V5.966h8.599v18.28l-1.032-1.375c.726-1.872 1.892-3.247 3.497-4.126 1.643-.917 3.554-1.375 5.733-1.375 2.37 0 4.433.496 6.191 1.49a10.498 10.498 0 0 1 4.185 4.183c.994 1.758 1.49 3.82 1.49 6.19v20.113H89.7v-18.28c0-1.223-.248-2.273-.745-3.152a4.968 4.968 0 0 0-2.006-2.063c-.841-.497-1.835-.745-2.981-.745-1.109 0-2.102.248-2.981.745a5.353 5.353 0 0 0-2.064 2.063c-.459.879-.688 1.93-.688 3.152v18.28h-8.6ZM112.496 50.034c-2.255 0-4.204-.363-5.848-1.089-1.643-.726-2.904-1.757-3.783-3.094-.879-1.376-1.319-3-1.319-4.871 0-1.758.401-3.305 1.204-4.642.802-1.375 2.025-2.521 3.669-3.438 1.681-.917 3.764-1.567 6.248-1.949l9.574-1.547v6.304l-8.026 1.432c-1.223.23-2.159.63-2.809 1.204-.649.535-.974 1.318-.974 2.35 0 .954.363 1.7 1.089 2.234.726.535 1.624.802 2.694.802 1.414 0 2.657-.305 3.727-.916 1.07-.612 1.891-1.433 2.465-2.465a6.927 6.927 0 0 0 .917-3.495v-8.138c0-1.184-.478-2.177-1.433-2.98-.917-.802-2.179-1.203-3.784-1.203-1.529 0-2.885.42-4.07 1.26-1.147.841-1.987 1.95-2.523 3.325l-6.879-3.267a11.175 11.175 0 0 1 2.924-4.527c1.338-1.26 2.943-2.235 4.815-2.923 1.873-.687 3.918-1.031 6.134-1.031 2.637 0 4.969.477 6.994 1.432 2.026.956 3.593 2.293 4.701 4.012 1.147 1.68 1.72 3.648 1.72 5.902v20.63h-8.026v-5.042l1.949-.344c-.917 1.375-1.93 2.521-3.038 3.438a11.21 11.21 0 0 1-3.726 1.948c-1.376.459-2.905.688-4.586.688ZM147.351 50.034c-3.44 0-6.44-.802-9-2.407-2.523-1.643-4.243-3.84-5.16-6.59l6.306-2.98c.803 1.681 1.892 3 3.268 3.954a7.86 7.86 0 0 0 4.586 1.433c1.223 0 2.159-.248 2.809-.745.65-.497.975-1.184.975-2.063 0-.459-.115-.84-.344-1.146-.23-.344-.574-.65-1.032-.917-.459-.267-1.032-.497-1.72-.688l-5.332-1.49c-2.56-.726-4.528-1.89-5.904-3.495-1.376-1.643-2.064-3.572-2.064-5.788 0-1.949.497-3.649 1.49-5.1.994-1.452 2.389-2.58 4.185-3.381 1.797-.84 3.86-1.261 6.192-1.261 3.057 0 5.732.726 8.026 2.177 2.331 1.414 3.974 3.42 4.93 6.017l-6.364 2.98c-.458-1.299-1.299-2.33-2.522-3.094-1.185-.802-2.542-1.203-4.07-1.203-1.109 0-1.988.229-2.637.687-.612.459-.918 1.089-.918 1.891 0 .42.115.803.344 1.146.23.344.593.65 1.09.917.535.268 1.184.516 1.949.745l4.987 1.49c2.599.764 4.586 1.93 5.962 3.496 1.376 1.528 2.064 3.42 2.064 5.673 0 1.948-.516 3.649-1.548 5.1-.993 1.452-2.388 2.598-4.185 3.439-1.796.802-3.917 1.203-6.363 1.203ZM163.44 49.346V5.966h8.599v18.28l-1.032-1.375c.726-1.872 1.892-3.247 3.497-4.126 1.643-.917 3.554-1.375 5.733-1.375 2.369 0 4.433.496 6.191 1.49a10.501 10.501 0 0 1 4.185 4.183c.994 1.758 1.49 3.82 1.49 6.19v20.113h-8.599v-18.28c0-1.223-.248-2.273-.745-3.152a4.97 4.97 0 0 0-2.006-2.063c-.841-.497-1.835-.745-2.981-.745-1.109 0-2.102.248-2.981.745a5.355 5.355 0 0 0-2.064 2.063c-.459.879-.688 1.93-.688 3.152v18.28h-8.599ZM196.611 49.346V18.058h8.026v6.189l-.459-1.376c.727-1.872 1.892-3.247 3.497-4.126 1.644-.917 3.555-1.375 5.733-1.375 2.37 0 4.433.496 6.191 1.49a10.489 10.489 0 0 1 4.185 4.183c.994 1.758 1.491 3.82 1.491 6.19v20.113h-8.599v-18.28c0-1.223-.249-2.273-.745-3.152a4.972 4.972 0 0 0-2.007-2.063c-.841-.497-1.834-.745-2.981-.745-1.108 0-2.102.248-2.981.745a5.355 5.355 0 0 0-2.064 2.063c-.458.879-.688 1.93-.688 3.152v18.28h-8.599ZM245.318 50.034c-3.095 0-5.923-.707-8.484-2.12a16.665 16.665 0 0 1-6.077-5.788c-1.49-2.483-2.236-5.291-2.236-8.424 0-3.171.746-5.979 2.236-8.424a16.666 16.666 0 0 1 6.077-5.788c2.561-1.413 5.389-2.12 8.484-2.12 3.096 0 5.905.707 8.428 2.12 2.522 1.414 4.528 3.343 6.019 5.788 1.529 2.445 2.293 5.253 2.293 8.424 0 3.133-.764 5.94-2.293 8.424-1.491 2.445-3.497 4.374-6.019 5.788-2.523 1.413-5.332 2.12-8.428 2.12Zm0-7.736c1.567 0 2.924-.363 4.071-1.089 1.184-.726 2.102-1.738 2.751-3.037.688-1.3 1.032-2.79 1.032-4.47 0-1.681-.344-3.152-1.032-4.413-.649-1.299-1.567-2.31-2.751-3.037-1.147-.764-2.504-1.146-4.071-1.146-1.567 0-2.942.382-4.127 1.146-1.185.726-2.121 1.739-2.809 3.037-.65 1.261-.975 2.732-.975 4.413 0 1.68.325 3.17.975 4.47.688 1.299 1.624 2.311 2.809 3.037s2.56 1.089 4.127 1.089ZM280.71 50.034c-3.057 0-5.79-.726-8.197-2.178-2.408-1.451-4.319-3.419-5.733-5.902-1.376-2.483-2.064-5.234-2.064-8.252 0-3.056.707-5.807 2.121-8.252 1.414-2.483 3.325-4.45 5.733-5.903 2.408-1.451 5.102-2.177 8.083-2.177 2.293 0 4.319.44 6.077 1.318 1.796.84 3.21 2.044 4.242 3.61l-1.319 1.72V5.965h8.6v43.38h-8.026v-5.73l.802 1.776c-1.07 1.528-2.522 2.694-4.357 3.496-1.834.764-3.821 1.146-5.962 1.146Zm1.032-7.736c1.567 0 2.943-.363 4.128-1.089s2.102-1.738 2.752-3.037c.687-1.3 1.031-2.79 1.031-4.47 0-1.681-.344-3.171-1.031-4.47-.65-1.299-1.567-2.311-2.752-3.037-1.185-.726-2.561-1.089-4.128-1.089-1.567 0-2.981.382-4.242 1.146-1.223.726-2.178 1.739-2.866 3.037-.688 1.261-1.032 2.732-1.032 4.413 0 1.68.344 3.17 1.032 4.47.688 1.299 1.643 2.311 2.866 3.037 1.261.726 2.675 1.089 4.242 1.089ZM318.481 50.034c-3.325 0-6.211-.726-8.657-2.178-2.446-1.49-4.338-3.476-5.675-5.96-1.338-2.483-2.007-5.233-2.007-8.251 0-3.133.688-5.922 2.064-8.367 1.414-2.445 3.306-4.374 5.676-5.788 2.369-1.413 5.044-2.12 8.025-2.12 2.485 0 4.682.401 6.593 1.203 1.911.764 3.516 1.853 4.815 3.267a14.223 14.223 0 0 1 3.039 4.928c.688 1.834 1.032 3.84 1.032 6.017 0 .611-.039 1.223-.115 1.834-.038.573-.134 1.07-.287 1.49h-23.446v-6.304h18.574l-4.071 2.98c.383-1.643.363-3.094-.057-4.355-.42-1.3-1.166-2.311-2.236-3.037-1.032-.765-2.312-1.146-3.841-1.146-1.49 0-2.771.362-3.841 1.088-1.07.726-1.872 1.796-2.407 3.21-.535 1.413-.746 3.132-.631 5.157-.153 1.757.057 3.305.631 4.642.573 1.337 1.452 2.387 2.637 3.151 1.184.726 2.618 1.09 4.299 1.09 1.529 0 2.828-.306 3.898-.918a6.544 6.544 0 0 0 2.58-2.521l6.88 3.266c-.612 1.529-1.587 2.866-2.924 4.012-1.3 1.146-2.847 2.044-4.644 2.693-1.796.611-3.764.917-5.904.917Z"
              />
            </svg>

            <svg
              className="h-8 w-8 lg:hidden"
              viewBox="0 0 200 200"
              fill="#2962ff"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.742 66.824c-18.323 18.323-18.323 48.029 0 66.352l53.082 53.082c18.323 18.323 48.029 18.323 66.352 0l53.082-53.082c18.323-18.323 18.323-48.03 0-66.352l-53.082-53.082c-18.323-18.323-48.03-18.323-66.352 0L13.742 66.824zm109.481 56.399c12.826-12.826 12.826-33.62 0-46.446s-33.62-12.826-46.446 0-12.826 33.62 0 46.446 33.62 12.826 46.446 0z"
              ></path>
            </svg>
          </div>
          <ModeToggle />
        </nav>
      </header>
      <main className=" flex min-h-screen flex-col items-center justify-center ">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight  sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>

          <Button className="bg-hashaccent text-primary-foreground">
            Test Colors
          </Button>
          <p className="text-hashforeground text-2xl">Hashnode Foreground</p>

          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl ">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <AuthShowcase />
          </div>
        </div>
      </main>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl ">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold  no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
