"use client";

import { Container, Typography, Box, Chip, Link as MuiLink, IconButton, Tooltip } from "@mui/material";
import { FaFilePdf, FaExternalLinkAlt, FaQuoteRight } from 'react-icons/fa';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  type: 'journal' | 'conference' | 'preprint';
  doi?: string;
  pdf?: string;
  highlight?: boolean;
}

const publications: Publication[] = [
  {
    title: "Histology-based AI prediction of central nervous system tumour methylation subtypes",
    authors: "Jin D, Shmatko A, Patel A, et al.",
    journal: "Nature Cancer",
    year: 2026,
    type: "journal",
    doi: ""
  },
  {
    title: "Multi-attribute embedding network for breast cancer subtyping prediction reveals intrinsic molecular properties hidden in H&E images",
    authors: "Liu Q, Zhao Z, Liang S, Zhang Y, Jin D, et al.",
    journal: "Biomedical Signal Processing and Control, 113, 109189",
    year: 2026,
    type: "journal",
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S1746809425017008"
  },
  {
    title: "AI-based histopathological classification of central nervous system tumours",
    authors: "Jin D, Shmatko A, Patel A, et al.",
    journal: "Neuro-Oncology",
    year: 2025,
    type: "journal",
    doi: "https://academic.oup.com/neuro-oncology/article/27/Supplement_3/iii26/8272023"
  },
  {
    title: "Extended depth-of-field resolution enhancement microscopy imaging for neutralizing the impact of mineral inhomogeneous surface",
    authors: "Sun H, Xu X, Shi Q, Chen J, Jin D, Li Y, Lai Y, Bai X.",
    journal: "The Innov. Geosci.",
    year: 2024,
    type: "journal",
    doi: "https://www.the-innovation.org/article/doi/10.59717/j.xinn-geo.2024.100083"
  },
  {
    title: "Teacher-student collaborated multiple instance learning for pan-cancer PDL1 expression prediction from histopathology slides",
    authors: "Jin D, Liang S, Shmatko A, Arnold A, Horst D, Grünewald TG, Gerstung M, Bai X.",
    journal: "Nature Communications, 15(1):3063",
    year: 2024,
    type: "journal",
    doi: "https://doi.org/10.1038/s41467-024-46764-0",
    highlight: true,
  },
  {
    title: "Computational histopathology enables high-granularity diagnostics in CNS tumours",
    authors: "Shmatko A, Jin D, Patel A, Rahmanzade R, Wick W, Krieg S, Pfister SM, Jones DT, von Deimling A, Gerstung M, Sahm F.",
    journal: "Neuro-Oncology",
    year: 2024,
    type: "journal",
    doi: "https://academic.oup.com/neuro-oncology/article/26/Supplement_5/v1/7824920"
  },
  {
    title: "Revelation of hidden 2D atmospheric turbulence strength fields from turbulence effects in infrared imaging",
    authors: "Wang Y, Jin D, Chen J, Bai X.",
    journal: "Nature Computational Science, 3(8):687-699",
    year: 2023,
    type: "journal",
    doi: "https://www.nature.com/articles/s43588-023-00498-z"
  },
  {
    title: "Exploring the influence of nasal vestibule structure on nasal obstruction using CFD and machine learning method",
    authors: "Jin X, Lu Y, Ren X, Guo S, Jin D, Liu B, Bai X, Liu J.",
    journal: "Medical Engineering & Physics, 117:103988",
    year: 2023,
    type: "journal",
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S1350453323000401"
  },
  {
    title: "Attention-assisted adversarial model for cerebrovascular segmentation in 3D TOF-MRA volumes",
    authors: "Chen Y, Jin D, Guo B, Bai X.",
    journal: "IEEE Transactions on Medical Imaging, 41(12):3520-3532",
    year: 2022,
    type: "journal",
    doi: "https://ieeexplore.ieee.org/abstract/document/9808178"
  },
  {
    title: "Light transport induced domain adaptation for semantic segmentation in thermal infrared urban scenes",
    authors: "Chen J, Liu Z, Jin D, Wang Y, Yang F, Bai X.",
    journal: "IEEE Transactions on Intelligent Transportation Systems, 23(12):23194-23211",
    year: 2022,
    type: "journal",
    doi: "https://ieeexplore.ieee.org/abstract/document/9855443"
  },
  {
    title: "Neutralizing the impact of atmospheric turbulence on complex scene imaging via deep learning",
    authors: "Jin D, Chen Y, Lu Y, Chen J, Wang P, Liu Z, Guo S, Bai X.",
    journal: "Nature Machine Intelligence, 3(10):876-884",
    year: 2021,
    type: "journal",
    doi: "https://www.nature.com/articles/s42256-021-00392-1"
  },
  {
    title: "Traffic thermal infrared texture generation based on siamese semantic CycleGAN",
    authors: "Wang P, Sun H, Bai X, Guo S, Jin D.",
    journal: "Infrared Physics & Technology, 116:103748",
    year: 2021,
    type: "journal",
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S1350449521001201"
  },
  {
    title: "Integrating structural symmetry and local homoplasy information in intuitionistic fuzzy clustering for infrared pedestrian segmentation",
    authors: "Jin D, Bai X, Wang Y.",
    journal: "IEEE Transactions on Systems, Man, and Cybernetics: Systems, 51(7):4365-4378",
    year: 2019,
    type: "journal",
    doi: "https://ieeexplore.ieee.org/abstract/document/8818359"
  },
  {
    title: "Distribution information based intuitionistic fuzzy clustering for infrared ship segmentation",
    authors: "Jin D, Bai X.",
    journal: "IEEE Transactions on Fuzzy Systems, 28(8):1557-1571",
    year: 2019,
    type: "journal",
    doi: "https://ieeexplore.ieee.org/abstract/document/8718306"
  },
  {
    title: "Patch-sparsity-based image inpainting through a facet deduced directional derivative",
    authors: "Jin D, Bai X.",
    journal: "IEEE Transactions on Circuits and Systems for Video Technology, 29(5):1310-1324",
    year: 2018,
    type: "journal",
    doi: "https://ieeexplore.ieee.org/abstract/document/8361831"
  },
];

const typeConfig = {
  journal: { color: '#7c4dff', label: 'Journal' },
  conference: { color: '#10b981', label: 'Conference' },
  preprint: { color: '#f59e0b', label: 'Preprint' },
};

// Group by year
const groupedPublications = publications.reduce((acc, pub) => {
  if (!acc[pub.year]) acc[pub.year] = [];
  acc[pub.year].push(pub);
  return acc;
}, {} as Record<number, Publication[]>);

const sortedYears = Object.keys(groupedPublications)
  .map(Number)
  .sort((a, b) => b - a);

export default function PublicationsPage() {
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
          Publications
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          A selection of my academic publications in medical image analysis, infrared image analysis and deep learning applications.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          For a complete list, please visit my{' '}
          <MuiLink
            href="https://scholar.google.com/citations?user=TIJrZmkAAAAJ&hl=en&oi=ao"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar profile
          </MuiLink>
          .
        </Typography>
      </Box>

      {/* Publications by Year */}
      {sortedYears.map((year) => (
        <Box key={year} sx={{ mb: 5 }}>
          {/* Year Header */}
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 600,
              color: 'primary.main',
              mb: 3,
              pb: 1,
              borderBottom: 2,
              borderColor: 'primary.main',
            }}
          >
            {year}
          </Typography>

          {/* Publications for Year */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {groupedPublications[year].map((pub, index) => (
              <Box
                key={index}
                sx={{
                  p: 2.5,
                  mx: -2.5,
                  borderRadius: 2,
                  transition: 'background-color 0.2s ease',
                  position: 'relative',
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                  ...(pub.highlight && {
                    borderLeft: 3,
                    borderColor: 'primary.main',
                    pl: 2,
                    ml: -2,
                  }),
                }}
              >
                {/* Title */}
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    lineHeight: 1.5,
                    color: 'text.primary',
                  }}
                >
                  {pub.title}
                </Typography>

                {/* Authors */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {pub.authors}
                </Typography>

                {/* Journal & Type */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', mb: 1.5 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontStyle: 'italic',
                      color: 'primary.main',
                    }}
                  >
                    {pub.journal}
                  </Typography>
                  <Chip
                    label={typeConfig[pub.type].label}
                    size="small"
                    sx={{
                      height: 20,
                      fontSize: '0.65rem',
                      bgcolor: `${typeConfig[pub.type].color}15`,
                      color: typeConfig[pub.type].color,
                      fontWeight: 500,
                    }}
                  />
                  {pub.highlight && (
                    <Chip
                      label="Featured"
                      size="small"
                      sx={{
                        height: 20,
                        fontSize: '0.65rem',
                        bgcolor: 'secondary.light',
                        color: 'secondary.dark',
                        fontWeight: 500,
                      }}
                    />
                  )}
                </Box>

                {/* Links */}
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {pub.doi && (
                    <Tooltip title="DOI" arrow>
                      <IconButton
                        component="a"
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          color: 'text.secondary',
                          '&:hover': { color: 'primary.main' },
                        }}
                      >
                        <FaExternalLinkAlt size={14} />
                      </IconButton>
                    </Tooltip>
                  )}
                  {pub.pdf && (
                    <Tooltip title="PDF" arrow>
                      <IconButton
                        component="a"
                        href={pub.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          color: 'text.secondary',
                          '&:hover': { color: 'primary.main' },
                        }}
                      >
                        <FaFilePdf size={14} />
                      </IconButton>
                    </Tooltip>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      ))}

      {/* Citation Note */}
      <Box
        sx={{
          mt: 4,
          p: 3,
          borderRadius: 2,
          bgcolor: 'action.hover',
          display: 'flex',
          gap: 2,
          alignItems: 'flex-start',
        }}
      >
        <FaQuoteRight size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 4 }} />
        <Typography variant="body2" color="text.secondary">
          If you find my work useful in your research, please consider citing the relevant papers.
          For citation formats, please refer to the individual paper pages on the publisher websites.
        </Typography>
      </Box>
    </Container>
  );
}
