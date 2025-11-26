import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

const facts = [
  {
    label: "Thermodynamic scale",
    title: "-273.15°C equals 0 Kelvin",
    description:
      "Absolute zero defines the zero point of the Kelvin scale, extrapolated from the linear cooling of ideal gases where molecular motion mathematically reaches zero.",
  },
  {
    label: "Third law physics",
    title: "Unattainable limit",
    description:
      "The third law of thermodynamics states that you can approach but never reach absolute zero because extracting the last bits of thermal energy would require infinite steps or time.",
  },
  {
    label: "Quantum reality",
    title: "Motion never fully stops",
    description:
      "Even at 0 K atoms retain zero-point energy. Quantum mechanics prevents particles from sitting perfectly still, so absolute zero represents minimum motion, not total stillness.",
  },
  {
    label: "Laboratory feats",
    title: "Nanokelvin experiments",
    description:
      "Scientists use laser and evaporative cooling in magnetic traps to chill atoms to billionths of a Kelvin, enabling exotic states such as Bose–Einstein condensates.",
  },
];

const Facts = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-frost to-ice">
      {/* Floating ice crystals background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-glacier"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -20,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: window.innerHeight + 20,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <main className="relative z-10 flex min-h-screen flex-col items-center px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-sm border border-border/30 bg-card/40 px-6 py-3 text-sm font-mono uppercase tracking-widest backdrop-blur-sm"
          >
            <span className="text-muted-foreground">Deep Dive</span>
            <span className="h-3 w-px bg-border" />
            <span className="text-glacier">Absolute Zero Facts</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            A frozen frontier shaped by thermodynamics and quantum rules.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto max-w-3xl text-lg text-muted-foreground"
          >
            These scientific highlights explain why absolute zero is more than just an extreme
            temperature—it is a meaningful boundary for matter, energy, and information.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center pt-4"
          >
            <Button asChild size="lg" variant="glacier" className="px-10 text-base font-semibold">
              <Link to="/">Back to home</Link>
            </Button>
          </motion.div>
        </motion.div>

        <section className="relative z-10 mt-16 w-full max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            {facts.map((fact, index) => (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group rounded-3xl border border-white/10 bg-card/50 p-6 text-left shadow-2xl shadow-glacier/5 backdrop-blur"
              >
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-glacier/70">{fact.label}</p>
                <h2 className="mt-4 text-2xl font-semibold text-foreground">{fact.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{fact.description}</p>
                <div className="mt-6 flex items-center text-xs font-semibold tracking-widest text-glacier/70">
                  <span className="h-px flex-1 bg-glacier/30" />
                  <span className="px-3">FACT {String(index + 1).padStart(2, "0")}</span>
                  <span className="h-px flex-1 bg-glacier/30" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="font-mono text-xs tracking-widest text-muted-foreground">colder than cold.</p>
        </motion.div>
      </main>
    </div>
  );
};

export default Facts;

