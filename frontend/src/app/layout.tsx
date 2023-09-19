import Nav from "@/components/Nav";
import "../styles/globals.css";
import { Provider } from "@/utils/Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Nav /> */}
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
