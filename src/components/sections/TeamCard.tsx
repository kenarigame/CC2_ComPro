import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card text-center transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 p-5">
        <h3 className="text-base font-semibold text-foreground">
          {member.name}
        </h3>
        <p className="text-xs font-medium uppercase tracking-wide text-primary">
          {member.position}
        </p>
        <p className="text-sm text-muted-foreground">{member.bio}</p>
        <Button variant="outline" size="sm" className="mt-3 gap-1.5">
          <Mail className="h-4 w-4" /> Contact
        </Button>
      </div>
    </div>
  );
}

export default TeamCard;
