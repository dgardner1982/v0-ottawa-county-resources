import type { Metadata } from 'next';
import { AlertTriangle, Scale, ShieldAlert, Stethoscope } from 'lucide-react';
import { Footer } from '@/components/footer';
import { BackPill, Callout, EmergencyBar, IconTile, PageHero, darkCardClass } from '@/components/site-chrome';

export const metadata: Metadata = {
  title: 'Medical Disclaimer | Ottawa County Recovery Alliance',
  description: 'Legal and medical notice for Ottawa County Recovery Alliance educational resources.',
};

const sections = [
  {
    icon: AlertTriangle,
    title: 'Not Medical Advice',
    body: 'The contents of this publication, including text, graphics, tables, and reference data, are intended solely for educational, research, and informational purposes. Nothing contained herein is intended to serve as medical advice, clinical instruction, or individual health counseling.',
  },
  {
    icon: Stethoscope,
    title: 'Consult a Healthcare Professional',
    body: 'Readers must always consult with a licensed physician, clinical specialist, or other qualified healthcare provider regarding any personal medical concerns, medication changes, substance interactions, or health questions. Never disregard professional medical guidance or delay seeking qualified care based on the contents of this resource.',
  },
  {
    icon: Scale,
    title: 'No Warranty and Limitation of Liability',
    body: 'While reasonable efforts have been undertaken to compile factual and objective scientific information, no warranty, express or implied, is made regarding the absolute accuracy, completeness, or current applicability of the content. The author, publisher, and affiliated organizations disclaim any and all liability for direct, indirect, incidental, or consequential damages resulting from the use, application, or misinterpretation of any information provided herein.',
  },
];

export default function MedicalDisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#41cfdf] text-slate-950">
      <EmergencyBar />
      <PageHero
        accent="teal"
        eyebrow="Please read carefully"
        title="Legal and"
        highlight="Medical Notice"
        icon={ShieldAlert}
        description="Our substance education materials are designed to support informed, safer decisions, not to replace individualized medical care."
        back={{ href: '/education', label: 'Back to education guides' }}
      />
      <main className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="space-y-6">
          {sections.map((section) => (
            <section key={section.title} className={`${darkCardClass} p-7 sm:p-9`}>
              <div className="flex items-start gap-5">
                <IconTile accent="teal" icon={section.icon} />
                <div>
                  <h2 className="text-balance text-2xl font-black tracking-tight text-cyan-200 sm:text-3xl">{section.title}</h2>
                  <p className="mt-3 text-pretty text-lg leading-8 text-slate-200">{section.body}</p>
                </div>
              </div>
            </section>
          ))}
          <Callout accent="red" title="Emergency Care">
            <p>
              This document does not provide real-time clinical intervention. If you suspect an overdose, severe adverse
              reaction, or any medical crisis, contact emergency services (911 in the United States) immediately or proceed
              to the nearest emergency department.
            </p>
          </Callout>
        </div>
        <div className="mt-12 flex justify-center">
          <BackPill href="/education">Back to education guides</BackPill>
        </div>
      </main>
      <Footer />
    </div>
  );
}
