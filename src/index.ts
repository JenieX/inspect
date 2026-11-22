const hasInspectOption =
  process.env.NODE_OPTIONS?.includes('--inspect') ?? false;

const hasInspectFlag = process.execArgv.some((flag) => {
  return flag.startsWith('--inspect');
});

if (hasInspectOption || hasInspectFlag) {
  // Keep the process alive for debugging.
  setTimeout(() => {}, 1000 * 60 * 30);
} else {
  global.console.debug = () => {};

  await import('@jeniex/paint-console');
}
