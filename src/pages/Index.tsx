import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-frost to-ice">
      {/* Floating ice crystals background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 bg-glacier rounded-full"
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

      {/* Main content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl space-y-8"
        >
          {/* Temperature display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-sm border border-border/30 bg-card/40 px-6 py-3 backdrop-blur-sm"
          >
            <span className="font-mono text-sm tracking-wider text-muted-foreground">
              -273.15°C
            </span>
            <span className="h-3 w-px bg-border" />
            <span className="font-mono text-sm font-semibold tracking-wider text-glacier">
              0K
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl"
          >
            <span className="text-gradient-ice">Absolute</span>
            <br />
            <span className="text-foreground">Zero</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            The theoretical lowest temperature where all classical motion of
            particles ceases.
            <br />
            <span className="text-sm">A state of perfect stillness.</span>
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center"
          >
            {/* <Button
              size="lg"
              className="group relative overflow-hidden bg-glacier hover:bg-glacier/90 text-primary-foreground font-medium tracking-wide transition-all duration-300"
            >
              <span className="relative z-10">Explore</span>
              <motion.div
                className="absolute inset-0 bg-accent"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button> */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-glacier/30 bg-transparent hover:bg-glacier/10 text-foreground font-medium tracking-wide"
            >
              <Link to="/facts">Learn More</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-0 right-0 text-center"
        >
          <p className="font-mono text-xs tracking-widest text-muted-foreground">
            at0k
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
