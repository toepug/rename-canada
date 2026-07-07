import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface ArchiveEntry {
  slug: string;
  title: string;
  assetNumber: string;
  status: string;
  statusColour: string;
  category: string;
  region: string;
  era: string;
  reviewCycle: string;
  sunsetTarget?: string;
  consultationStatus: string;
  dateModified: string;
  body: string;
}

export interface UpdateEntry {
  slug: string;
  title: string;
  date: string;
  category: string;
  body: string;
}

export interface ReportEntry {
  slug: string;
  title: string;
  deliverable: string;
  author: string;
  project: string;
  commissionedBy: string;
  status: string;
  dateModified: string;
  body: string;
}

export interface TestimonialEntry {
  slug: string;
  quote: string;
  attribution: string;
  location: string;
  status: string;
}

export interface CandidateEntry {
  slug: string;
  title: string;
  designation: string;
  status: string;
  consultationStatus: string;
  support: number;
  supportLeader: string;
  developedBy: string;
  dateModified: string;
  body: string;
}

function stripHtmlComments(content: string) {
  return content.replace(/<!--[\s\S]*?-->/g, "").trim();
}

function serializeFrontmatter(data: Record<string, unknown>) {
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(data)) {
    result[key] =
      value instanceof Date ? value.toISOString().slice(0, 10) : value;
  }
  return result;
}

function readMarkdownDir(dir: string) {
  const fullDir = path.join(CONTENT_DIR, dir);
  if (!fs.existsSync(fullDir)) return [];
  return fs
    .readdirSync(fullDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(fullDir, file), "utf8");
      const { data, content } = matter(raw);
      return {
        ...serializeFrontmatter(data),
        body: stripHtmlComments(content),
      } as Record<string, unknown> & { body: string };
    });
}

export function getArchiveEntries(): ArchiveEntry[] {
  return readMarkdownDir("archive") as unknown as ArchiveEntry[];
}

export function getArchiveEntry(slug: string): ArchiveEntry | undefined {
  return getArchiveEntries().find((entry) => entry.slug === slug);
}

export function getUpdateEntries(): UpdateEntry[] {
  return (readMarkdownDir("updates") as unknown as UpdateEntry[]).sort(
    (a, b) => (a.date < b.date ? 1 : -1),
  );
}

export function getReportEntries(): ReportEntry[] {
  return readMarkdownDir("reports") as unknown as ReportEntry[];
}

export function getReportEntry(slug: string): ReportEntry | undefined {
  return getReportEntries().find((entry) => entry.slug === slug);
}

export function getTestimonials(): TestimonialEntry[] {
  return readMarkdownDir("engagement") as unknown as TestimonialEntry[];
}

export function getCandidateEntries(): CandidateEntry[] {
  return (readMarkdownDir("candidates") as unknown as CandidateEntry[]).sort(
    (a, b) => (a.designation < b.designation ? -1 : 1),
  );
}

export function getCandidateEntry(slug: string): CandidateEntry | undefined {
  return getCandidateEntries().find((entry) => entry.slug === slug);
}

export function getPage(slug: string) {
  const filePath = path.join(CONTENT_DIR, "pages", `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { ...serializeFrontmatter(data), body: stripHtmlComments(content) };
}
