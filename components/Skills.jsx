import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 14 },
  },
}

function SkillBadge({ skill }) {
  return (
    <motion.div
      className="inline-block bg-accent/20 text-accent font-semibold text-sm px-4 py-1 rounded-full select-none cursor-default shadow-sm"
      variants={badgeVariants}
      title={skill}
    >
      {skill}
    </motion.div>
  )
}

export default function Skills() {
  const technicalSkills = [
    'Java',
    'Python',
    'Spring Boot',
    'Spring JPA',
    'Hibernate',
    'J2EE',
    'JDBC',
    'Kafka',
    'HTML',
    'JSP',
    'ReactJS',
    'MySQL',
    'Jenkins',
    'GitHub',
    'Maven',
    'IntelliJ',
    'Postman',
    'Swagger',
    'Dynatrace',
    'Splunk',
    'GCP',
    'Kubernetes',
  ]

  const professionalSkills = [
    'Project Coordination and Management',
    'Agile Development (Scrum)',
    'Team Collaboration',
    'Quality Assurance & Testing',
    'Documentation & Technical Writing',
    'Production Support & Incident Management',
  ]

  const softSkills = [
    'Communication',
    'Problem-Solving',
    'Attention to Detail',
    'Time Management',
    'Adaptability',
    'Teamwork',
  ]

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-10 max-w-5xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      {/* Technical Skills */}
      <motion.div
        className="space-y-6"
        variants={categoryVariants}
      >
        <h3 className="text-2xl font-semibold text-primary border-b border-accent py-1 max-w-max">
          Technical Skills
        </h3>
        <div className="flex flex-wrap gap-3 mt-4">
          {technicalSkills.map((skill) => (
            <SkillBadge skill={skill} key={skill} />
          ))}
        </div>
      </motion.div>

      {/* Professional Skills */}
      <motion.div
        className="space-y-6"
        variants={categoryVariants}
      >
        <h3 className="text-2xl font-semibold text-primary border-b border-accent py-1 max-w-max">
          Professional Skills
        </h3>
        <div className="flex flex-col gap-2 mt-4">
          {professionalSkills.map((skill) => (
            <motion.div
              key={skill}
              className="relative bg-accent/10 text-accent rounded-full h-8 px-4 flex items-center font-medium select-none shadow-sm"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              style={{ originX: 0 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Soft Skills */}
      <motion.div
        className="space-y-6"
        variants={categoryVariants}
      >
        <h3 className="text-2xl font-semibold text-primary border-b border-accent py-1 max-w-max">
          Soft Skills
        </h3>
        <div className="flex flex-wrap gap-3 mt-4">
          {softSkills.map((skill) => (
            <SkillBadge skill={skill} key={skill} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}