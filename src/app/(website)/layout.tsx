import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col min-h-full">
      <Header />

      <div className="flex-auto">{children}</div>

      <Footer />
    </div>
  );
};

export default layout;
