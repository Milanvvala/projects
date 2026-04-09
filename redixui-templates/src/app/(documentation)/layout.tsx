import { Theme, ThemePanel } from "@radix-ui/themes"

interface Props {
  children: React.ReactNode
}

export default function DocumentationLayout(props: Props) {
  const { children } = props

  return (
    <Theme
      appearance="dark"
      grayColor="slate"
      panelBackground="solid"
    >
      {children}
      {/* <ThemePanel /> */}
    </Theme>
  )
}
