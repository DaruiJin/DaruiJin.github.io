"use client";

import { Container, Typography, Box, Chip } from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

interface Honor {
  year: string;
  title: string;
  organization: string;
  type: 'award' | 'scholarship' | 'recognition' | 'fellowship' | 'fund';
  description?: string;
}

const honorTypeConfig = {
  award: {
    icon: EmojiEventsIcon,
    color: '#f59e0b',
    label: 'Award',
  },
  scholarship: {
    icon: SchoolIcon,
    color: '#10b981',
    label: 'Scholarship',
  },
  recognition: {
    icon: StarIcon,
    color: '#7c4dff',
    label: 'Recognition',
  },
  fellowship: {
    icon: WorkspacePremiumIcon,
    color: '#3b82f6',
    label: 'Fellowship',
  },
  fund: {
    icon: AccountBalanceIcon,
    color: '#58508d',
    label: 'Fund',
  },
};

const honors: Honor[] = [
  {
    year: "2025",
    title: "Best Oral Presentation for Translational Research",
    organization: "European Association of Neuro-Oncology (EANO)",
    type: "award",
  },
  {
    year: "2024",
    title: "Top Ten Outstanding Doctoral Students",
    organization: "Beihang University",
    type: "award",
  },
  {
    year: "2024",
    title: "Beijing Municipal Outstanding Graduate",
    organization: "Beijing Municipal Education Commission and the Beijing Communist Youth League Committee",
    type: "award",
  },
  {
    year: "2024",
    title: "Nomination for the China Youth May Fourth Medal",
    organization: "Beihang University",
    type: "award",
  },
  {
    year: "2022",
    title: "National Scholarship for PhD Students",
    organization: "Ministry of Education of the People’s Republic of China",
    type: "scholarship",
  },
  {
    year: "2022",
    title: "PhD Student Academic Excellence Fund",
    organization: "Beihang University",
    type: "fund",
  },
  {
    year: "2022",
    title: "Top Ten Academic Innovation Award",
    organization: "Beihang University",
    type: "award",
  },
  {
    year: "2022",
    title: "State-Sponsored Study Abroad Program",
    organization: "China Scholarship Council",
    type: "scholarship",
  },
  {
    year: "2021",
    title: "Academic Excellence Award",
    organization: "Shen Yuan Honors College, Beihang University",
    type: "award",
  },
  {
    year: "2021",
    title: "Merit Student",
    organization: "Beihang University",
    type: "award",
  },
  {
    year: "2020",
    title: "Merit Student",
    organization: "Beihang University",
    type: "award",
  },
  {
    year: "2020",
    title: "Outstanding Graduate",
    organization: "Beihang University",
    type: "award",
  },
  {
    year: "2019",
    title: "Merit Student",
    organization: "Beihang University",
    type: "award",
  },
  {
    year: "2019",
    title: "Freshman Scholarship",
    organization: "Beihang University",
    type: "scholarship",
  },
  {
    year: "2018",
    title: "National Scholarship for Graduate Students",
    organization: "Ministry of Education of China",
    type: "scholarship",
  },
  {
    year: "2018",
    title: "Merit Student",
    organization: "Beihang University",
    type: "award",
  },
  {
    year: "2018",
    title: "Outstanding Graduate",
    organization: "Beihang University",
    type: "award",
  },
];

// Group honors by year
const groupedHonors = honors.reduce((acc, honor) => {
  if (!acc[honor.year]) acc[honor.year] = [];
  acc[honor.year].push(honor);
  return acc;
}, {} as Record<string, Honor[]>);

const sortedYears = Object.keys(groupedHonors).sort((a, b) => parseInt(b) - parseInt(a));

export default function HonorsPage() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
      {/* Page Header */}
      <Box sx={{ mb: 5 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            mb: 2,
          }}
        >
          Honors & Awards
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Academic achievements, scholarships, and recognitions received throughout my career.
        </Typography>
      </Box>

      {/* Honors by Year */}
      {sortedYears.map((year) => (
        <Box key={year} sx={{ mb: 5 }}>
          {/* Year Header */}
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 600,
              color: 'primary.main',
              mb: 3,
              pb: 1,
              borderBottom: 2,
              borderColor: 'primary.main',
              display: 'inline-block',
            }}
          >
            {year}
          </Typography>

          {/* Honors for Year */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {groupedHonors[year].map((honor, index) => {
              const config = honorTypeConfig[honor.type];
              const Icon = config.icon;

              return (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    gap: 2,
                    p: 2.5,
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
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 2,
                      bgcolor: `${config.color}15`,
                    }}
                  >
                    <Icon sx={{ fontSize: 24, color: config.color }} />
                  </Box>

                  {/* Content */}
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, flexWrap: 'wrap', mb: 0.5 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem', lineHeight: 1.4 }}>
                        {honor.title}
                      </Typography>
                      <Chip
                        label={config.label}
                        size="small"
                        sx={{
                          height: 20,
                          fontSize: '0.65rem',
                          bgcolor: `${config.color}15`,
                          color: config.color,
                          fontWeight: 500,
                        }}
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: honor.description ? 1 : 0 }}>
                      {honor.organization}
                    </Typography>
                    {honor.description && (
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, opacity: 0.8 }}>
                        {honor.description}
                      </Typography>
                    )}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      ))}

      {/* Summary Stats */}
      <Box
        sx={{
          mt: 6,
          p: 3,
          borderRadius: 2,
          bgcolor: 'action.hover',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: 3,
        }}
      >
        {Object.entries(
          honors.reduce((acc, h) => {
            acc[h.type] = (acc[h.type] || 0) + 1;
            return acc;
          }, {} as Record<string, number>)
        ).map(([type, count]) => {
          const config = honorTypeConfig[type as keyof typeof honorTypeConfig];
          const Icon = config.icon;
          return (
            <Box key={type} sx={{ textAlign: 'center' }}>
              <Icon sx={{ fontSize: 28, color: config.color, mb: 0.5 }} />
              <Typography variant="h5" sx={{ fontWeight: 700, color: config.color }}>
                {count}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {config.label}s
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
}
