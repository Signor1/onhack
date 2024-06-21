import MaxWrapper from "@/components/shared/MaxWrapper";
import dynamic from "next/dynamic";
const Index = dynamic(() => import("../../components/page"), { ssr: false })

export default function Home() {
  return (

    <MaxWrapper className="lg:px-[32px] lg:py-[32px] px-[16px] py-[16px]">
      <main className="w-full">
        <Index />
      </main>
    </MaxWrapper>

  )
}
