"use client";
import Nav from "@/components/Nav";
import "../styles/globals.css";
import { Provider } from "@/utils/Provider";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userData] = useLocalStorage("userData", null);
  return (
    <html lang="en">
      <body>
        <Provider>
          {userData?.type === "sender" && <Nav />}
          {children}
        </Provider>
      </body>
    </html>
  );
}
