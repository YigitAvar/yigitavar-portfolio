import SectionTitle from "../components/ui/SectionTitle";

function CalendarDemo() {
  return (
    <section className="section-container calendar-demo-page">
      <SectionTitle
        eyebrow="Calendar Demo"
        title="Reservation calendar experiment."
        description="This page will become a custom calendar demo for reservation workflows, table-based scheduling, and timeline-style booking interfaces."
      />

      <div className="demo-placeholder">
        <span>Coming Soon</span>
        <h3>Custom booking calendar</h3>
        <p>
          The first version will use mock reservation data. Later, this page can
          be connected to a backend API for real reservation management.
        </p>
      </div>
    </section>
  );
}

export default CalendarDemo;