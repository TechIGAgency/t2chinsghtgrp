function injectDisclaimer(targetId) {
  const disclaimerHTML = `
    <style>
      .ms-trademark-disclaimer {
        font-size: 0.9rem;
        line-height: 1.6;
        color: #444;
        background-color: #f4f4f4;
        padding: 16px 24px;
        border-top: 1px solid #ccc;
        text-align: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        max-width: 960px;
        margin: 0 auto;
      }
      .ms-trademark-disclaimer .label {
        font-weight: 600;
        color: #c70606ff;
        margin-right: 4px;
      }
    </style>
    <div class="ms-trademark-disclaimer">
      <p>
        <span class="label">⚠️Disclaimer:</span>
        Microsoft, Azure, Copilot, Copilot Studio, Azure AI, Cosmos DB, Databricks, and Microsoft Fabric are trademarks of Microsoft Corporation.
        Tech-Insight-Group is not affiliated with or endorsed by Microsoft.
      </p>
    </div>
  `;
  const container = document.getElementById(targetId);
  if (container) {
    container.innerHTML = disclaimerHTML;
  } else {
    console.warn('Target container not found:', targetId);
  }
}


