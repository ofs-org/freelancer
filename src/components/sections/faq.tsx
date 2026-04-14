"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQ } from "@/db/schema";
import { motion } from "motion/react";

interface FAQSectionProps {
  faqs: FAQ[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="py-32 px-8 max-w-4xl mx-auto" id="faq">
      <motion.h2
        className="text-4xl font-black text-center mb-16 text-on-surface"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Dúvidas Frequentes
      </motion.h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Accordion type="single" collapsible>
              <AccordionItem
                value={faq.id}
                className="bg-surface-container-low rounded-xl border-none"
              >
                <AccordionTrigger className="p-6 font-bold text-lg flex justify-between items-center cursor-pointer hover:no-underline">
                  {faq.pergunta}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8 text-on-surface-variant leading-relaxed">
                  {faq.resposta}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
