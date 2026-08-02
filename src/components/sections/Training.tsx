import SectionHeading from '@/components/SectionHeading';
import Timeline from '@/components/Timeline';
import { training } from '@/data/portfolio';

export default function Training() {
  return (
    <section id="training" className="py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Training"
          title={<>Professional <span className="gradient-text">training</span></>}
          subtitle="Hands-on programs that shaped my practical development skills."
        />
        <div className="mx-auto mt-14 max-w-3xl">
          <Timeline items={training} />
        </div>
      </div>
    </section>
  );
}
