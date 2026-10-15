import { Navbar } from './components/Navbar';
import { SocialSidebar } from './components/SocialSidebar';
import { Footer } from './components/Footer';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F7F7F7]">
      {/* Navigation */}
      <Navbar />
      
      {/* Social Sidebar - Desktop only */}
      <SocialSidebar />
      
      {/* Main Content */}
      <main>
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
