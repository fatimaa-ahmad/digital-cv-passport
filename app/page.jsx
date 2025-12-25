import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Introduction from '../components/Introduction'
import VisionMission from '../components/VisionMission'
import LaunchTeam from '../components/LaunchTeam'
import ProblemStatement from '../components/ProblemStatement'
import ProposedSolution from '../components/ProposedSolution'
import BusinessModelCanvas from '../components/BusinessModelCanvas'
import References from '../components/References'
import Footer from '../components/Footer'
import ChatbotButton from '../components/ChatbotButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Introduction />
      <VisionMission />
      <LaunchTeam />
      <ProblemStatement />
      <ProposedSolution />
      <BusinessModelCanvas />
      <References />
      <Footer />
      <ChatbotButton />
    </main>
  )
}

