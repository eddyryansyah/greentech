import Navbar from "@/components/common/Navbar";
// import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Background from "../assets/bg.png";

const GuidePage = () => {
  return (
    <div
      className="h-auto bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <Navbar className="font-bold" />
      <div className="p-8">
        <Accordion
          type="single"
          collapsible
          className="border bg-slate-300 p-6 rounded-3xl"
        >
          <span className="flex items-start text-2xl">
            Apa yang Ingin Anda Ketahui?
          </span>
          <AccordionItem value="item-1" className="text-start">
            <AccordionTrigger>
              Apa saja yang ditawarkan pada situs GreenTech?
            </AccordionTrigger>
            <AccordionContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
              alias maxime consequatur error cum eveniet modi beatae
              reprehenderit laudantium nisi!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="text-start">
            <AccordionTrigger>
              Apa saja yang ditawarkan pada situs GreenTech?
            </AccordionTrigger>
            <AccordionContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
              alias maxime consequatur error cum eveniet modi beatae
              reprehenderit laudantium nisi!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="text-start">
            <AccordionTrigger>
              Apa saja yang ditawarkan pada situs GreenTech?
            </AccordionTrigger>
            <AccordionContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
              alias maxime consequatur error cum eveniet modi beatae
              reprehenderit laudantium nisi!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="text-start">
            <AccordionTrigger>
              Apa saja yang ditawarkan pada situs GreenTech?
            </AccordionTrigger>
            <AccordionContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
              alias maxime consequatur error cum eveniet modi beatae
              reprehenderit laudantium nisi!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="text-start">
            <AccordionTrigger>
              Apa saja yang ditawarkan pada situs GreenTech?
            </AccordionTrigger>
            <AccordionContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
              alias maxime consequatur error cum eveniet modi beatae
              reprehenderit laudantium nisi!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default GuidePage;
