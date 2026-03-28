function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;

  return (
    <div style={styles.container}>
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
    backgroundColor: "#eee",
    borderRadius: "10px",
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    backgroundColor: "#4CAF50",
    transition: "width 0.3s ease",
  },
};

export default ProgressBar;
