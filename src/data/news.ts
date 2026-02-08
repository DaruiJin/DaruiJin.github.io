// 新闻数据 - 在这里统一更新，首页和 News 页面都会同步
// News data - update here, both homepage and News page will sync

export type NewsType = 'publication' | 'award' | 'position' | 'announcement';

export interface NewsItem {
  date: string;      // 格式: "YYYY.MM"
  title: string;
  description?: string;
  type: NewsType;    // publication | award | position | announcement
}

export const newsItems: NewsItem[] = [
  {
    date: "2026.01",
    title: "Paper accepted at Nature Cancer",
    description: "Our paper on Histology-based AI prediction of CNS tumour methylation subtypes from histology has been accepted in principle at Nature Cancer.",
    type: "publication",
  },
  {
    date: "2025.10",
    title: "Best Oral Presentation for Translational Research Award at EANO 2025",
    description: "Received the Best Oral Presentation for Translational Research Award at the European Association of Neuro-Oncology conference.",
    type: "award",
  },
  {
    date: "2025.08",
    title: "Abstract accepted at EANO 2025",
    description: "Our work on AI-based histopathological classification of central nervous system tumours has been accepted as an oral presentation at the European Association of Neuro-Oncology conference.",
    type: "publication",
  },
  {
    date: "2024.10",
    title: "Started postdoctoral position at DKFZ",
    description: "Joined the German Cancer Research Center (DKFZ) in Heidelberg as a post-doctoral researcher.",
    type: "position",
  },
  {
    date: "2024.06",
    title: "Beijing Municipal Outstanding Graduate",
    description: "Received the Beijing Municipal Outstanding Graduate Award from Beijing Municipal Education Commission and the Beijing Communist Youth League Committee.",
    type: "award",
  },
  {
    date: "2024.06",
    title: "PhD completed",
    description: "Successfully defended my PhD dissertation at Beihang University on Molecular Profiling in Histopathological Images using Multiple Instance Learning.",
    type: "announcement",
  },
  {
    date: "2024.06",
    title: "Awarded as Top Ten Outstanding Doctoral Students",
    description: "Recognized as one of the Top Ten Outstanding Doctoral Students at Beihang University.",
    type: "award",
  },
  {
    date: "2024.04",
    title: "Paper published in Nature Communications (Editor's Highlight)",
    description: "Our paper on teacher-student collaborated multiple instance learning for pan-cancer PDL1 expression prediction from histopathology slides has been published as an Editor's Highlight in Nature Communications.",
    type: "publication",
  },
  {
    date: "2023.08",
    title: "Paper published in Nature Computational Science",
    description: "Our work on atmospheric turbulence field reconstruction from imaging effects has been published.",
    type: "publication",
  },
  {
    date: "2022.10",
    title: "Started visiting at DKFZ",
    description: "Began a visiting scholar stay at DKFZ to consolidate expertise at the intersection of AI and life sciences.",
    type: "position",
  },
  {
    date: "2022.09",
    title: "National Scholarship awarded",
    description: "Received the Chinese National Scholarship for outstanding academic performance.",
    type: "award",
  },
  {
    date: "2022.06",
    title: "Top Ten Award for Academic Innovation",
    description: "Received the Top Ten award for Academic Innovation at Beihang University.",
    type: "award",
  },
  {
    date: "2021.11",
    title: "Academic Excellence Award",
    description: "Received the Academic Excellence Award from Shen Yuan Honors College, Beihang University.",
    type: "award",
  },
  {
    date: "2021.10",
    title: "Paper published in Nature Machine Intelligence",
    description: "Our work on neutralizing atmospheric turbulence impact via deep learning has been published.",
    type: "publication",
  },
];
