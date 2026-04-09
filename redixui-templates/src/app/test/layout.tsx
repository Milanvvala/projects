import { Theme, ThemePanel } from "@radix-ui/themes"

interface Props {
  children: React.ReactNode
}

export default function TestLayout(props: Props) {
  const { children } = props

  return (
    <Theme
      appearance="dark"
      grayColor="slate"
    >
      {children}
      {/* <ThemePanel /> */}
    </Theme>
  )
}