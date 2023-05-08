import { Why } from "@/types/why"
import SingleWhy from "./SingleWhy"
import HeroTitle from "../Common/HeroTitle"
import whyData from "./whyData"

const Whys = () => {
  return (
    <section className="relative z-10 bg-primary/[.03] py-12 md:py-16 lg:py-20">
        <div className="container">
            <HeroTitle 
                title="Why Choose Us"
                paragraph="We're your virtual assistant matchmakers, and we'll find you the perfect match without the awkward first date."
                center
            />
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                {whyData.map((why) => (
                    <SingleWhy key={why.id} why={why} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Whys