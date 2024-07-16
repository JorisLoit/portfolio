"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { aboutMe } from "@/utils/constants";
import { motion } from "framer-motion";

const info = aboutMe.info;
const page = () => {
  const infoTel = info.find((value) => {
    return value.fieldName === "Téléphone";
  });
  const infoEmail = info.find((value) => {
    return value.fieldName === "Email";
  });
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-lavender-400 rounded-xl"
              method="POST"
              action="sendmail.php"
            >
              <h3 className="text-4xl text-accent">Prenons contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Prenom" name="firstname" required />
                <Input type="lastname" placeholder="Nom" name="lastname" required />
                <Input type="email" placeholder="Adresse mail" name="email" required />
                <Input type="num" name="num" placeholder="Numéro de téléphone" />
              </div>
              <Textarea
                className="h-[200px]"
                placeholder="Ecrivez votre message"
                required
                name="message"
              />
              <Button size="sm" className="max-w-30 flex align-middle" type="submit">
                Envoyer
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              <li className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-lavender-400 text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">
                    <FaEnvelope />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-visvis-200">{infoEmail?.fieldName}</p>
                  <h3 className="text-xl">{infoEmail?.fieldValue}</h3>
                </div>
              </li>
              <li className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-lavender-400 text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">
                    <FaPhoneAlt />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-visvis-200">{infoTel?.fieldName}</p>
                  <h3 className="text-xl">{infoTel?.fieldValue}</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default page;
