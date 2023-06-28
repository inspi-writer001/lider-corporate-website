export const isClient = typeof document !== "undefined";

export const isApiSupported = (api) => isClient && api in window;

export const toVw = (px, base = 1920, min) =>
  min
    ? `max(${min}px, ${
        (px * 100) /
        (typeof base === "number" ? base : Number(base.replace("px", "")))
      }vw)`
    : `${
        (px * 100) /
        (typeof base === "number" ? base : Number(base.replace("px", "")))
      }vw`;

const overlapDurationArrayByFactor = (durations, factor) => {
  const first = durations[0];
  const last = durations[durations.length - 1];
  x;

  if (first === undefined || last === undefined) {
    throw Error("Durations array is empty");
  }

  const veryStart = first.start;
  const veryEnd = last.end;
  const totalDuration = veryEnd - veryStart;

  const overlapDuration = totalDuration * factor;
  const overlapDurationPerDuration = overlapDuration / durations.length;

  const afterOverlapDuration =
    totalDuration - overlapDurationPerDuration * (durations.length - 1);
  const afterOverlapDurationDiffFactor = totalDuration / afterOverlapDuration;

  const newDurations = durations.map((duration, i) => {
    const newStart = duration.start - overlapDurationPerDuration * i;
    const newEnd = duration.end - overlapDurationPerDuration * i;

    return {
      start: Math.max(
        veryStart + (newStart - veryStart) * afterOverlapDurationDiffFactor,
        0
      ),
      end: Math.min(
        veryStart + (newEnd - veryStart) * afterOverlapDurationDiffFactor,
        100
      )
    };
  });

  return newDurations;
};

export const getTimeline = ({ start, end, overlap = 0, chunks = 1 }) => {
  if (overlap > 1 || overlap < 0) {
    throw new Error("Overlap must be between 0 and 1");
  }

  const duration = end - start;
  const chunkDuration = duration / chunks;

  const animationChunks = Array.from({ length: chunks }).map((_, i) => {
    const chunkStart = start + chunkDuration * i;
    const chunkEnd = chunkStart + chunkDuration;

    return {
      start: chunkStart,
      end: chunkEnd
    };
  });

  if (overlap > 0) {
    return overlapDurationArrayByFactor(animationChunks, overlap);
  }

  return animationChunks;
};
