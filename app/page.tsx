import {Header} from "@/components/header"
import {Hero} from "@/components/hero"
import {About} from "@/components/about"
import {Skills} from "@/components/skills"
import {Projects} from "@/components/projects"
import {Experience} from "@/components/experience"
import {Contact} from "@/components/contact"
import {Footer} from "@/components/footer"
import {FloatingElements} from "@/components/floating-elements"

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            <FloatingElements/>
            <Header/>
            <main>
                <Hero/>
                <About/>
                <Skills/>
                <Projects/>
                {/*<Experience/>*/}
                <Contact/>
            </main>
            <Footer/>
        </div>
    )
}