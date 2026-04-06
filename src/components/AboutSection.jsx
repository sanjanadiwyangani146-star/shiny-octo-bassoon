import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Aʙᴏᴜᴛ <span className="text-primary"> Mᴇ</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Vɪᴅᴇᴏ Eᴅɪᴛᴏʀ & Gʀᴀᴘʜɪᴄ Dᴇꜱɪɴɢɪɴɢ
            </h3>

            <p className="text-muted-foreground">
              Mᴏᴅᴇʀɴ ᴠɪᴅᴇᴏ ᴇᴅɪᴛᴏʀ ꜱᴘᴇᴄɪᴀʟɪᴢɪɴɢ ɪɴ ᴄɪɴᴇᴍᴀᴛɪᴄ ꜱᴛᴏʀʏᴛᴇʟʟɪɴɢ ᴀɴᴅ 
              ᴍᴏɴᴛɪᴏɴ ᴇꜰꜰᴇᴄᴛꜱ. I ᴛʀᴀɴꜱꜰᴏʀᴍ ʀᴀᴡ ꜰᴏᴏᴛᴀɢᴇ ɪɴᴛᴏ ʜɪɢʜ-Qᴜᴀʟɪᴛʏ ,
              ᴇɴɢᴀɢɪɴɢ ᴠɪꜱᴜᴀʟ ᴄᴏɴᴛᴇɴᴛ ᴛᴀɪʟᴏʀᴇᴅ ꜰᴏʀ ʙʀᴀɴᴅꜱ ᴀɴᴅ ᴅɪɢɪᴛᴀʟ ᴘʟᴀᴛꜰᴏʀᴍꜱ
            </p>

            <p className="text-muted-foreground">
              I ᴀᴍ ᴀ ʟᴏɢᴏ ᴇᴅɪᴛᴏʀ ᴡɪᴛʜ ꜱᴛᴏʀɴɢ ᴇxᴘᴇʀɪᴇɴᴄᴇ ɪɴ ᴄʀᴇᴀᴛɪɴɢ ᴄʟᴇᴀɴ ᴀɴᴅ
              ᴍᴇᴍᴏʀᴀʙʟᴇ ʙʀᴀɴᴅ ɪᴅᴇɴᴛɪᴛɪᴇꜱ. I ꜰᴏᴄᴜꜱ ᴏɴ ʙᴀʟᴀɴᴄᴇᴅ ᴄᴏᴍᴘᴏꜱɪᴛɪᴏɴ ᴀɴᴅ
              ꜱᴛʀᴀᴛᴇɢɪᴄ ᴠɪꜱᴜᴀʟ ʙʀᴀɴᴅɪɴɢ ᴛᴏ ᴅᴇʟɪᴠᴇʀ ʟᴏɢᴏꜱ ᴛʜᴀᴛ ᴛʀᴜʟʏ ʀᴇᴘʀᴇꜱᴇɴᴛ ᴀ ʙʀᴀɴᴅ ᴠɪꜱɪᴏɴ.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Gᴇᴛ Iɴ Tᴏᴜᴄʜ
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Dᴏᴡɴʟᴏᴀᴅ Fx
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Wᴇʙ Dᴇᴠᴇʟᴏᴘᴍᴇɴᴛ</h4>
                  <p className="text-muted-foreground">
                    Cʀᴇᴀᴛɪɴɢ ʀᴇꜱᴘᴏɴꜱɪᴠᴇ ᴡᴇʙꜱɪᴛᴇꜱ ᴀɴᴅ ᴡᴇʙ ᴀᴘᴘʟɪᴄᴀᴛɪᴏɴꜱ ᴡɪᴛʜ ᴍᴏᴅᴇʀɴ ꜰʀᴀᴍᴇᴡᴏʀᴋꜱ.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Uɪ/Ux Dᴇꜱɪɢɴ</h4>
                  <p className="text-muted-foreground">
                    Dᴇꜱɪɢɴɪɴɢ ɪɴᴛᴜɪᴛɪᴠᴇ ᴜꜱᴇʀ ɪɴᴛᴇʀꜰᴀᴄᴇꜱ ᴀɴᴅ ꜱᴇᴀᴍʟᴇꜱꜱ ᴜꜱᴇʀ ᴇxᴘᴇʀɪᴇɴᴄᴇꜱ.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Pʀᴏᴊᴇᴄᴛ Mᴀɴᴀɢᴇᴍᴇɴᴛ</h4>
                  <p className="text-muted-foreground">
                    Lᴇᴀᴅɪɴɢ ᴘʀᴏᴊᴇᴄᴛꜱ ꜰʀᴏᴍ ᴄᴏɴᴄᴇᴘᴛɪᴏɴ ᴛᴏ ᴄᴏᴍᴘʟᴇᴛɪᴏɴ ᴡɪᴛʜ ᴀɢɪʟᴇ ᴍᴇᴛʜᴏᴅᴏʟᴏɢɪᴇꜱ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
