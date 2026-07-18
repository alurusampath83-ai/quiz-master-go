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
  return { board: next, rank, entry: best, isNewBest };
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
