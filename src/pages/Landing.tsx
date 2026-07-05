import { useStore } from "@/lib/store";
import { LandingHeader } from "./landing/LandingHeader";
import { LandingHero } from "./landing/LandingHero";
import { FeaturedCourses } from "./landing/FeaturedCourses";
import { LandingFeatures } from "./landing/LandingFeatures";
import { LandingStats } from "./landing/LandingStats";
import { LandingTestimonials } from "./landing/LandingTestimonials";
import { LandingCTA } from "./landing/LandingCTA";

export default function Landing() {
  const { courses } = useStore();
  const featured = courses.filter((c) => c.published).slice(0, 6);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingHeader />
      <LandingHero />
      <LandingFeatures />
      <FeaturedCourses featured={featured} />

      <LandingStats />
      <LandingTestimonials />
      <LandingCTA />
    </div>
  );
}
