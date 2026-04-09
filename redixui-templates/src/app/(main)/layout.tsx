import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Container, Theme, ThemePanel } from "@radix-ui/themes"
import { Header, Footer } from "@/components"
import "@radix-ui/themes/styles.css"

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  metadataBase: new URL("https://..../"), //work
  title: "Redix Themes Templates",
  description: "Templates for Redix UI",
  keywords:
    "redix ui, ui templates, web templates, web design, react templates, react ui templates, Redix ui templates, Redix Themes Templates",
  openGraph: {
    type: "website",
    title: "RedixUI Templates",
    description:
      "A growing open-source collection of hand-crafted Redix UI templates ready to drop into your React project.",
    images: "", //work
    siteName: "RedixUI Templates",
    url: "" //work
  },
  twitter: {
    title: "RedixUI Templates",
    description:
      "A growing open-source collection of hand-crafted Redix UI templates ready to drop into your React project.",
    images: "...", //work
    card: "summary_large_image"
  }
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme
          appearance="dark"
          accentColor="iris"
          grayColor="slate"
          panelBackground="solid"
        >
          <Container>
            <Header />
            {children}
            <Footer />
          </Container>
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  )
}
