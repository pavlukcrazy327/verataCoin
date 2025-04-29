import Image from "next/image";
import "./BillingLayout.scss";

export default function BillingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex justify-center p-2">
        <Image src="/images/logos/world_mall.png" height={80} width={300} alt="World Mall" />
      </div>

      <main className="p-4">
        {children}
      </main>
    </>
  );
}
