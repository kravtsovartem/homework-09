import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const session = useSession();

  const isAuth = session.status === "authenticated";

  return (
    <>
      <div className="flex justify-between py-6">
        <Link href={`/`}>
          <Image src="/logo.svg" alt="" width={175} height={30} />
        </Link>
        <Link
          href={`/api/auth/signin`}
          className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 align-middle leading-10"
          style={isAuth ? { display: "none" } : {}}
        >
          Войти
        </Link>
        <div
          style={isAuth ? {} : { display: "none" }}
          className="flex items-center gap-4"
        >
          <span>{session.data?.user?.name}</span>
          <Link
            href={`/events/create`}
            className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 align-middle leading-10 bg-green-600 text-white"
          >
            Создать событие
          </Link>
        </div>
      </div>

      <main>{children}</main>
    </>
  );
}
