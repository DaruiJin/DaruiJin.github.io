"use client";

import { Container, Typography, Box, Chip } from "@mui/material";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import { newsItems, NewsItem } from '@/data/news';

// News type configuration
const newsTypeConfig = {
  publication: {
    icon: ArticleOutlinedIcon,
    color: '#7c4dff',
    label: 'Publication',
  },
  award: {
    icon: EmojiEventsOutlinedIcon,
    color: '#f59e0b',
    label: 'Award',
  },
  position: {
    icon: WorkOutlineIcon,
    color: '#10b981',
    label: 'Position',
  },
  announcement: {
    icon: CampaignOutlinedIcon,
    color: '#3b82f6',
    label: 'Announcement',
  },
};

// Group news by year
const groupedNews = newsItems.reduce((acc, item) => {
  const year = item.date.split('.')[0];
  if (!acc[year]) acc[year] = [];
  acc[year].push(item);
  return acc;
}, {} as Record<string, NewsItem[]>);

const sortedYears = Object.keys(groupedNews).sort((a, b) => parseInt(b) - parseInt(a));

export default function NewsPage() {
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
          News
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Latest updates on publications, awards, and academic activities.
        </Typography>
      </Box>

      {/* News Timeline */}
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

          {/* News Items for Year */}
          <Box>
            {groupedNews[year].map((item, index) => {
              const config = newsTypeConfig[item.type];
              const Icon = config.icon;

              return (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    gap: 2,
                    py: 2.5,
                    borderBottom: index < groupedNews[year].length - 1 ? 1 : 0,
                    borderColor: 'divider',
                    '&:hover': {
                      bgcolor: 'action.hover',
                      mx: -2,
                      px: 2,
                      borderRadius: 1,
                    },
                    transition: 'background-color 0.2s ease',
                  }}
                >
                  {/* Date */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      width: 70,
                      flexShrink: 0,
                      fontFamily: 'monospace',
                      pt: 0.5,
                    }}
                  >
                    {item.date.split('.')[1]}月
                  </Typography>

                  {/* Icon */}
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 1,
                      bgcolor: `${config.color}15`,
                    }}
                  >
                    <Icon sx={{ fontSize: 18, color: config.color }} />
                  </Box>

                  {/* Content */}
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, flexWrap: 'wrap', mb: 0.5 }}>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {item.title}
                      </Typography>
                      <Chip
                        label={config.label}
                        size="small"
                        sx={{
                          height: 20,
                          fontSize: '0.7rem',
                          bgcolor: `${config.color}15`,
                          color: config.color,
                          fontWeight: 500,
                        }}
                      />
                    </Box>
                    {item.description && (
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {item.description}
                      </Typography>
                    )}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      ))}
    </Container>
  );
}
