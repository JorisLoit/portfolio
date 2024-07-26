"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { aboutMe } from "@/utils/constants";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const info = aboutMe.info;
const serviceApiKey = process.env.NEXT_PUBLIC_SERVICE_API_KEY_MAIL as string;
const templateApiKey = process.env.NEXT_PUBLIC_TEMPLATE_API_KEY_MAIL as string;
const publicKeyMail = process.env.NEXT_PUBLIC_KEY_MAIL as string;
const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const infoTel = info.find((value) => {
    return value.fieldName.fr === "Téléphone";
  });
  const infoEmail = info.find((value) => {
    return value.fieldName.fr === "Email";
  });
  const t = useTranslations("Contact");
  const locale = useLocale();
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (form.current) {
      emailjs
        .sendForm(serviceApiKey, templateApiKey, form.current, {
          publicKey: publicKeyMail,
        })
        .then(
          () => {
            toast({
              description: t("toastSuccessMessage"),
            });
            if (form.current) {
              form.current.reset();
            }
            setIsLoading(false);
          },
          () => {
            toast({
              description: t("toastErrorMessage"),
            });
            setIsLoading(false);
          }
        );
    }
  };
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
              onSubmit={sendEmail}
              ref={form}
            >
              <h3 className="text-4xl text-accent">{t("title")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="lastname" placeholder={t("formLastName")} name="lastname" required />
                <Input
                  type="firstname"
                  placeholder={t("formFirstName")}
                  name="firstname"
                  required
                />
                <Input type="email" placeholder={t("formEmail")} name="user_email" required />
                <Input type="society" placeholder={t("formCompany")} name="society" />
                <Input type="num" name="num" placeholder={t("formPhone")} />
              </div>
              <Textarea
                className="h-[200px]"
                placeholder={t("formMessage")}
                required
                name="message"
              />
              <Button
                size="sm"
                className="max-w-30 flex align-middle"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("loadingMessage")}
                  </>
                ) : (
                  t("send")
                )}
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
                  <p className="text-visvis-200">{infoEmail?.fieldName[locale]}</p>
                  <h3 className="text-xl">{infoEmail?.fieldValue[locale]}</h3>
                </div>
              </li>
              <li className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-lavender-400 text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">
                    <FaPhoneAlt />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-visvis-200">{infoTel?.fieldName[locale]}</p>
                  <h3 className="text-xl">{infoTel?.fieldValue[locale]}</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
