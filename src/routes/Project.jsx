import Heroimg2 from "../components/Heroimg2"
import Navbar from "../components/Navbar"
import PricingCard from "../components/PricingCard"
import Work from "../components/Work"


const Project = () => {
    return (
        <>
            <Navbar />

            <Heroimg2 heading="Project." text="Some of my recent projects." />

            <Work />

            <PricingCard />
        </>
    )
}

export default Project