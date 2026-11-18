export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="mx-auto max-w-4xl p-6">{children}</section>;
}
