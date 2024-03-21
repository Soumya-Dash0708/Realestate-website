import { useState } from 'react';
import { PiCaretUpBold,PiCaretDownBold} from "react-icons/pi";
interface AccordionItem {
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  {
    title: 'What makes EcoHaven Realty different from other real estate agencies?',
    content: "At EcoHaven Realty, we are committed to promoting sustainability in the real estate industry. We prioritize eco-friendly practices, such as green building techniques and energy-efficient systems, in all of our transactions. We believe that promoting environmental responsibility is not only the right thing to do, but it also benefits our clients by providing long-term cost savings and a healthier living environment.",
  },
  {
    title: 'Do you only work with eco-friendly properties?',
    content: "While we specialize in promoting and selling eco-friendly properties, we work with all types of properties. Our focus is on promoting sustainable practices and educating our clients on how they can make their properties more eco-friendly.",
  },
  {
    title: 'Can you help me find an eco-friendly property?',
    content: "Absolutely! We have a database of eco-friendly properties and can work with you to find a property that aligns with your sustainability goals. Additionally, we can provide guidance on how to make any property more eco-friendly.",
  },
  {
    title: 'What is your process for ensuring a property is eco-friendly?',
    content: "We work with builders and contractors who specialise in eco-friendly building practices. We also conduct assessments of a property's energy and water usage, as well as its overall sustainability features, to ensure that it aligns with our eco-friendly standards.",
  },
  {
    title: 'Are eco-friendly properties more expensive?',
    content: "Not necessarily. While some eco-friendly features may require an initial investment, such as solar panels or energy-efficient systems, they can ultimately lead to long-term cost savings on utility bills. Additionally, there are often government incentives and tax breaks available for eco-friendly properties and features.",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      
      <div className="space-y-2">
        {accordionData.map((item, index) => (
          <div key={index} className="border rounded p-4">
            <button
              className="flex items-center justify-between w-full focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg font-medium">{item.title}</span>
              <span className="text-lg">{activeIndex === index ? <PiCaretUpBold/> : <PiCaretDownBold/>}</span>
            </button>
            {activeIndex === index && (
              <div className="mt-4">
                <p className="text-gray-600">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
