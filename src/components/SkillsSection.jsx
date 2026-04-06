import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Fʀᴏɴᴛᴇɴᴅ
  { name: "Hᴛᴍʟ/Cꜱꜱ", level: 95, category: "frontend" },
  { name: "Jᴀᴠᴀꜱᴄʀɪᴘᴛ", level: 90, category: "frontend" },
  { name: "Rᴇᴀᴄᴛ", level: 90, category: "frontend" },
  { name: "Tʏᴘᴇꜱᴄʀɪᴘᴛ", level: 85, category: "frontend" },
  { name: "Tᴀɪʟᴡɪʟᴅ Cꜱꜱ", level: 90, category: "frontend" },
  { name: "Nᴇxᴛ.ᴊꜱ", level: 80, category: "frontend" },

  // Bᴀᴄᴋᴇᴅ
  { name: "Nᴏᴅᴇ.ᴊꜱ", level: 80, category: "backend" },
  { name: "Exᴘʀᴇꜱꜱ", level: 75, category: "backend" },
  { name: "Mᴏɴɢᴏᴅʙ", level: 70, category: "backend" },
  { name: "PᴏꜱᴛɢʀᴇSQL", level: 65, category: "backend" },
  { name: "GʀᴀᴘʜQL", level: 60, category: "backend" },

  // Tᴏᴏʟꜱ
  { name: "Gɪᴛ/Gɪᴛʜᴜʙ", level: 90, category: "tools" },
  { name: "Dᴏᴄᴋᴇʀ", level: 70, category: "tools" },
  { name: "Fɪɢᴍᴀ", level: 85, category: "tools" },
  { name: "VS Cᴏᴅᴇ", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mʏ <span className="text-primary"> Sᴋɪʟʟꜱ</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
