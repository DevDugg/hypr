import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import MouseFollower from "@/components/animations/mouse-follower";
import Provider from "@/config/provider";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Provider>
      <div className="flex flex-col min-h-full">
        {/* <MouseFollower /> */}
        <Header />

        <div className="flex-auto">{children}</div>

        <Footer />
      </div>
    </Provider>
  );
};

export default layout;
