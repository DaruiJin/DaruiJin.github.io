"use client";

import { Container, Typography, Box, Avatar, Chip, Link as MuiLink } from "@mui/material";
import { FaEnvelope, FaLinkedin, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import { FaOrcid } from 'react-icons/fa6';
import Link from 'next/link';
import { newsItems } from '@/data/news';

// Selected publications
const selectedPublications = [
  {
    title: "Histology-based AI prediction of central nervous system tumour methylation subtypes",
    authors: "Jin D, Shmatko A, Patel A, et al.",
    venue: "Nature Cancer, 2026 (Accepted in principle)",
    link: "", // 添加 DOI 链接，例如: "https://doi.org/10.1038/..."
  },
  {
    title: "Teacher-student collaborated multiple instance learning for pan-cancer PDL1 expression prediction",
    authors: "Jin D, Liang S, Shmatko A, et al.",
    venue: "Nature Communications, 2024",
    link: "https://doi.org/10.1038/s41467-024-46764-0",
  },
  {
    title: "Neutralizing the impact of atmospheric turbulence on complex scene imaging via deep learning",
    authors: "Jin D, Chen Y, Lu Y, et al.",
    venue: "Nature Machine Intelligence, 2021",
    link: "https://doi.org/10.1038/s42256-021-00392-1",
  },
  {
    title: "Integrating structural symmetry and local homoplasy information in intuitionistic fuzzy clustering for infrared pedestrian segmentation",
    authors: "Jin D, Bai X, Wang Y.",
    venue: "IEEE Transactions on Systems, Man, and Cybernetics: Systems, 2019",
    link: "https://ieeexplore.ieee.org/abstract/document/8818359?casa_token=gWbFPbcLYrkAAAAA:V_Sb2aXYM5i31diOOARsdFo2yfTUvE1IJQTFlZojQTdbo3FGNyF8u-qsWgu4W2Gk4pCetDFhgGcRY-U",
  },
  {
    title: "Distribution information based intuitionistic fuzzy clustering for infrared ship segmentation",
    authors: "Jin D, Bai X.",
    venue: "IEEE Transactions on Fuzzy Systems, 2019",
    link: "https://doi.org/10.1109/TFUZZ.2019.2917809",
  },
];

// Contact info
const contactInfo = [
  { icon: FaEnvelope, text: "darui.jin@dkfz-heidelberg.de", href: "mailto:darui.jin@dkfz-heidelberg.de" },
  { icon: FaLinkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/darui-jin-838429282/" },
  { icon: FaGraduationCap, text: "Google Scholar", href: "https://scholar.google.com/citations?user=TIJrZmkAAAAJ&hl=en&oi=ao" },
  { icon: FaOrcid, text: "ORCID", href: "https://orcid.org/0000-0003-1784-8844" },
  { icon: FaMapMarkerAlt, text: "Heidelberg, Germany", href: null },
];

// Invited Talks
const invitedTalks = [
  {
    date: "2026.02",
    title: "AI-based histopathological classification of central nervous system tumours",
    event: "The 4th Annual Highlights of the SNO/EANO 2025 Webinar",
    location: "online",
    type: "invited",  // oral | poster | keynote | invited
  },
  {
    date: "2025.10",
    title: "AI-based histopathological classification of central nervous system tumours",
    event: "EANO 2025",
    location: "Prague, Czech",
    type: "oral",  // oral | poster | keynote | invited
  },
  {
    date: "2019.10",
    title: "Brain MR image segmentation using fuzzy clustering",
    event: "The 3rd Youth Forum of the Youth Committee, Medical Physics Branch",
    location: "Chongqing, China",
    type: "invited",  // oral | poster | keynote | invited
  },
  // 添加更多...
];

// Funding
const funding = [
  {
    title: "AI-enabled Fast, Accessible and Precise Diagnosis of Brain Tumors",
    role: "Co-applicant",  // PI | Co-PI | Co-I
    funder: "Dr. Rolf M. Schwiete Foundation",
    period: "2025 - 2027",
    amount: "€182,200",  // 可选，不想显示就留空 ""
    link: "",  // 可选，项目链接
  },
  {
    title: "PhD Student Academic Excellence Fund",
    role: "Applicant",  // PI | Co-PI | Co-I
    funder: "Beihang University",
    period: "2022 - 2023",
    amount: "€2,500",  // 可选，不想显示就留空 ""
    link: "",  // 可选，项目链接
  },
  // 添加更多资助项目...
];

// Research interests
const researchInterests = [
  "Machine Learning",
  "Computational Pathology",
  "Medical Image Analysis",
  "AI for Science",
];

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Left Column - Profile */}
        <Box
          sx={{
            width: { xs: '100%', md: '280px' },
            flexShrink: 0,
          }}
        >
          {/* Avatar */}
          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, mb: 3 }}>
            <Avatar
              alt="Darui Jin"
              src="/images/darui-jin-photo.jpeg"
              sx={{
                width: 180,
                height: 180,
                border: 3,
                borderColor: 'divider',
              }}
            />
          </Box>

          {/* Name & Title */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mb: 3 }}>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                mb: 1,
              }}
            >
              Darui Jin
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Post-doctoral Researcher
            </Typography>
            <Typography variant="body2" color="text.secondary">
              German Cancer Research Center (DKFZ)
            </Typography>
          </Box>

          {/* Research Interests */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              {researchInterests.map((interest) => (
                <Chip
                  key={interest}
                  label={interest}
                  size="small"
                  sx={{
                    bgcolor: 'action.hover',
                    color: 'text.primary',
                    fontSize: '0.75rem',
                    height: 24,
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Contact Info */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {contactInfo.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                <item.icon
                  size={16}
                  style={{ color: 'var(--text-secondary)', flexShrink: 0 }}
                />
                {item.href ? (
                  <MuiLink
                    href={item.href}
                    target={item.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={item.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.875rem',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {item.text}
                  </MuiLink>
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    {item.text}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Right Column - Content */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          {/* Bio */}
          <Box sx={{ mb: 5 }}>
            <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.primary' }}>
              I am a post-doctoral researcher exploring how AI can advance the Life Sciences — 
              from building deep learning models for medical image analysis to tackling challenges in computational pathology and cancer research. 
              When I'm not training models, I'm training myself: jogging, cycling, bouldering, learning some German (B1, here I come!) and writing grant proposals <span role="img" aria-label="furiously writing">🤪✍️</span>.
            </Typography>
          </Box>

          {/* News Section */}
          <Box sx={{ mb: 5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 600,
                }}
              >
                News
              </Typography>
              <Link href="/news" passHref style={{ textDecoration: 'none' }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'primary.main',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  All News →
                </Typography>
              </Link>
            </Box>

            <Box>
              {newsItems.slice(0, 4).map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    gap: 2,
                    py: 1.5,
                    borderBottom: index < 3 ? 1 : 0,
                    borderColor: 'divider',
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      width: 70,
                      flexShrink: 0,
                      fontFamily: 'monospace',
                    }}
                  >
                    {item.date}
                  </Typography>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {item.title}
                    </Typography>
                    {item.description && (
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>
                        {item.description}
                      </Typography>
                    )}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Selected Publications */}
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 600,
                }}
              >
                Selected Publications
              </Typography>
              <Link href="/publications" passHref style={{ textDecoration: 'none' }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'primary.main',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  All Publications →
                </Typography>
              </Link>
            </Box>

            <Box>
              {selectedPublications.map((pub, index) => (
                <Box
                  key={index}
                  sx={{
                    py: 2,
                    borderBottom: index < selectedPublications.length - 1 ? 1 : 0,
                    borderColor: 'divider',
                  }}
                >
                  {pub.link ? (
                    <MuiLink
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        fontWeight: 500,
                        mb: 0.5,
                        lineHeight: 1.5,
                        display: 'block',
                        color: 'text.primary',
                        textDecoration: 'none',
                        '&:hover': {
                          color: 'primary.main',
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {pub.title}
                    </MuiLink>
                  ) : (
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 500,
                        mb: 0.5,
                        lineHeight: 1.5,
                      }}
                    >
                      {pub.title}
                    </Typography>
                  )}
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                    {pub.authors}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'primary.main',
                      fontStyle: 'italic',
                    }}
                  >
                    {pub.venue}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Invited Talks Section */}
          {invitedTalks.length > 0 && (
            <Box sx={{ mt: 5 }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Invited Talks
              </Typography>

              <Box>
                {invitedTalks.map((talk, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      gap: 2,
                      py: 1.5,
                      borderBottom: index < invitedTalks.length - 1 ? 1 : 0,
                      borderColor: 'divider',
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        width: 70,
                        flexShrink: 0,
                        fontFamily: 'monospace',
                      }}
                    >
                      {talk.date}
                    </Typography>
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, flexWrap: 'wrap', mb: 0.5 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {talk.title}
                        </Typography>
                        <Chip
                          label={talk.type}
                          size="small"
                          sx={{
                            height: 18,
                            fontSize: '0.65rem',
                            bgcolor: talk.type === 'keynote' ? 'secondary.main' :
                                     talk.type === 'invited' ? 'primary.main' : 'action.hover',
                            color: (talk.type === 'keynote' || talk.type === 'invited')
                                     ? 'primary.contrastText' : 'text.primary',
                            fontWeight: 500,
                          }}
                        />
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {talk.event}{talk.location && `, ${talk.location}`}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          )}

          {/* Funding Section */}
          {funding.length > 0 && (
            <Box sx={{ mt: 5 }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Funding
              </Typography>

              <Box>
                {funding.map((grant, index) => (
                  <Box
                    key={index}
                    sx={{
                      py: 2,
                      borderBottom: index < funding.length - 1 ? 1 : 0,
                      borderColor: 'divider',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, flexWrap: 'wrap', mb: 0.5 }}>
                      {grant.link ? (
                        <MuiLink
                          href={grant.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            fontWeight: 500,
                            lineHeight: 1.5,
                            color: 'text.primary',
                            textDecoration: 'none',
                            '&:hover': {
                              color: 'primary.main',
                              textDecoration: 'underline',
                            },
                          }}
                        >
                          {grant.title}
                        </MuiLink>
                      ) : (
                        <Typography variant="body1" sx={{ fontWeight: 500, lineHeight: 1.5 }}>
                          {grant.title}
                        </Typography>
                      )}
                      <Chip
                        label={grant.role}
                        size="small"
                        sx={{
                          height: 20,
                          fontSize: '0.7rem',
                          bgcolor: grant.role === 'PI' ? 'primary.main' : 'action.hover',
                          color: grant.role === 'PI' ? 'primary.contrastText' : 'text.primary',
                          fontWeight: 500,
                        }}
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.25 }}>
                      {grant.funder}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                      <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                        {grant.period}
                      </Typography>
                      {grant.amount && (
                        <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 500 }}>
                          {grant.amount}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
}
