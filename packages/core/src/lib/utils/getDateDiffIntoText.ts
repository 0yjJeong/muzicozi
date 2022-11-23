export const getDateDiffIntoText = (from: Date) => {
  const d1 = new Date();
  const d2 = new Date(from);
  const diff = d1.getTime() - d2.getTime();

  if (diff < 1000 * 60) {
    return 'Now';
  } else if (diff < 1000 * 60 * 60) {
    return `${Math.floor(diff / (1000 * 60))} minutes ago`;
  } else if (diff < 1000 * 60 * 60 * 24) {
    return `${Math.floor(diff / (1000 * 60 * 60))} hours ago`;
  } else if (diff < 1000 * 60 * 60 * 24 * 7) {
    return `${Math.floor(diff / (1000 * 60 * 60 * 24))} days ago`;
  } else if (diff < 1000 * 60 * 60 * 24 * 7 * 4) {
    return `${Math.floor(diff / (1000 * 60 * 60 * 24 * 7))} weeks ago`;
  } else if (diff < 1000 * 60 * 60 * 24 * 365) {
    return `${Math.floor(diff / (1000 * 60 * 60 * 24 * 7 * 4))} months ago`;
  } else {
    return `${Math.floor(diff / (1000 * 60 * 60 * 24 * 365))} years ago`;
  }
};
