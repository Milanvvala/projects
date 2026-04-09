import { Button, Flex, Text } from "@radix-ui/themes"
import Image from "next/image"
import { placeholderImg } from "@/assets"

export default function SpleetScreen() {
  return (
    <Flex p="6" m="4">
      <Flex direction="column" gap="6" justify="start">
        <Text size="8" align="left" weight="bold">
          Freelance <br />
          <Text size="8" color="ruby" weight="bold">
            Design Projects
          </Text>
        </Text>
        <Text color="gray" size="4" mr="9">
          The project board is an exclusive resource for contract work. It's
          perfect for freelancers, agencies, and moonlighters.
        </Text>
        <Flex gap="4">
          <Button variant="solid" color="ruby" radius="none" size="4">
            Create Project
          </Button>
          <Button variant="soft" color="gray" radius="none" size="4">
            How it Works
          </Button>
        </Flex>
      </Flex>
      <Image src={placeholderImg} width={600} height={400} alt="alt" />
    </Flex>
  )
}
