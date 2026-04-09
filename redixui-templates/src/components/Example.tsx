"use client"
import {
  Button,
  Card,
  Flex,
  Inset,
  Link,
  Separator,
  Tabs,
  Text
} from "@radix-ui/themes"
import { getExampleUrl } from "@/lib/getExampleUrl"
import type { Category, SubCategory, Template } from "@/lib/types"
import { ExternalLinkIcon } from "@radix-ui/react-icons"
import { CodeSample, RadioCard, ResizableFrame } from "@/components"

type ExampleProps = {
  template: Template
  category: Category
  subCategory: SubCategory
}

export default function Example(props: ExampleProps) {
  const { template, category, subCategory } = props

  return (
    <Flex m="3" gap="4" direction="column" width="100%">
      <Card id={template.filename}>
        <Tabs.Root defaultValue="preview">
          {/* Head */}
          <Inset side="top" mb="4">
            <Flex
              px={{ initial: "2", sm: "4" }}
              pt={{ initial: "2", sm: "4" }}
              align="center"
              gap={{ initial: "1", sm: "4" }}
              style={{ background: "#24292f" }}
              // direction={{ initial: "column", sm: "row" }}
              wrap={{ initial: "wrap", sm: "nowrap" }}
            >
              {/* Template Title */}
              <Text size={{ initial: "4", sm: "5" }} weight="medium">
                {template.name}
              </Text>
              <Separator orientation="vertical" size="2" />

              {/* Tabs */}
              <Tabs.List>
                <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
                <Tabs.Trigger value="code">Code</Tabs.Trigger>
              </Tabs.List>
              <Separator orientation="vertical" size="2" />

              {/* External View Link */}
              <Button variant="ghost" title="Open in Fullscreen">
                <Link
                  href={getExampleUrl(category, subCategory, template) ?? "@"}
                >
                  Live <ExternalLinkIcon />
                </Link>
              </Button>
              <Separator orientation="vertical" size="2" />

              {/* Radio Button */}
              <RadioCard />
            </Flex>
          </Inset>

          {/* Preview */}
          <Tabs.Content value="preview">
            <ResizableFrame
              template={template}
              category={category}
              subCategory={subCategory}
            />
          </Tabs.Content>

          {/* Code */}
          <Tabs.Content value="code">
            <CodeSample
              template={template}
              category={category}
              subCategory={subCategory}
            />
          </Tabs.Content>
        </Tabs.Root>
      </Card>
    </Flex>
  )
}
