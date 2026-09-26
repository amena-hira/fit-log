import Banner from "@/components/homepage/Banner";
import Workouts from "@/components/homepage/Workouts";
import { Suspense } from "react";
import GlobalLoading from "./loading";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={<GlobalLoading />}>
        <Workouts />
      </Suspense>
    </div>
  );
}
