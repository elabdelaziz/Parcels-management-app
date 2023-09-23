"use client";
import "../styles/globals.css";
import { Provider } from "@/utils/Provider";
import useLocalStorage from "@/hooks/useLocalStorage";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {children}
          </LocalizationProvider>
        </Provider>
      </body>
    </html>
  );
}
