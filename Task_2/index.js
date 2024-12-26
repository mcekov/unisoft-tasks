const passes = [
  {
    result: 'incomplete',
    receiver: 'Demaryius Thomas',
    distance: 0.7,
  },
  {
    result: 'complete',
    receiver: 'Tim Patrick',
    distance: 0.9,
  },
  {
    result: 'complete',
    receiver: 'Demaryius Thomas',
    distance: 0.3,
  },
  {
    result: 'incomplete',
    receiver: 'Tim Patrick',
    distance: 0.9,
  },
  {
    result: 'incomplete',
    receiver: 'Tim Patrick',
    distance: 0.8,
  },
  {
    result: 'complete',
    receiver: 'Demaryius Thomas',
    distance: 0.1,
  },
  {
    result: 'interception',
    receiver: 'Demaryius Thomas',
    distance: 0.4,
  },
];

const calculateHighlights = (passes) => {
  // Aggregate stats per receiver
  const stats = passes.reduce((acc, pass) => {
    if (!acc[pass.receiver]) {
      acc[pass.receiver] = { completed: 0, total: 0, longest: 0 };
    }

    acc[pass.receiver].total += 1;

    if (pass.result === 'complete') {
      acc[pass.receiver].completed += 1;
    }

    acc[pass.receiver].longest = Math.max(acc[pass.receiver].longest, pass.distance);

    return acc;
  }, {});

  // console.log(stats);

  // Calculate the most complete percentage
  const mostCompletePercentage = Object.entries(stats).reduce(
    (best, [receiver, { completed, total }]) => {
      const percentage = (completed / total) * 100;
      return percentage > best.value
        ? { player: receiver, value: `${percentage.toFixed()}%` }
        : best;
    },
    { player: null, value: 0 },
  );

  // Find the longest pass
  const longDistancePass = passes.reduce(
    (bestAcc, pass) =>
      pass.distance > bestAcc.value
        ? { player: pass.receiver, value: pass.distance.toFixed(1) }
        : bestAcc,
    { player: null, value: 0 },
  );

  return { mostCompletePercentage, longDistancePass };
};

const result = calculateHighlights(passes);
console.log(result.longDistancePass);
console.log(result.mostCompletePercentage);
