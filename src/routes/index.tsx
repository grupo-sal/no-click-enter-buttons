import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GRUPO SAL - Personal Training + Pilates" },
      {
        name: "description",
        content:
          "Um espaço, duas formas de movimento: Personal Training e Pilates, Yoga e Aulas de Grupo.",
      },
      { property: "og:title", content: "GRUPO SAL - Personal Training + Pilates" },
      {
        property: "og:description",
        content:
          "Um espaço, duas formas de movimento: Personal Training e Pilates, Yoga e Aulas de Grupo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const css = `
.gs-page * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.gs-page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #0a0a0a;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.gs-page .container { max-width: 1200px; width: 100%; }
.gs-page .header { text-align: center; margin-bottom: 60px; }
.gs-page .logo {
  font-size: 48px;
  font-weight: 300;
  letter-spacing: 8px;
  color: #c9a961;
  margin-bottom: 25px;
  text-transform: uppercase;
}
.gs-page .divider { width: 1px; height: 40px; background-color: #c9a961; margin: 0 auto 30px; }
.gs-page .subtitle {
  font-size: 20px;
  letter-spacing: 3px;
  color: #c9a961;
  text-transform: uppercase;
  margin-bottom: 15px;
  font-weight: 300;
}
.gs-page .description { font-size: 16px; color: #888888; letter-spacing: 1px; font-weight: 300; }
.gs-page .cards-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 60px;
}
.gs-page .card {
  border: 1.5px solid #444444;
  padding: 50px 35px;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 350px;
}
.gs-page .card:hover { transform: translateY(-5px); border-color: #c9a961; }
.gs-page .card.pilates { border-color: #2d5a4a; }
.gs-page .card.pilates:hover { border-color: #4a9975; background-color: rgba(45, 90, 74, 0.05); }
.gs-page .card-code {
  font-size: 40px;
  letter-spacing: 8px;
  color: #c9a961;
  margin-bottom: 20px;
  font-weight: 300;
}
.gs-page .card.pilates .card-code { color: #4a9975; }
.gs-page .card-title {
  font-size: 18px;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: 400;
  color: #ffffff;
}
.gs-page .card-underline { width: 30px; height: 1px; background-color: #c9a961; margin: 0 auto 20px; }
.gs-page .card.pilates .card-underline { background-color: #4a9975; }
.gs-page .card-description {
  font-size: 13px;
  color: #888888;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 40px;
  line-height: 1.8;
  font-weight: 300;
}
.gs-page .card-link {
  font-size: 13px;
  letter-spacing: 3px;
  color: #c9a961;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.3s ease;
  font-weight: 400;
}
.gs-page .card.pilates .card-link { color: #4a9975; }
.gs-page .card-link:hover { gap: 18px; }
.gs-page .arrow { font-size: 16px; }
.gs-page .footer { text-align: center; padding-top: 40px; border-top: 1px solid #333333; }
.gs-page .footer-title {
  font-size: 13px;
  letter-spacing: 2px;
  color: #888888;
  text-transform: uppercase;
  margin-bottom: 8px;
  font-weight: 300;
}
.gs-page .footer-subtitle {
  font-size: 12px;
  letter-spacing: 1px;
  color: #666666;
  text-transform: uppercase;
  font-weight: 300;
}
@media (max-width: 768px) {
  .gs-page .cards-container { grid-template-columns: 1fr; gap: 30px; }
  .gs-page .logo { font-size: 36px; letter-spacing: 6px; }
  .gs-page .subtitle { font-size: 16px; letter-spacing: 2px; }
  .gs-page .description { font-size: 14px; }
  .gs-page .card { padding: 40px 25px; min-height: 300px; }
  .gs-page .card-code { font-size: 32px; letter-spacing: 6px; }
  .gs-page .header { margin-bottom: 40px; }
}
@media (max-width: 480px) {
  .gs-page .logo { font-size: 28px; letter-spacing: 4px; }
  .gs-page .subtitle { font-size: 14px; }
  .gs-page .card { padding: 30px 20px; min-height: 280px; }
  .gs-page .card-code { font-size: 28px; }
  .gs-page .card-title { font-size: 16px; }
  .gs-page .card-description { font-size: 12px; }
}
`;

function Index() {
  return (
    <div className="gs-page" lang="pt">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="container">
        <div className="header">
          <h1 className="logo">GRUPO SAL</h1>
          <div className="divider"></div>
          <div className="subtitle">UM ESPAÇO. DUAS FORMAS DE MOVIMENTO.</div>
          <div className="description">Escolhe como queres treinar.</div>
        </div>

        <div className="cards-container">
          <div className="card">
            <div className="card-code">PT</div>
            <div className="card-title">Personal Training</div>
            <div className="card-underline"></div>
            <div className="card-description">Foco. Força. Resultados.</div>
            <a href="https://personaltraining.gruposal.pt" className="card-link">
              Entrar <span className="arrow">→</span>
            </a>
          </div>

          <div className="card pilates">
            <div className="card-code">PL</div>
            <div className="card-title">Pilates, Yoga e Aulas de Grupo</div>
            <div className="card-underline"></div>
            <div className="card-description">Controlo. Equilíbrio. Bem-estar.</div>
            <a href="https://mindfulstudio.gruposal.pt" className="card-link">
              Entrar <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div className="footer">
          <div className="footer-title">GRUPO SAL</div>
          <div className="footer-subtitle">Personal Training + Pilates + Aulas de Grupos</div>
        </div>
      </div>
    </div>
  );
}
