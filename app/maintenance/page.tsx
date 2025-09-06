export default function MaintenancePage() {
  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: "1.6",
        margin: 0,
        padding: "1rem",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "3rem 2rem",
          maxWidth: "600px",
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderRadius: "20px",
          boxShadow:
            "0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          border: "3px solid #f39c12",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Warning stripe pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background:
              "repeating-linear-gradient(45deg, #f39c12 0px, #f39c12 20px, #e74c3c 20px, #e74c3c 40px)",
          }}
        />

        {/* Warning icon */}
        <div
          style={{
            fontSize: "4rem",
            marginBottom: "1rem",
            filter: "drop-shadow(0 4px 8px rgba(220, 53, 69, 0.3))",
          }}
        >
          🚫
        </div>

        <h1
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
            fontWeight: "800",
            marginBottom: "1.5rem",
            color: "#e74c3c",
            textShadow: "0 2px 4px rgba(231, 76, 60, 0.2)",
            letterSpacing: "-0.02em",
          }}
        >
          SITE PULLED DOWN
        </h1>

        <div
          style={{
            backgroundColor: "#f8d7da",
            border: "2px solid #dc3545",
            borderRadius: "12px",
            padding: "1.5rem",
            marginBottom: "2rem",
            boxShadow: "0 4px 12px rgba(220, 53, 69, 0.15)",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              marginBottom: "1rem",
              color: "#721c24",
              fontWeight: "700",
            }}
          >
            🚫 This Site Has Been Pulled Down
          </p>
          <p
            style={{
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
              color: "#721c24",
              margin: 0,
            }}
          >
            Please contact the administrator for more information.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#d1ecf1",
            border: "2px solid #17a2b8",
            borderRadius: "12px",
            padding: "1.5rem",
            boxShadow: "0 4px 12px rgba(23, 162, 184, 0.15)",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
              fontWeight: "700",
              color: "#0c5460",
              margin: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ fontSize: "1.2em" }}>📞</span>
            Contact: 0715 367 859
          </p>
        </div>

        {/* Status indicator */}
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.9rem",
            color: "#6c757d",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#f39c12",
            }}
          />
          System Status: Offline
        </div>
      </div>
    </div>
  );
}
