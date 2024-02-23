import "./globals.css";


export const metadata = {
  title: "VersaNex - Home",
  description: "Unlock your digital potential with VersaNex inc. We excel in graphic design and website development, delivering impactful solutions tailored to you. Elevate your brand online with our expertise.",
  icons:{
    icon:['/imgs/favicon/favicon.ico?v=4'],
    apple:['imgs/favicon/apple-touch-icon.png?v=4'],
    shortcut:['imgs/favicon/apple-touch-icon.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
