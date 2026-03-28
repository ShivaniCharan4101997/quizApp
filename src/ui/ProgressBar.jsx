function ProgressBar({ current, total }) {
  const percentage = total === 0 ? 0 : (current / total) * 100;

  return (
    <div
      style={styles.container}
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax={total}
      aria-valuenow={current}
      aria-label="Quiz progress"
    >
      <div
        style={{
          ...styles.progress,
          width: `${percentage}%`,
        }}
      />
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    height: "10px",
    backgroundColor: "var(--tabBgColor)",
    borderRadius: "10px",
    overflow: "hidden",
    border: "1px solid rgba(98, 108, 128, 0.18)",
  },
  progress: {
    height: "100%",
    backgroundColor: "#a729f5",
    transition: "width 0.3s ease",
  },
};

export default ProgressBar;
