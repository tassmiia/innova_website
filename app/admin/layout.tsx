import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col">
        <Link href="/admin">
          <h2 className="text-2xl font-bold mb-6 cursor-pointer">
            Admin Dashboard
          </h2>
        </Link>
        <nav className="flex-1 space-y-4">
          {/* Links to each company page */}
          <Link href="/admin/marut-air" className="hover:underline block">
            Marut Air
          </Link>
          <Link href="/admin/atlas-copco" className="hover:underline block">
            Atlas Copco
          </Link>
          <Link href="/admin/aira-india" className="hover:underline block">
            Aira India
          </Link>
        </nav>
        <Link href="/admin-login">
          <button className="mt-auto text-red-400 hover:text-red-600 cursor-pointer">
            Logout
          </button>
        </Link>
      </aside>

      {/* Main content area */}
      <main className="flex-1 bg-gray-100 p-6">{children}</main>
    </div>
  );
}
