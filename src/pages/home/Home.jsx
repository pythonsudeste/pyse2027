import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section6 from "./sections/Section6";
import Section7 from "./sections/Section7";
import Section8 from "./sections/Section8";
import Section10 from "./sections/Section10";
import KeynoteSection from "../../feature/keynotesInformation/KeynoteSection";
import SectionSponsors from "../../feature/SectionSponsors/SectionSponsors";

export default function Home() {
    return(
        <div className="Home">
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <KeynoteSection/>
            <Section6/>
            <Section7/>
            <Section10/>
            <Section8/>
            <SectionSponsors/>
        </div>
    )
}