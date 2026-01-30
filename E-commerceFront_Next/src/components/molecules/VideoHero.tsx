import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Button } from '../atoms/Button';
import { Typography } from '../atoms/Typography';

interface VideoHeroProps {
  videoUrl: string;
  title: string;
  subtitle: string;
}

export const VideoHero: React.FC<VideoHeroProps> = ({ videoUrl, title, subtitle }) => {
  return (
    <div className="relative h-[60vh] sm:h-[80vh] w-full overflow-hidden rounded-2xl sm:rounded-[32px] glass corporate-shadow">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
      
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="small" className="mb-2 sm:mb-4 text-accent text-shadow-strong">
            Experiencia Premium
          </Typography>
          <Typography variant="h1" className="mb-4 sm:mb-6 max-w-4xl mx-auto text-white text-shadow-strong">
            {title}
          </Typography>
          <Typography variant="body" className="mb-6 sm:mb-10 max-w-2xl mx-auto text-white text-sm sm:text-base text-shadow-strong">
            {subtitle}
          </Typography>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button size="lg" className="w-full sm:w-auto">Ver Colección</Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 border-white/20 text-white hover:bg-white/10">
              <Play size={18} fill="white" /> Ver Video
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
