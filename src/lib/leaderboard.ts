export type LeaderboardEntry = {
  name: string;
  score: number;
  total: number;
  pct: number;
  secondsUsed: number;
  date: string; // ISO
};

const KEY = "neonquiz.leaderboard.v1";
const MAX_ENTRIES = 50;

function safeRead(): LeaderboardEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (e): e is LeaderboardEntry =>
        e &&
        typeof e.name === "string" &&
        typeof e.score === "number" &&
        typeof e.total === "number" &&
        typeof e.secondsUsed === "number",
    );
  } catch {
    return [];
  }
}

function safeWrite(entries: LeaderboardEntry[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(entries));
  } catch {
    // ignore quota / private-mode errors
  }
}

// Higher score wins; ties broken by less time used, then earlier date.
export function compareEntries(a: LeaderboardEntry, b: LeaderboardEntry) {
  if (b.score !== a.score) return b.score - a.score;
  if (a.secondsUsed !== b.secondsUsed) return a.secondsUsed - b.secondsUsed;
  return a.date.localeCompare(b.date);
}

export function getLeaderboard(): LeaderboardEntry[] {
  return safeRead().sort(compareEntries);
}

/**
 * Records a run, keeping only the best entry per player (case-insensitive).
 * Returns the updated sorted board and the player's 1-based rank + entry.
 */
export function recordScore(entry: Omit<LeaderboardEntry, "date"> & { date?: string }) {
  const full: LeaderboardEntry = {
    ...entry,
    date: entry.date ?? new Date().toISOString(),
  };
  const key = full.name.trim().toLowerCase();
  const existing = safeRead();
  const others = existing.filter((e) => e.name.trim().toLowerCase() !== key);
  const prior = existing.find((e) => e.name.trim().toLowerCase() === key);
  const best = prior && compareEntries(prior, full) <= 0 ? prior : full;
  const next = [...others, best].sort(compareEntries).slice(0, MAX_ENTRIES);
  safeWrite(next);
  const rank = next.findIndex((e) => e === best) + 1;
  const isNewBest = best === full;
  return { board: next, rank, entry: best, isNewBest, prior };
}

export function clearLeaderboard() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}

export function formatDuration(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function sameDay(iso: string, ref: Date) {
  const d = new Date(iso);
  return (
    d.getFullYear() === ref.getFullYear() &&
    d.getMonth() === ref.getMonth() &&
    d.getDate() === ref.getDate()
  );
}

/**
 * Returns the current player's rank among entries recorded today.
 * Rank is 1-based; 0 means the player has no entry today.
 */
export function getDailyStanding(name: string) {
  const today = new Date();
  const key = name.trim().toLowerCase();
  const todays = safeRead()
    .filter((e) => sameDay(e.date, today))
    .sort(compareEntries);
  const rank = todays.findIndex((e) => e.name.trim().toLowerCase() === key) + 1;
  return { rank, total: todays.length, leader: todays[0] ?? null, todays };
}
