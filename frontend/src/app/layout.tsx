import DatePickerProvider from "@/components/DatePickerProvider";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DatePickerProvider>{children}</DatePickerProvider>
      </body>
    </html>
  );
}
