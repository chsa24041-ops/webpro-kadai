import { useState, useEffect } from "react";
import { basicRules, yakuData, quizData } from "../data";

export default function Main({ view }) {
  // --- クイズ用状態管理 ---
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [highScore, setHighScore] = useState(localStorage.getItem("mahjong_score") || 0);

  const initQuiz = () => {
    const shuffled = [...quizData].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    setQuestions(selected);
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
    setIsAnswered(false);
    setSelectedOption(null);
    if (selected.length > 0) {
      setShuffledOptions([...selected[0].options].sort(() => 0.5 - Math.random()));
    }
  };

  useEffect(() => {
    if (view === "quiz") initQuiz();
  }, [view]);

  const handleAnswer = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
    if (option === questions[currentIndex].answer) setScore((s) => s + 1);
  };

  const nextQuestion = () => {
    const nextIdx = currentIndex + 1;
    if (nextIdx < 10) {
      setCurrentIndex(nextIdx);
      setIsAnswered(false);
      setSelectedOption(null);
      setShuffledOptions([...questions[nextIdx].options].sort(() => 0.5 - Math.random()));
    } else {
      setShowResult(true);
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem("mahjong_score", score);
      }
    }
  };

  // --- クイズ表示 ---
  if (view === "quiz") {
    if (questions.length === 0) return <main className="container"><p style={{ textAlign: "center", padding: "40px" }}>読み込み中...</p></main>;

    const current = questions[currentIndex];

    return (
      <main className="container" style={{ padding: "20px" }}>
        <h2 className="section-title">役判定クイズ (10問)</h2>
        <div className="rules-section" style={{ textAlign: "center" }}>
          {!showResult ? (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", fontSize: "0.9rem", color: "#666" }}>
                <span>第 {currentIndex + 1} / 10 問</span>
                <span>最高: {highScore}点</span>
              </div>
              <p style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "20px" }}>{current.question}</p>

              {/* 牌の表示 */}
              <div style={{ display: "flex", justifyContent: "center", gap: "2px", marginBottom: "25px", backgroundColor: "#2e7d32", padding: "15px 5px", borderRadius: "8px" }}>
                {current.tiles.map((tile, i) => {
                  let folder = tile.includes("p_ms") ? "manzu" : tile.includes("p_ps") ? "pinzu" : tile.includes("p_ss") ? "sozu" : "tupai";
                  return (
                    <img key={i} src={`/images/${folder}/${tile}`} alt="tile" style={{ width: "calc((100% - 10px) / 14)", maxWidth: "40px", height: "auto", marginLeft: i === 13 ? "6px" : "0" }} />
                  );
                })}
              </div>

              {/* 選択肢ボタン */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {shuffledOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    className="tab-button"
                    style={{
                      padding: "15px 5px", borderRadius: "8px", border: "2px solid #2e7d32",
                      backgroundColor: isAnswered ? (opt === current.answer ? "#c8e6c9" : opt === selectedOption ? "#ffcdd2" : "#fff") : "#fff",
                      opacity: isAnswered && opt !== current.answer && opt !== selectedOption ? 0.6 : 1
                    }}
                    disabled={isAnswered}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {isAnswered && (
                <div style={{ marginTop: "25px", padding: "15px", border: "2px solid #2e7d32", borderRadius: "10px", textAlign: "left" }}>
                  <h4 style={{ margin: "0 0 10px 0", color: selectedOption === current.answer ? "#2e7d32" : "#d32f2f" }}>
                    {selectedOption === current.answer ? "⭕ 正解！" : "❌ 不正解..."}
                  </h4>
                  <p style={{ fontSize: "0.95rem", margin: 0 }}><strong>正解：{current.answer}</strong><br />{current.hint}</p>
                  <button onClick={nextQuestion} className="tab-button active" style={{ width: "100%", marginTop: "15px", padding: "10px" }}>
                    {currentIndex === 9 ? "結果を見る" : "次の問題へ"}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div style={{ padding: "30px 0" }}>
              <h3 style={{ fontSize: "2rem", color: "#2e7d32" }}>結果発表</h3>
              <p style={{ fontSize: "1.5rem" }}>10問中 <strong>{score}</strong> 問正解！</p>
              <button onClick={initQuiz} className="tab-button active" style={{ padding: "15px 30px", marginTop: "20px" }}>もう一度挑戦</button>
            </div>
          )}
        </div>
      </main>
    );
  }

  // --- 通常画面（役一覧・基本） ---
  const categories = ["1翻役", "2翻役", "3翻役", "6翻役", "役満"];

  return (
    <main className="container" style={{ padding: "20px" }}>
      {/* はじめに */}
      {/* <section className="rules-section" style={{ border: "2px solid #2e7d32" }}>
        <h2 style={{ color: "#2e7d32", marginTop: 0 }}>はじめての方へ</h2>
        <p style={{ fontSize: "0.95rem" }}>画像を見ながら視覚的に役を覚え、クイズで実力を試してみましょう！</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "10px", marginTop: "15px" }}>
          {["① 一覧を見る", "② 基本を学ぶ", "③ クイズに挑戦"].map((step, i) => (
            <div key={i} style={{ backgroundColor: "#f1f8e9", padding: "10px", borderRadius: "8px", fontSize: "0.85rem" }}><strong>{step}</strong></div>
          ))}
        </div>
      </section> */}

      {/* 目次 */}
      <nav className="table-of-contents" style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "12px", marginBottom: "40px", borderLeft: "5px solid #2e7d32" }}>
        <h3 style={{ marginTop: 0 }}>目次</h3>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
          <li><a href="#basic-rules" style={{ color: "#2e7d32", textDecoration: "none" }}>・麻雀の基本ルール</a></li>
          <li><a href="#yaku-list" style={{ color: "#2e7d32", textDecoration: "none" }}>・役一覧</a></li>
          <li><a href="#scoring-rules" style={{ color: "#2e7d32", textDecoration: "none" }}>・点数早見表</a></li>
        </ul>
      </nav>

      <section id="basic-rules" className="rules-section">
        <h2 className="section-title">麻雀の基本ルール</h2>
        {basicRules.map((rule, i) => (
          <div key={i} className="rule-item">
            <h3>{rule.title}</h3>
            <p className="rule-content">{rule.content}</p>
          </div>
        ))}
      </section>

      <section id="yaku-list">
        <h2 className="section-title">役一覧</h2>
        <p className="yaku-description">
        麻雀の役は、成立させるのが難しいものほど「翻数（点数）」が高く設定されています。
        下にいくほど（最大は役満）難易度は上がりますが、その分高得点を狙うことができます。
        </p>
        {categories.map((cat) => (
          <div key={cat} style={{ marginBottom: "30px" }}>
            <h3 style={{ color: "#2e7d32", borderBottom: "2px solid #2e7d32", paddingBottom: "5px" }}>{cat}</h3>
            <div className="yaku-grid">
              {yakuData.filter(y => y.category === cat).map((yaku, i) => (
                <div key={i} className="yaku-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <div>
                      <h3 className="yaku-name" style={{ margin: 0 }}>{yaku.name}</h3>
                      <div className="yaku-kana" style={{ margin: 0 }}>{yaku.kana}</div>
                    </div>
                    
                    {/* 鳴きOK/NGアイコン */}
                    <span style={{
                      fontSize: "0.75rem",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontWeight: "bold",
                      backgroundColor: yaku.naki ? "#e53935" : "#1976d2",
                      color: "white",
                      whiteSpace: "nowrap",
                      marginLeft: "10px"
                    }}>
                      {yaku.naki ? "鳴きOK" : "門前限定"}
                    </span>
                  </div>

                  <p className="yaku-description">{yaku.description}</p>
                  
                  {/* 画像があるときだけグレーの背景を表示 */}
                  {yaku.tiles && yaku.tiles.length > 0 && (
                    <div className="yaku-tiles-container" style={{ 
                      display: "flex", 
                      gap: "1px", 
                      padding: "8px", 
                      backgroundColor: "#f0f0f0", 
                      borderRadius: "4px", 
                      marginTop: "10px", 
                      overflowX: "auto" 
                    }}>
                      {yaku.tiles.map((tile, j) => {
                        let folder = tile.includes("p_ms") ? "manzu" : tile.includes("p_ps") ? "pinzu" : tile.includes("p_ss") ? "sozu" : "tupai";
                        return <img key={j} src={`/images/${folder}/${tile}`} alt="tile" style={{ width: "calc(100% / 14)", maxWidth: "32px", minWidth: "18px" }} />;
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 点数セクション */}
      <section id="scoring-rules" className="rules-section">
        <h2 className="section-title">点数早見表</h2>
        
        <div style={{ marginBottom: "20px", padding: "15px", backgroundColor: "#e8f5e9", borderRadius: "8px", fontSize: "0.9rem" }}>
          <strong> 点数のもらいかた</strong><br />
          ・<strong>ロン：</strong> 捨てた人が全額支払う<br />
          ・<strong>ツモ：</strong> 全員で分けて支払う（親は多く払う）
        </div>

        <div className="scoring-tables">
          {/* 子の点数表 */}
          <div className="table-wrapper">
            <h3>あなたが「子」のとき</h3>
            <table className="score-table">
              <thead>
                <tr>
                  <th>翻数</th>
                  <th>ロン（一人から）</th>
                  <th>ツモ（全員で分担）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1翻 (30符)</td>
                  <td>1,000</td>
                  <td>子 300 / 親 500</td>
                </tr>
                <tr>
                  <td>2翻 (30符)</td>
                  <td>2,000</td>
                  <td>子 500 / 親 1,000</td>
                </tr>
                <tr>
                  <td>3翻 (30符)</td>
                  <td>3,900</td>
                  <td>子 1,000 / 親 2,000</td>
                </tr>
                <tr style={{ backgroundColor: "#fff9c4", fontWeight: "bold" }}>
                  <td>4翻 (満貫)</td>
                  <td>8,000</td>
                  <td>子 2,000 / 親 4,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 親の点数表 */}
          <div className="table-wrapper">
            <h3>あなたが「親」のとき</h3>
            <table className="score-table">
              <thead>
                <tr>
                  <th>翻数</th>
                  <th>ロン（一人から）</th>
                  <th>ツモ（全員で分担）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1翻 (30符)</td>
                  <td>1,500</td>
                  <td>全員から 500ずつ</td>
                </tr>
                <tr>
                  <td>2翻 (30符)</td>
                  <td>2,900</td>
                  <td>全員から 1,000ずつ</td>
                </tr>
                <tr>
                  <td>3翻 (30符)</td>
                  <td>5,800</td>
                  <td>全員から 2,000ずつ</td>
                </tr>
                <tr style={{ backgroundColor: "#fff9c4", fontWeight: "bold" }}>
                  <td>4翻 (満貫)</td>
                  <td>12,000</td>
                  <td>全員から 4,000ずつ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="high-scores" style={{ marginTop: "20px", padding: "15px", backgroundColor: "#fffde7", borderRadius: "8px" }}>
          <strong>💡 満貫（まんがん）より高い役</strong>
          <ul style={{ margin: "10px 0 0 0", paddingLeft: "20px", fontSize: "0.9rem", lineHeight: "1.6" }}>
            <li><strong>6〜7翻：跳満（ハネマン）</strong><br />子 12,000 (4,000/2,000) / 親 18,000 (6,000ALL)</li>
            <li><strong>8〜10翻：倍満（バイマン）</strong><br />子 16,000 (8,000/4,000) / 親 24,000 (8,000ALL)</li>
            <li><strong>13翻〜：役満（ヤクマン）</strong><br />子 32,000 (16,000/8,000) / 親 48,000 (16,000ALL)</li>
          </ul>
        </div>
      </section>
    </main>
  );
}