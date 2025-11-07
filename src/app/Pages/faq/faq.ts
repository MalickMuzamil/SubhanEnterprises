import { Component } from '@angular/core';
import { Accordian } from '../../Shared/accordian/accordian';

@Component({
  selector: 'app-faq',
  imports: [Accordian],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  faqData = [
    {
      question: 'What is the warranty period for your ATVs?',
      answer:
        'Our ATVs come with a 6-month limited warranty covering manufacturing defects in the engine, gearbox, and electrical components under normal use.',
    },
    {
      question: 'Do you offer nationwide delivery?',
      answer:
        'Yes, we deliver ATVs and spare parts all across Pakistan. Our logistics network ensures safe and timely delivery right to your doorstep or dealership.',
    },
    {
      question: 'Can I buy in bulk for my dealership?',
      answer:
        'Absolutely! As authorized importers, we offer wholesale pricing and bulk availability for dealerships and resellers nationwide.',
    },
    {
      question: 'Do you provide after-sales service?',
      answer:
        'Yes, our technical team provides full after-sales support including maintenance, parts replacement, and mechanical assistance.',
    },
    {
      question: 'Are spare parts easily available?',
      answer:
        'Yes, we maintain a consistent stock of genuine spare parts to ensure smooth and reliable maintenance for all ATV models we import.',
    },
    {
      question: 'Do your ATVs come fully assembled?',
      answer:
        'Most of our ATVs are delivered 90% assembled for easy transport. Final assembly and tuning are done by our technicians before delivery or at the dealership.',
    },
    {
      question: 'Can I customize my ATV?',
      answer:
        'Yes, customization options such as decals, tire upgrades, lighting kits, and performance tuning are available upon request.',
    },
    // {
    //   question: 'What payment methods do you accept?',
    //   answer:
    //     'We accept bank transfers, cash payments, and verified dealer purchase orders. For bulk orders, partial advance payment options are available.',
    // },
    // {
    //   question: 'Are your ATVs suitable for beginners?',
    //   answer:
    //     'Yes, we have models designed for all experience levels — from beginner-friendly 110cc bikes to high-performance 250cc off-road models.',
    // },
    // {
    //   question: 'Do you offer test rides?',
    //   answer:
    //     'Yes, customers can book a test ride at our showroom or authorized dealership locations, depending on availability.',
    // },
    // {
    //   question: 'Do you export ATVs outside Pakistan?',
    //   answer:
    //     'Currently, we focus on nationwide supply, but we can facilitate export orders on special request with additional documentation.',
    // },
    // {
    //   question: 'Where are you located?',
    //   answer:
    //     'Our main showroom and workshop are located in Islamia Park, Lahore. We also serve dealers across Karachi, Islamabad, Faisalabad, and other major cities.',
    // },
  ];
}
