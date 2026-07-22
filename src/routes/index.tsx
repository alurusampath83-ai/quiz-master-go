import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { questions, type Question } from "@/lib/quiz-data";
import {
  formatDuration,
  getDailyStanding,
  getLeaderboard,
  recordScore,
  type LeaderboardEntry,
} from "@/lib/leaderboard";

export const Route = createFileRoute("/")({
  component: QuizApp,
});

type Phase = "login" | "quiz" | "results";

const QUIZ_MINUTES = 30;

function QuizApp() {
  const [phase, setPhase] = useState<Phase>("login");
  const [name, setName] = useState("");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [current, setCurrent] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUIZ_MINUTES * 60);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundOrbs />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-14">
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary via-accent to-secondary shadow-glow-sm" />
            <span className="font-display text-lg font-semibold tracking-tight">
              Neon<span className="neon-text text-primary">Quiz</span>
            </span>
          </div>
          {phase === "quiz" && (
            <TimerBadge seconds={timeLeft} />
          )}
        </header>

        {phase === "login" && (
          <LoginCard
            onStart={(n) => {
              setName(n);
              setAnswers({});
              setCurrent(0);
              setTimeLeft(QUIZ_MINUTES * 60);
              setPhase("quiz");
            }}
          />
        )}
        {phase === "quiz" && (
          <QuizView
            name={name}
            answers={answers}
            setAnswers={setAnswers}
            current={current}
            setCurrent={setCurrent}
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
            onFinish={() => setPhase("results")}
          />
        )}
        {phase === "results" && (
          <ResultsView
            name={name}
            answers={answers}
            secondsUsed={QUIZ_MINUTES * 60 - timeLeft}
            onRetry={() => {
              setAnswers({});
              setCurrent(0);
              setTimeLeft(QUIZ_MINUTES * 60);
              setPhase("quiz");
            }}
            onLogout={() => {
              setPhase("login");
              setName("");
            }}
          />
        )}
      </div>
    </div>
  );
}

function BackgroundOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-float-orb absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
      <div
        className="animate-float-orb absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-secondary/25 blur-3xl"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="animate-float-orb absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent/25 blur-3xl"
        style={{ animationDelay: "-8s" }}
      />
    </div>
  );
}

function LoginCard({ onStart }: { onStart: (name: string) => void }) {
  const [value, setValue] = useState("");
  const [err, setErr] = useState(false);
  const [board, setBoard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    setBoard(getLeaderboard());
  }, []);

  return (
    <div className="space-y-6">

    <div className="animate-scale-in glass neon-border rounded-2xl p-8 sm:p-12">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
        APPSC Group-3 · Chapter 6
      </div>
      <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
        Ready to test your <span className="neon-text text-primary">computer</span>
        <br />
        <span className="neon-text text-secondary">awareness?</span>
      </h1>
      <p className="mt-4 max-w-lg text-muted-foreground">
        100 timed multiple-choice questions. {QUIZ_MINUTES} minutes on the clock. Enter your name to begin.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (value.trim().length < 2) {
            setErr(true);
            return;
          }
          onStart(value.trim());
        }}
        className="mt-8 space-y-4"
      >
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-muted-foreground">Your name</span>
          <input
            autoFocus
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setErr(false);
            }}
            placeholder="e.g. Sampath"
            className={`w-full rounded-xl border border-border bg-input/60 px-4 py-3 text-base text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/40 ${
              err ? "animate-shake border-destructive" : ""
            }`}
          />
        </label>
        <div className="flex flex-wrap items-center gap-3 rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
          <Stat label="Questions" value="100" />
          <Divider />
          <Stat label="Duration" value={`${QUIZ_MINUTES} min`} />
          <Divider />
          <Stat label="Format" value="MCQ" />
        </div>
        <button
          type="submit"
          className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary via-accent to-secondary px-6 py-3.5 font-semibold text-primary-foreground transition hover:brightness-110 active:scale-[0.99]"
        >
          <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
          Start Quiz →
        </button>
      </form>
    </div>

      <LeaderboardCard
        board={board}
        title="Top players"
        limit={5}
        compact
        emptyHint="No scores yet — finish a quiz to appear here."
      />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground/70">{label}</div>
      <div className="font-display text-base text-foreground">{value}</div>
    </div>
  );
}
function Divider() {
  return <div className="h-8 w-px bg-border" />;
}

function TimerBadge({ seconds }: { seconds: number }) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  const danger = seconds <= 60;
  const warn = seconds <= 10 * 60 && seconds > 60;
  return (
    <div
      className={`glass flex items-center gap-2 rounded-full border px-4 py-2 font-display text-sm tabular-nums transition-colors ${
        danger
          ? "border-destructive text-destructive animate-pulse-ring"
          : warn
            ? "border-secondary text-secondary animate-pulse-ring"
            : "border-border"
      }`}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l2 2M9 2h6" />
      </svg>
      {String(m).padStart(2, "0")}:{String(s).padStart(2, "0")}
    </div>
  );
}

function playBeep(pattern: "warn" | "end") {
  try {
    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AC();
    const notes =
      pattern === "warn"
        ? [{ f: 880, t: 0 }, { f: 880, t: 0.25 }, { f: 1175, t: 0.5 }]
        : [
            { f: 660, t: 0 },
            { f: 660, t: 0.2 },
            { f: 660, t: 0.4 },
            { f: 440, t: 0.7 },
            { f: 300, t: 1.05 },
          ];
    const now = ctx.currentTime;
    for (const n of notes) {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = "square";
      osc.frequency.value = n.f;
      osc.connect(g);
      g.connect(ctx.destination);
      const start = now + n.t;
      const dur = pattern === "end" && n.t >= 0.7 ? 0.35 : 0.18;
      g.gain.setValueAtTime(0.0001, start);
      g.gain.exponentialRampToValueAtTime(0.25, start + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
      osc.start(start);
      osc.stop(start + dur + 0.02);
    }
    setTimeout(() => {
      ctx.close().catch(() => {});
    }, 2500);
  } catch {
    // ignore audio failures
  }
}

function QuizView({
  name,
  answers,
  setAnswers,
  current,
  setCurrent,
  timeLeft,
  setTimeLeft,
  onFinish,
}: {
  name: string;
  answers: Record<number, number>;
  setAnswers: (fn: (a: Record<number, number>) => Record<number, number>) => void;
  current: number;
  setCurrent: (n: number) => void;
  timeLeft: number;
  setTimeLeft: (fn: (t: number) => number) => void;
  onFinish: () => void;
}) {
  const q: Question = questions[current];
  const total = questions.length;
  const progress = ((current + 1) / total) * 100;
  const finishedRef = useRef(false);
  const alertedRef = useRef<{ ten: boolean; end: boolean }>({ ten: false, end: false });
  const [alert, setAlert] = useState<null | { kind: "warn" | "end"; text: string }>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft((t) => {
        const next = t - 1;
        if (t <= 600 && t > 599 && !alertedRef.current.ten) {
          alertedRef.current.ten = true;
          playBeep("warn");
          setAlert({ kind: "warn", text: "10 minutes remaining" });
          setTimeout(() => setAlert(null), 5000);
        }
        if (t <= 1) {
          clearInterval(id);
          if (!alertedRef.current.end) {
            alertedRef.current.end = true;
            playBeep("end");
            setAlert({ kind: "end", text: "Time's up! Submitting your quiz…" });
          }
          if (!finishedRef.current) {
            finishedRef.current = true;
            setTimeout(() => onFinish(), 1200);
          }
          return 0;
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [onFinish, setTimeLeft]);


  const selected = answers[q.id];

  return (
    <div className="animate-slide-up">
      {alert && (
        <div
          role="alert"
          aria-live="assertive"
          className={`animate-scale-in pointer-events-none fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-full border px-5 py-2.5 font-display text-sm shadow-glow-sm backdrop-blur ${
            alert.kind === "end"
              ? "border-destructive bg-destructive/20 text-destructive animate-pulse-ring"
              : "border-secondary bg-secondary/15 text-secondary animate-pulse-ring"
          }`}
        >
          {alert.kind === "end" ? "⏰ " : "⚠ "}
          {alert.text}
        </div>
      )}
      {alert?.kind === "end" && (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-40 animate-flash-red"
        />
      )}

      <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
        <span>Hello, <span className="text-foreground">{name}</span></span>
        <span>
          Question <span className="font-display text-foreground">{current + 1}</span> / {total}
        </span>
      </div>
      <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-secondary transition-[width] duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div key={q.id} className="animate-scale-in glass neon-border rounded-2xl p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">
            {q.topic}
          </span>
          <span
            className={`rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-widest ${
              q.difficulty === "Easy"
                ? "bg-success/20 text-success"
                : q.difficulty === "Medium"
                  ? "bg-secondary/20 text-secondary"
                  : "bg-destructive/20 text-destructive"
            }`}
          >
            {q.difficulty}
          </span>
        </div>
        <h2 className="font-display text-xl font-semibold leading-snug sm:text-2xl">{q.question}</h2>

        <div className="mt-6 grid gap-3">
          {q.options.map((opt, i) => {
            const active = selected === i;
            return (
              <button
                key={i}
                onClick={() =>
                  setAnswers((a) => ({ ...a, [q.id]: i }))
                }
                className={`group flex items-start gap-3 rounded-xl border p-4 text-left transition ${
                  active
                    ? "border-primary bg-primary/10 shadow-glow-sm"
                    : "border-border bg-muted/20 hover:border-primary/60 hover:bg-primary/5"
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md font-display text-sm font-semibold transition ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1 text-sm leading-relaxed sm:text-base">{opt}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <button
          onClick={() => setCurrent(Math.max(0, current - 1))}
          disabled={current === 0}
          className="rounded-xl border border-border bg-muted/30 px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-muted disabled:opacity-40"
        >
          ← Previous
        </button>
        {current < total - 1 ? (
          <button
            onClick={() => setCurrent(current + 1)}
            className="rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Next →
          </button>
        ) : (
          <button
            onClick={onFinish}
            className="rounded-xl bg-gradient-to-r from-secondary to-success px-6 py-2.5 text-sm font-semibold text-secondary-foreground transition hover:brightness-110"
          >
            Submit Quiz ✓
          </button>
        )}
      </div>

      <QuestionGrid answers={answers} current={current} setCurrent={setCurrent} />
    </div>
  );
}

function QuestionGrid({
  answers,
  current,
  setCurrent,
}: {
  answers: Record<number, number>;
  current: number;
  setCurrent: (n: number) => void;
}) {
  return (
    <div className="mt-8 glass rounded-2xl p-4 sm:p-5">
      <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Jump to question</div>
      <div className="grid grid-cols-10 gap-1.5 sm:gap-2">
        {questions.map((q, i) => {
          const answered = answers[q.id] !== undefined;
          const isCurrent = i === current;
          return (
            <button
              key={q.id}
              onClick={() => setCurrent(i)}
              className={`aspect-square rounded-md text-[11px] font-semibold transition ${
                isCurrent
                  ? "bg-primary text-primary-foreground shadow-glow-sm"
                  : answered
                    ? "bg-secondary/30 text-secondary-foreground hover:bg-secondary/50"
                    : "bg-muted/40 text-muted-foreground hover:bg-muted"
              }`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ResultsView({
  name,
  answers,
  secondsUsed,
  onRetry,
  onLogout,
}: {
  name: string;
  answers: Record<number, number>;
  secondsUsed: number;
  onRetry: () => void;
  onLogout: () => void;
}) {
  const { score, total, byTopic } = useMemo(() => {
    let s = 0;
    const t: Record<string, { correct: number; total: number }> = {};
    for (const q of questions) {
      t[q.topic] ??= { correct: 0, total: 0 };
      t[q.topic].total++;
      if (answers[q.id] === q.answer) {
        s++;
        t[q.topic].correct++;
      }
    }
    return { score: s, total: questions.length, byTopic: t };
  }, [answers]);

  const pct = Math.round((score / total) * 100);
  const grade = pct >= 80 ? "Excellent" : pct >= 60 ? "Great" : pct >= 40 ? "Good" : "Keep Practicing";

  const [board, setBoard] = useState<LeaderboardEntry[]>([]);
  const [rank, setRank] = useState<number>(0);
  const [isNewBest, setIsNewBest] = useState(false);
  const [prior, setPrior] = useState<LeaderboardEntry | null>(null);
  const [dailyRank, setDailyRank] = useState<number>(0);
  const [dailyTotal, setDailyTotal] = useState<number>(0);
  const recordedRef = useRef(false);

  useEffect(() => {
    if (recordedRef.current) return;
    recordedRef.current = true;
    const result = recordScore({
      name,
      score,
      total,
      pct,
      secondsUsed: Math.max(0, Math.min(secondsUsed, 30 * 60)),
    });
    setBoard(result.board);
    setRank(result.rank);
    setIsNewBest(result.isNewBest);
    setPrior(result.prior ?? null);
    const daily = getDailyStanding(name);
    setDailyRank(daily.rank);
    setDailyTotal(daily.total);
  }, [name, score, total, pct, secondsUsed]);

  return (
    <div className="animate-slide-up space-y-6">
      <div className="glass neon-border rounded-2xl p-8 text-center">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">Well done, {name}</div>
        <div className="mt-3 font-display text-6xl font-bold sm:text-7xl">
          <span className="neon-text text-primary">{score}</span>
          <span className="text-muted-foreground">/{total}</span>
        </div>
        <div className="mt-2 font-display text-xl text-secondary">{grade} · {pct}%</div>

        <div className="mx-auto mt-6 h-2 max-w-md overflow-hidden rounded-full bg-muted">
          <div
            className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-1000"
            style={{ width: `${pct}%` }}
          />
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={onRetry}
            className="rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Retake Quiz
          </button>
          <button
            onClick={onLogout}
            className="rounded-xl border border-border bg-muted/30 px-6 py-2.5 text-sm font-medium text-foreground transition hover:bg-muted"
          >
            Sign Out
          </button>
        </div>
      </div>

      {rank > 0 && (
        <div
          className={`glass rounded-2xl p-6 ${
            isNewBest ? "neon-border animate-scale-in" : ""
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {isNewBest ? "New personal best!" : "Your best rank"}
              </div>
              <div className="mt-1 font-display text-3xl font-bold sm:text-4xl">
                <span className="neon-text text-secondary">#{rank}</span>
                <span className="ml-2 text-base text-muted-foreground">
                  of {board.length}
                </span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                Time used · {formatDuration(secondsUsed)}
              </div>
            </div>
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-full font-display text-2xl font-bold ${
                rank === 1
                  ? "bg-primary/20 text-primary shadow-glow-sm"
                  : rank <= 3
                    ? "bg-secondary/20 text-secondary"
                    : "bg-muted text-foreground"
              }`}
            >
              {rank === 1 ? "🏆" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : `#${rank}`}
            </div>
          </div>
        </div>
      )}

      {dailyRank === 1 && (
        <DailyGiftCard name={name} score={score} total={total} contenders={dailyTotal} />
      )}



      <VsBestCard
        currentScore={score}
        total={total}
        currentSeconds={secondsUsed}
        prior={prior}
      />

      <div className="glass rounded-2xl p-6">
        <h3 className="mb-4 font-display text-lg font-semibold">Score by topic</h3>
        <div className="grid gap-2 sm:grid-cols-2">
          {Object.entries(byTopic).map(([topic, v]) => {
            const p = Math.round((v.correct / v.total) * 100);
            return (
              <div key={topic} className="rounded-lg border border-border bg-muted/20 p-3">
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{topic}</span>
                  <span className="font-display text-foreground">
                    {v.correct}/{v.total}
                  </span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                    style={{ width: `${p}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <LeaderboardCard
        board={board}
        highlightName={name}
        title="Leaderboard"
        limit={10}
      />



      <div className="glass rounded-2xl p-6">
        <h3 className="mb-4 font-display text-lg font-semibold">Review answers</h3>
        <div className="space-y-3">
          {questions.map((q, i) => {
            const chosen = answers[q.id];
            const correct = chosen === q.answer;
            return (
              <details
                key={q.id}
                className="group rounded-lg border border-border bg-muted/20 p-3 open:bg-muted/30"
              >
                <summary className="flex cursor-pointer items-start gap-3 list-none">
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[11px] font-bold ${
                      chosen === undefined
                        ? "bg-muted text-muted-foreground"
                        : correct
                          ? "bg-success/20 text-success"
                          : "bg-destructive/20 text-destructive"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="flex-1 text-sm">{q.question}</span>
                  <span className="text-xs text-muted-foreground transition group-open:rotate-180">▾</span>
                </summary>
                <div className="mt-3 space-y-1 pl-9 text-sm">
                  <div className="text-muted-foreground">
                    Your answer:{" "}
                    <span className={correct ? "text-success" : "text-destructive"}>
                      {chosen === undefined ? "Not answered" : `${String.fromCharCode(65 + chosen)}) ${q.options[chosen]}`}
                    </span>
                  </div>
                  <div className="text-muted-foreground">
                    Correct:{" "}
                    <span className="text-success">
                      {String.fromCharCode(65 + q.answer)}) {q.options[q.answer]}
                    </span>
                  </div>
                  {q.explanation && (
                    <div className="mt-2 rounded-md border border-border bg-muted/30 p-2 text-xs text-muted-foreground">
                      {q.explanation}
                    </div>
                  )}
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function LeaderboardCard({
  board,
  highlightName,
  title = "Leaderboard",
  limit = 10,
  compact = false,
  emptyHint,
}: {
  board: LeaderboardEntry[];
  highlightName?: string;
  title?: string;
  limit?: number;
  compact?: boolean;
  emptyHint?: string;
}) {
  const rows = board.slice(0, limit);
  const key = highlightName?.trim().toLowerCase();
  if (rows.length === 0) {
    return (
      <div className="glass rounded-2xl p-6">
        <h3 className="mb-2 font-display text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">
          {emptyHint ?? "No scores yet — you could be the first."}
        </p>
      </div>
    );
  }
  return (
    <div className="glass rounded-2xl p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-lg font-semibold">{title}</h3>
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          Top {rows.length}
        </span>
      </div>
      <ol className="space-y-1.5">
        {rows.map((e, i) => {
          const rank = i + 1;
          const you = key && e.name.trim().toLowerCase() === key;
          const medal = rank === 1 ? "🏆" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : null;
          return (
            <li
              key={`${e.name}-${e.date}`}
              className={`flex items-center gap-3 rounded-lg border px-3 py-2 text-sm transition ${
                you
                  ? "border-primary bg-primary/10 shadow-glow-sm"
                  : "border-border bg-muted/20"
              }`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md font-display text-xs font-bold ${
                  rank === 1
                    ? "bg-primary/20 text-primary"
                    : rank <= 3
                      ? "bg-secondary/20 text-secondary"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {medal ?? rank}
              </span>
              <span className="flex-1 truncate font-medium text-foreground">
                {e.name}
                {you && (
                  <span className="ml-2 rounded-full bg-primary/20 px-1.5 py-0.5 text-[10px] uppercase tracking-widest text-primary">
                    You
                  </span>
                )}
              </span>
              {!compact && (
                <span className="hidden text-xs tabular-nums text-muted-foreground sm:inline">
                  {formatDuration(e.secondsUsed)}
                </span>
              )}
              <span className="font-display tabular-nums text-foreground">
                {e.score}
                <span className="text-muted-foreground">/{e.total}</span>
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function VsBestCard({
  currentScore,
  total,
  currentSeconds,
  prior,
}: {
  currentScore: number;
  total: number;
  currentSeconds: number;
  prior: LeaderboardEntry | null;
}) {
  const scoreDiff = prior ? currentScore - prior.score : 0;
  const timeDiff = prior ? currentSeconds - prior.secondsUsed : 0;

  const scoreBetter = scoreDiff > 0;
  const scoreEqual = scoreDiff === 0;
  const timeBetter = timeDiff < 0;
  const timeEqual = timeDiff === 0;

  let headline: string;
  if (!prior) {
    headline = "First attempt — this sets your benchmark!";
  } else if (scoreBetter || (scoreEqual && timeBetter)) {
    headline = "You beat your personal best! 🎉";
  } else if (scoreEqual && timeEqual) {
    headline = "You matched your personal best exactly.";
  } else {
    headline = "Just shy of your best — try again!";
  }

  return (
    <div className="glass rounded-2xl p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-lg font-semibold">vs your best</h3>
        <span className="text-xs text-muted-foreground">personal record</span>
      </div>
      <p className="mb-5 text-sm text-muted-foreground">{headline}</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-muted/20 p-4">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Score</div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-display text-3xl font-bold text-foreground">
              {currentScore}/{total}
            </span>
            {prior && (
              <span
                className={`text-sm font-medium ${
                  scoreBetter ? "text-success" : scoreEqual ? "text-muted-foreground" : "text-destructive"
                }`}
              >
                {scoreBetter ? "+" : ""}
                {scoreDiff} vs {prior.score}/{prior.total}
              </span>
            )}
          </div>
        </div>
        <div className="rounded-xl border border-border bg-muted/20 p-4">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Time</div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-display text-3xl font-bold text-foreground">
              {formatDuration(currentSeconds)}
            </span>
            {prior && (
              <span
                className={`text-sm font-medium ${
                  timeBetter ? "text-success" : timeEqual ? "text-muted-foreground" : "text-destructive"
                }`}
              >
                {timeBetter ? "-" : "+"}
                {formatDuration(Math.abs(timeDiff))} vs {formatDuration(prior.secondsUsed)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
