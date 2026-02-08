"use client";

import { Container, Typography, Box, IconButton, Tooltip } from "@mui/material";
import { FaGithub, FaLinkedin, FaGraduationCap, FaEnvelope } from 'react-icons/fa';
import { FaOrcid } from 'react-icons/fa6';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:darui.jin@dkfz-heidelberg.de',
    icon: FaEnvelope,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/yourgithub',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/darui-jin-838429282/',
    icon: FaLinkedin,
  },
  {
    name: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=TIJrZmkAAAAJ&hl=en&oi=ao',
    icon: FaGraduationCap,
  },
  {
    name: 'ORCID',
    href: 'https://orcid.org/0000-0003-1784-8844',
    icon: FaOrcid,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: 'auto',
        borderTop: 1,
        borderColor: 'divider',
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {/* Social Links */}
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            {socialLinks.map((link) => (
              <Tooltip key={link.name} title={link.name} arrow>
                <IconButton
                  component="a"
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  sx={{
                    color: 'text.secondary',
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      color: 'primary.main',
                      bgcolor: 'action.hover',
                    },
                  }}
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </IconButton>
              </Tooltip>
            ))}
          </Box>

          {/* Copyright */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: '0.85rem' }}
          >
            © {currentYear} Darui Jin
          </Typography>
        </Box>

        {/* Optional: Powered by line */}
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            display: 'block',
            textAlign: 'center',
            mt: 2,
            opacity: 0.7,
          }}
        >
          Built with Next.js & Material-UI
        </Typography>
      </Container>
    </Box>
  );
}
