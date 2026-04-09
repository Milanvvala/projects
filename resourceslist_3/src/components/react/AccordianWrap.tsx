import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

type AccordionItemProps = {
    value: string;
    title: string;
};

interface AccordionWrapperProps {
    items: AccordionItemProps[];
    className?: string;
    children: React.ReactNode;
}

const AccordionWrapper: React.FC<AccordionWrapperProps> = ({ items, className, children }) => {
    return (
        <Accordion type="single" collapsible className={className || "w-full"}>
            {items.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                    <div className="border border-gray-300 rounded-md">
                        <AccordionTrigger className="flex items-center justify-between p-4 hover:bg-gray-100">
                            <span className="text-xl font-semibold">{item.title}</span>
                        </AccordionTrigger>
                        <AccordionContent className="space-y-6 p-4">
                            {children}
                        </AccordionContent>
                    </div>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default AccordionWrapper;
