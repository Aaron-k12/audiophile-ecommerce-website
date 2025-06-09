import "./globals.css";
import Header from "@/components/Header";
import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { CartProvider } from "@/context/CartContext";
export const metadata = {
  title: "Audiophile",
  description: "Ecommerce Website",
};

const theme = {
  primaryColor: 'audiophileOrange',
  colors: {
    audiophileOrange: [
      '#fff4e6', 
      '#ffe8cc', 
      '#ffd8a8', 
      '#ffc078', 
      '#ffa94d', 
      '#ff922b', 
      '#D87D4A',
      '#FBAF85',
      '#f76707', 
      '#e8590c', 
      '#d9480f', 
    ],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`antialiased min-w-[375px]`}>
        <MantineProvider theme={theme}>
          <ModalsProvider>
            <CartProvider>{children}</CartProvider>
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
