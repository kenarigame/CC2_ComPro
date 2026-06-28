export const Route = create("/team")({
  head: () => ({
    meta: [
      { title: "Team — Whitman & Co. Notary" },
      {
        name: "description",
        content:
          "Meet the licensed notaries and legal consultants behind our practice.",
      },
      { property: "og:title", content: "Team — Whitman & Co. Notary" },
      {
        property: "og:description",
        content:
          "Meet the licensed notaries and legal consultants behind our practice.",
      },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  const leadership = TEAM.filter((t) => t.group === "leadership");
  const consultants = TEAM.filter((t) => t.group === "consultant");
  return (
    <SiteLayout>
      <section className="border-b border-border bg-section">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our people
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            The notaries and consultants behind every file.
          </h1>
        </div>
      </section>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Leadership</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((m) => (
              <TeamCard key={m.id} member={m} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-section">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Legal consultants</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {consultants.map((m) => (
              <TeamCard key={m.id} member={m} />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default TeamPage;
