import SectionHeading from '@/components/SectionHeading';
import Timeline from '@/components/Timeline';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Education"
          title={<>My <span className="gradient-text">academic journey</span></>}
          subtitle="The qualifications and institutions that built my foundation in computer science."
        />
        <div className="mx-auto mt-14 max-w-3xl">
          <Timeline items={education} />
        </div>
      </div>
    </section>
  );
}
