# 网站内容更新指南

本文档说明如何更新网站各页面的内容。

---

## 目录

1. [首页 (About)](#1-首页-about)
2. [新闻页 (News)](#2-新闻页-news)
3. [论文页 (Publications)](#3-论文页-publications)
4. [项目页 (Projects)](#4-项目页-projects)
5. [荣誉页 (Honors)](#5-荣誉页-honors)
6. [简历页 (CV)](#6-简历页-cv)
7. [页脚 (Footer)](#7-页脚-footer)
8. [全局设置](#8-全局设置)

---

## 1. 首页 (About)

**文件路径**: `src/app/page.tsx`

### 1.1 个人简介

找到 `Bio` 部分（约第167行），修改文字内容：

```tsx
{/* Bio */}
<Box sx={{ mb: 5 }}>
  <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.primary' }}>
    在这里修改你的个人简介...
  </Typography>
</Box>
```

### 1.2 首页新闻预览

**注意**: 首页新闻和 News 页面共享同一数据源，请在 `src/data/news.ts` 中更新（见下方第2节）。首页自动显示最新的 4 条新闻。

### 1.3 精选论文

找到 `selectedPublications` 数组（约第17行）：

```tsx
const selectedPublications = [
  {
    title: "论文标题",
    authors: "作者列表",
    venue: "期刊名称, 年份",
  },
  // 添加更多论文...
];
```

### 1.4 联系方式

找到 `contactInfo` 数组（约第36行）：

```tsx
const contactInfo = [
  { icon: FaEnvelope, text: "your.email@example.com", href: "mailto:your.email@example.com" },
  { icon: FaLinkedin, text: "LinkedIn", href: "https://linkedin.com/in/..." },
  // 更多联系方式...
];
```

### 1.5 研究兴趣标签

找到 `researchInterests` 数组（约第45行）：

```tsx
const researchInterests = [
  "Deep Learning",
  "Computational Pathology",
  // 添加更多标签...
];
```

### 1.6 头像

将新头像放入 `public/images/` 目录，然后修改（约第74行）：

```tsx
<Avatar
  alt="Your Name"
  src="/images/your-photo.jpeg"  // 修改这里
  ...
/>
```

---

## 2. 新闻页 (News)

**文件路径**: `src/data/news.ts`（首页和 News 页面共享此数据）

```tsx
export const newsItems: NewsItem[] = [
  {
    date: "2026.01",           // 格式: "YYYY.MM"
    title: "新闻标题",
    description: "详细描述...", // 可选
    type: "publication",       // publication | award | position | announcement
  },
  // 添加更多新闻...
];
```

**新闻类型对应图标**：
- `publication` - 论文图标（紫色）
- `award` - 奖杯图标（橙色）
- `position` - 工作图标（绿色）
- `announcement` - 公告图标（蓝色）

**注意**: 更新此文件后，首页（显示最新 4 条）和 News 页面（显示全部，按年份分组）都会自动同步。

---

## 3. 论文页 (Publications)

**文件路径**: `src/app/publications/page.tsx`

找到 `publications` 数组（约第17行）：

```tsx
const publications: Publication[] = [
  {
    title: "论文标题",
    authors: "作者列表 (用 et al. 缩写)",
    journal: "期刊名称, 卷号:页码",
    year: 2026,
    type: "journal",      // journal | conference | preprint
    doi: "https://doi.org/...",  // 可选
    pdf: "/papers/xxx.pdf",      // 可选，PDF链接
    highlight: true,             // 可选，是否高亮显示
  },
  // 添加更多论文...
];
```

**论文会自动按年份分组显示**。

---

## 4. 项目页 (Projects)

**文件路径**: `src/app/projects/page.tsx`

找到 `projects` 数组（约第15行）：

```tsx
const projects: Project[] = [
  {
    title: "项目名称",
    description: "项目描述...",
    tags: ["Deep Learning", "PyTorch", "Python"],
    status: "active",  // active | completed
    links: {
      github: "https://github.com/...",  // 可选
      paper: "https://...",              // 可选
      demo: "https://...",               // 可选
    },
  },
  // 添加更多项目...
];
```

---

## 5. 荣誉页 (Honors)

**文件路径**: `src/app/honors/page.tsx`

找到 `honors` 数组（约第30行）：

```tsx
const honors: Honor[] = [
  {
    year: "2025",
    title: "奖项名称",
    organization: "颁发机构",
    type: "award",  // award | scholarship | recognition | fellowship
    description: "详细描述...",  // 可选
  },
  // 添加更多荣誉...
];
```

**荣誉类型**：
- `award` - 奖项（橙色）
- `scholarship` - 奖学金（绿色）
- `recognition` - 荣誉称号（紫色）
- `fellowship` - 研究资助（蓝色）

---

## 6. 简历页 (CV)

**文件路径**: `src/app/cv/page.tsx`

### 6.1 教育经历

找到 `education` 数组（约第9行）：

```tsx
const education = [
  {
    degree: "学位名称",
    institution: "学校名称",
    location: "地点",
    period: "2017 - 2024",
    description: "备注信息",  // 可选
  },
  // 添加更多...
];
```

### 6.2 工作经历

找到 `experience` 数组（约第33行）：

```tsx
const experience = [
  {
    title: "职位名称",
    organization: "机构名称",
    location: "地点",
    period: "Oct 2024 - Present",
    description: "工作描述",
  },
  // 添加更多...
];
```

### 6.3 获奖经历

找到 `awards` 数组（约第43行）：

```tsx
const awards = [
  { year: "2025", title: "奖项名称", org: "颁发机构" },
  // 添加更多...
];
```

### 6.4 技能

找到 `skills` 对象（约第50行）：

```tsx
const skills = {
  "Programming": ["Python", "PyTorch", "TensorFlow"],
  "Deep Learning": ["CNN", "Transformer", "MIL"],
  // 添加更多分类...
};
```

### 6.5 CV PDF 文件

将 PDF 文件放入 `public/cv/` 目录，命名为 `Darui_Jin_CV.pdf`（或修改代码中的路径）。

---

## 7. 页脚 (Footer)

**文件路径**: `src/components/Footer.tsx`

找到 `socialLinks` 数组（约第7行）：

```tsx
const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:your.email@example.com',
    icon: FaEnvelope,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/yourusername',
    icon: FaGithub,
  },
  // 修改或添加更多社交链接...
];
```

---

## 8. 全局设置

### 8.1 网站标题和描述

**文件路径**: `src/app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: "Your Name | Academic Homepage",
  description: "网站描述...",
};
```

### 8.2 导航栏名字

**文件路径**: `src/components/Header.tsx`

找到 Logo 部分（约第85行）：

```tsx
<Link href="/" ...>
  Your Name  {/* 修改这里 */}
</Link>
```

### 8.3 配色方案

**文件路径**: `src/theme.ts`

修改 `lightTheme` 和 `darkTheme` 中的 `palette` 部分来更改颜色。

---

## 快速参考表

| 内容 | 文件路径 | 位置 |
|------|----------|------|
| 个人简介 | `src/app/page.tsx` | `Bio` 部分 |
| 新闻动态 | `src/data/news.ts` | `newsItems` 数组（首页和News页同步） |
| 精选论文 | `src/app/page.tsx` | `selectedPublications` 数组 |
| 联系方式 | `src/app/page.tsx` | `contactInfo` 数组 |
| 研究兴趣 | `src/app/page.tsx` | `researchInterests` 数组 |
| 头像 | `public/images/` | 图片文件 |
| 全部论文 | `src/app/publications/page.tsx` | `publications` 数组 |
| 全部项目 | `src/app/projects/page.tsx` | `projects` 数组 |
| 全部荣誉 | `src/app/honors/page.tsx` | `honors` 数组 |
| 教育经历 | `src/app/cv/page.tsx` | `education` 数组 |
| 工作经历 | `src/app/cv/page.tsx` | `experience` 数组 |
| CV奖项 | `src/app/cv/page.tsx` | `awards` 数组 |
| 技能 | `src/app/cv/page.tsx` | `skills` 对象 |
| 社交链接 | `src/components/Footer.tsx` | `socialLinks` 数组 |
| 网站标题 | `src/app/layout.tsx` | `metadata` 对象 |
| 配色 | `src/theme.ts` | `palette` 部分 |

---

## 开发命令

```bash
# 启动开发服务器（实时预览）
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

---

## 注意事项

1. **修改后保存文件**，开发服务器会自动刷新页面
2. **添加新图片**时，放入 `public/images/` 目录
3. **添加 PDF 文件**时，放入 `public/cv/` 或 `public/papers/` 目录
4. 数组中的内容**顺序**会影响显示顺序（新闻和荣誉会按年份自动分组）
5. 修改代码前建议**备份**或使用 Git 版本控制
