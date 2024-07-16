"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import ContentResume from "@/components/ContentResume";
import { aboutMe, education, experience, skills } from "@/utils/constants";
import ScrollAreaEduExp from "@/components/ScrollAreaEduExp";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import SkillsListDisplay from "@/components/SkillsListDisplay";
import AboutMeSection from "@/components/AboutMeSection";
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center xl:items-start justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[360px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Expérience professionnelle</TabsTrigger>
            <TabsTrigger value="education">Formations</TabsTrigger>
            <TabsTrigger value="skills">Compétences</TabsTrigger>
            <TabsTrigger value="about">A propos de moi</TabsTrigger>
          </TabsList>
          <div className="min-h-{70vh] w-full">
            <TabsContent value="experience" className="w-full gap-2">
              <ContentResume title={experience.title} description={experience.description} />
              <ScrollAreaEduExp info={experience.info} />
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <ContentResume title={education.title} description={education.description} />
              <ScrollAreaEduExp info={education.info} />
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <ContentResume title={skills.title} description={skills.description} />
              <SkillsListDisplay />
            </TabsContent>
            <TabsContent value="about" className="w-full ">
              <ContentResume title={aboutMe.title} description={aboutMe.description} />
              <AboutMeSection />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
