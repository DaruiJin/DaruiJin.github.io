"use client";

import { Container, Typography, Box, Button, Chip } from "@mui/material";
import { FaFileDownload, FaTrophy, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

// Data
const education = [
  {
    degree: "Ph.D. in Pattern Recognition and Intelligent Systems",
    institution: "Beihang University (BUAA)",
    location: "Beijing, China",
    period: "2017 - 2024",
    description: "Thesis: Research on Molecular Profiling in Histopathological Images using Multiple Instance Learning",
  },
  {
    degree: "Visiting Ph.D. Student",
    institution: "German Cancer Research Center (DKFZ)",
    location: "Heidelberg, Germany",
    period: "2022 - 2024",
    description: "Division of Artificial Intelligence in Oncology",
  },
  {
    degree: "B.Eng. in Control Engineering",
    institution: "Beihang University (BUAA)",
    location: "Beijing, China",
    period: "2013 - 2017",
    description: "Thesis: Patch-sparsity-based image inpainting through a facet deduced directional derivative",
  },
];

const experience = [
  {
    title: "Post-doctoral Researcher",
    organization: "German Cancer Research Center (DKFZ)",
    location: "Heidelberg, Germany",
    period: "Oct 2024 - Present",
    description: "AI for Science; Computational Pathology; CNS tumor classification",
  },
  {
    title: "PhD student Counselor",
    organization: "Beihang University",
    location: "Beijing, China",
    period: "Sep 2020 - Oct 2021",
    description: "Responsible for student affairs management, academic support coordination, and scholarship evaluation.",
  },
  {
    title: "Student Affairs Officer",
    organization: "Beihang University",
    location: "Beijing, China",
    period: "Sep 2017 - Sep 2018",
    description: "Organized and coordinated career-oriented activities and internship programs to enhance students' professional readiness and employability.",
  },
  {
    title: "Volunteer teacher",
    organization: "Beihang University",
    location: "Guizhou, China",
    period: "Jul 2015 - Aug 2015",
    description: "Participated in a volunteer teaching program in a remote area of Guiyang, Guizhou Province.",
  },
];

const awards = [
  { year: "2025", title: "Best Oral Presentation for Translational Research Award", org: "European Association of Neuro-Oncology (EANO)" },
  { year: "2024", title: "Top Ten Outstanding Doctoral Students", org: "Beihang University" },
  { year: "2022", title: "Top Ten Academic Innovation Award", org: "Beihang University"},
  { year: "2022", title: "National Scholarship for Doctoral Students", org: "Ministry of Education, China" },
  { year: "2018", title: "National Scholarship for Graduate Students", org: "Ministry of Education, China" },
];

const skills = {
  "Programming": ["Python", "PyTorch", "TensorFlow", "MATLAB"],
  "Deep Learning": ["Transformer", "MIL", "GAN", "CNN"],
  "Domain": ["Computational Pathology", "Medical Imaging", "Computer Vision"],
  "Tools": ["Git", "Linux", "Docker", "LaTeX"],
};

export default function CVPage() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
      {/* Page Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 5, flexWrap: 'wrap', gap: 2 }}>
        <Box>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              mb: 1,
            }}
          >
            Curriculum Vitae
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Academic and professional background
          </Typography>
        </Box>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<FaFileDownload />}
          href="/cv/Darui_Jin_CV.pdf"
          download
          sx={{
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 500,
          }}
        >
          Download PDF
        </Button>
      </Box>

      {/* Education Section */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
          <FaGraduationCap size={20} style={{ color: 'var(--primary)' }} />
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 600,
            }}
          >
            Education
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {education.map((edu, index) => (
            <Box
              key={index}
              sx={{
                pl: 3,
                borderLeft: 2,
                borderColor: 'primary.main',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1, mb: 0.5 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                  {edu.degree}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                  {edu.period}
                </Typography>
              </Box>
              <Typography variant="body2" color="primary.main" sx={{ mb: 0.5 }}>
                {edu.institution}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {edu.location}
              </Typography>
              {edu.description && (
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, fontStyle: 'italic' }}>
                  {edu.description}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Experience Section */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
          <FaBriefcase size={18} style={{ color: 'var(--primary)' }} />
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 600,
            }}
          >
            Experience
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {experience.map((exp, index) => (
            <Box
              key={index}
              sx={{
                pl: 3,
                borderLeft: 2,
                borderColor: 'secondary.main',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1, mb: 0.5 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                  {exp.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                  {exp.period}
                </Typography>
              </Box>
              <Typography variant="body2" color="secondary.main" sx={{ mb: 0.5 }}>
                {exp.organization}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {exp.location}
              </Typography>
              {exp.description && (
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, fontStyle: 'italic' }}>
                  {exp.description}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Awards Section */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
          <FaTrophy size={18} style={{ color: '#f59e0b' }} />
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 600,
            }}
          >
            Selected Awards
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {awards.map((award, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2,
                p: 2,
                borderRadius: 2,
                border: 1,
                borderColor: 'divider',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: 'primary.light',
                  bgcolor: 'action.hover',
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontFamily: 'monospace',
                  color: 'primary.main',
                  fontWeight: 600,
                  width: 50,
                  flexShrink: 0,
                }}
              >
                {award.year}
              </Typography>
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {award.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {award.org}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Skills Section */}
      <Box>
        <Typography
          variant="h5"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 600,
            mb: 3,
          }}
        >
          Skills
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 3 }}>
          {Object.entries(skills).map(([category, items]) => (
            <Box key={category}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontWeight: 500 }}>
                {category}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                {items.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      height: 26,
                      fontSize: '0.8rem',
                      bgcolor: 'action.hover',
                      color: 'text.primary',
                      '&:hover': {
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
