export default function Header({ view, setView }) {
  return (
    <header style={{ 
      textAlign: "center", 
      padding: "40px 20px 60px 20px",
      background: "linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)",
      color: "white",
      borderRadius: "0 0 20px 20px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
    }}>
      <h1 style={{ 
        margin: 0, 
        fontSize: "2.5rem", 
        letterSpacing: "2px",
        textShadow: "2px 2px 4px rgba(0,0,0,0.3)" 
      }}>
        🀄️ 初めての麻雀 役ナビ
      </h1>
      <p style={{ opacity: 0.9, marginTop: "10px", fontSize: "1rem" }}>
        クイズで楽しくマスター
      </p>

      {/* ボタンエリアをHeader内に配置 */}
      <div className="tab-container" style={{
        display: "flex",
        justifyContent: "center",
        gap: "0",
        marginTop: "30px",
        position: "absolute", // ヘッダーに対して配置
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10,
        width: "100%"
      }}>
        <button 
          onClick={() => setView("list")} 
          className={`tab-button ${view === "list" ? "active" : ""}`}
          style={{
            width: "140px",
            padding: "15px",
            borderRadius: "10px 0 0 10px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          役一覧
        </button>
        <button 
          onClick={() => setView("quiz")} 
          className={`tab-button ${view === "quiz" ? "active" : ""}`}
          style={{
            width: "140px",
            padding: "15px",
            borderRadius: "0 10px 10px 0",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          役クイズ
        </button>
      </div>
    </header>
  );
}