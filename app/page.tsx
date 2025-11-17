import React from "react";
import { Button } from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";


const Page = () => {
    return (
        <main>
            <h1 className="text-2xl underline">Popular Companions</h1>
            <section className="home-section">
                <CompanionCard
                    id="123"
                    name="Neura the Brainy Explorer"
                    topic="Neural Network of the Brain"
                    subject="science"
                    duration={45}
                    color="#ffda6e"

                />
                <CompanionCard
                    id="1234"
                    name="Verba the ocabulary builder"
                    topic="language"
                    subject="English"
                    duration={30}
                    color="#BDE7FF"
                />
                <CompanionCard
                    id="12345"
                    name="Countsy the Number Wizard"
                    topic="Derivatives & Integrals"
                    subject="science"
                    duration={45}
                    color="#e5d0ff"
                />
            </section>
            <section className="home-section">
                 <CompanionsList
                     title="Recently completed sessions"
                     companions={recentSessions}
                     classNames="w-2/3 max-lg:w-full"
                 />
                <CTA/>
            </section>
        </main>
    );
};

export default Page;
