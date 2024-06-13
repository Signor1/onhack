import MaxWrapper from "@/components/shared/MaxWrapper";
import dynamic from "next/dynamic";
const Index = dynamic(() => import("../../components/page"), { ssr: false })

export default function Home() {
  return (

    <MaxWrapper className="md:py-4 py-1">
      <main className="w-full">
        <Index />
      </main>
    </MaxWrapper>

  )
}
