"use client";

import { Container, Typography, Box, Card, CardContent, Chip, IconButton, Tooltip } from "@mui/material";
import { FaGithub, FaExternalLinkAlt, FaFilePdf, FaDatabase, FaBroadcastTower, FaCertificate} from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  links?: {
    github?: string;
    paper?: string;
    dataset?: string;
    mediareport?: string;
    demo?: string;
    patent?: string
  };
  status?: 'active' | 'completed';
}

const projects: Project[] = [

  {
    title: "Histology-based AI prediction of CNS tumour methylation subtypes",
    description: "In collaboration with Heidelberg University Hospital, we developed Hetairos, an AI model capable of diagnosing 102 brain tumor classes trained on over 10,000 cases from 11 institutions across 4 continents. The model achieves approximately twice the diagnostic accuracy of trained neuropathologists while accurately diagnosing two-thirds of cases without molecular testing. Hetairos provides rapid turnaround (<2 days vs. 3 weeks) at minimal cost (~€2 per case), offering a practical solution for resource-limited settings.",
    tags: ["Multiple Instance Learning", "Histopathology", "CNS Tumours", "DNA methylation"],
    status: "active",
    links: {
      paper: "https://www.researchsquare.com/article/rs-5600492/v1",
    },
  },
  {
    title: "Pan-cancer PDL1 expression prediction",
    description: "Predicting molecular biomarkers directly from histology slides can provide cost-effective alternatives to expensive molecular assays. In this project, we developed MILTS, a teacher-student collaborated multiple instance learning framework to predict PD-L1 expression across 20 solid tumor types using weakly supervised learning. Evaluated on over 12,000 slides, our model achieved an average AUC of 0.83, with prediction heatmaps validated against immunohistochemistry staining patterns, offering a scalable solution for immunotherapy patient stratification.",
    tags: ["Transfer Learning", "Computational Pathology", "Biomarker Prediction", "Cancer Research"],
    status: "completed",
    links: {
      paper: "https://www.nature.com/articles/s41467-024-46764-0",
      patent: "https://patents.google.com/patent/CN114970862A/zh"
    },
  },
  {
    title: "Atmospheric turbulence distorted video sequence restoration",
    description: "Atmospheric turbulence causes severe spatiotemporal blur and geometric distortions in long-range imaging applications. In this project, we developed TSR-WGAN, a GAN-based method that suppresses turbulence-induced degradation through physics-informed inverse reasoning, outperforming comparison approaches by over 50% in subjective evaluations. We also released a comprehensive dataset of 27,458 video sequences (411,870 frames) with both simulated and real-world turbulence effects.",
    tags: ["Image Restoration", "Inverse Problems", "Deep Learning", "Physics"],
    status: "completed",
    links: {
      dataset: "https://zenodo.org/records/5101910",
      paper: "https://www.nature.com/articles/s42256-021-00392-1",
      mediareport: "https://bhkj.buaa.edu.cn/info/1013/6933.htm",
      patent: "https://xueshu.baidu.com/ndscholar/browse/detail?paperid=1y540vs0883w0g00md600460p5429832"
      // mediareport: "http://www.sa.buaa.edu.cn/info/1050/7788.htm"

    },
  },
  {
    title: "Infrared ship segmentation",
    description: "In this project, we developed an improved intuitionistic fuzzy clustering algorithm for infrared ship segmentation by extending grayscale values into membership, non-membership, and hesitation degrees. We incorporated ship position priors detected through variance analysis and integrated neighborhood information via regularization, significantly improving segmentation accuracy for infrared maritime images.",
    tags: ["Infrared Image", "Segmentation", "Fuzzy Clustering"],
    status: "completed",
    links: {
      paper: "https://ieeexplore.ieee.org/abstract/document/8718306",
      patent: "https://patents.google.com/patent/CN108198193A/zh"
    },
  },
  {
    title: "Infrared pedestrian segmentation",
    description: "Infrared pedestrian images suffer from interferential backgrounds, boundary uncertainty, and noise that challenge accurate segmentation. In this project, we developed SR-IFCM, an intuitionistic fuzzy clustering method that integrates structural symmetry information (via ellipse-based probability maps) and local homoplasy to handle lost texture details and intensity inhomogeneity. Evaluated on a dataset of 500 annotated infrared pedestrian images, our method outperformed 12 state-of-the-art segmentation approaches.",
    tags: ["Infrared Image", "Segmentation", "Fuzzy Clustering"],
    status: "completed",
    links: {
      paper: "https://ieeexplore.ieee.org/abstract/document/8818359",
    },
  },
  {
    title: "Image inpaint based on the patch sparsity metric",
    description: "In this project, we develop a patch-sparsity-based inpainting algorithm that uses the Facet model’s directional derivatives to improve matching accuracy and noise resistance. We integrate these structural features into a sparse representation framework to ensure seamless boundary continuity and precise image reconstruction. Finally, we optimize the filling order by redesigning the priority function to better balance confidence values and structural sparsity.",
    tags: ["Image Inpainting", "Directional Derivative"],
    status: "completed",
    links: {
      paper: "https://ieeexplore.ieee.org/abstract/document/8361831",
    },
  },
];

export default function ProjectsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
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
          Projects
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
          A collection of research projects focusing on deep learning applications in image processing.
        </Typography>
      </Box>

      {/* Projects Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 3,
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              border: 1,
              borderColor: 'divider',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
              {/* Header with title and status */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    lineHeight: 1.3,
                    flex: 1,
                  }}
                >
                  {project.title}
                </Typography>
                {project.status && (
                  <Chip
                    label={project.status}
                    size="small"
                    sx={{
                      ml: 1,
                      height: 22,
                      fontSize: '0.7rem',
                      bgcolor: project.status === 'active' ? 'success.light' : 'action.hover',
                      color: project.status === 'active' ? 'success.dark' : 'text.secondary',
                    }}
                  />
                )}
              </Box>

              {/* Description */}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mb: 2,
                  flex: 1,
                  lineHeight: 1.6,
                }}
              >
                {project.description}
              </Typography>

              {/* Tags */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2 }}>
                {project.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      height: 22,
                      fontSize: '0.7rem',
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                      opacity: 0.9,
                      '&:hover': {
                        opacity: 1,
                      },
                    }}
                  />
                ))}
              </Box>

              {/* Links */}
              {project.links && (
                <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                  {project.links.github && (
                    <Tooltip title="GitHub" arrow>
                      <IconButton
                        component="a"
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          color: 'text.secondary',
                          '&:hover': { color: 'primary.main' },
                        }}
                      >
                        <FaGithub size={18} />
                      </IconButton>
                    </Tooltip>
                  )}
                  {project.links.paper && (
                    <Tooltip title="Paper" arrow>
                      <IconButton
                        component="a"
                        href={project.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          color: 'text.secondary',
                          '&:hover': { color: 'primary.main' },
                        }}
                      >
                        <FaFilePdf size={18} />
                      </IconButton>
                    </Tooltip>
                  )}
                  {project.links.dataset && (
                    <Tooltip title="Dataset" arrow>
                      <IconButton
                        component="a"
                        href={project.links.dataset}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          color: 'text.secondary',
                          '&:hover': { color: 'primary.main' },
                        }}
                      >
                        <FaDatabase size={16} />
                      </IconButton>
                    </Tooltip>
                  )}
                  {project.links.mediareport && (
                    <Tooltip title="Mediareport" arrow>
                      <IconButton
                        component="a"
                        href={project.links.mediareport}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          color: 'text.secondary',
                          '&:hover': { color: 'primary.main' },
                        }}
                      >
                        <FaBroadcastTower size={16} />
                      </IconButton>
                    </Tooltip>
                  )}
                  {project.links.patent && (
                    <Tooltip title="Patent" arrow>
                      <IconButton
                        component="a"
                        href={project.links.patent}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          color: 'text.secondary',
                          '&:hover': { color: 'primary.main' },
                        }}
                      >
                        <FaCertificate size={16} />
                      </IconButton>
                    </Tooltip>
                  )}
                  {project.links.demo && (
                    <Tooltip title="Demo" arrow>
                      <IconButton
                        component="a"
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          color: 'text.secondary',
                          '&:hover': { color: 'primary.main' },
                        }}
                      >
                        <FaExternalLinkAlt size={16} />
                      </IconButton>
                    </Tooltip>
                  )}
                </Box>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
