export default [
  {
    title: "你會投籃嗎？",
    author: "A1u",
    authorDescription: "目前就讀成功高中二年級。",
    description:
      "由於我投不到三分球，我開始錄影看自己的動作有什麼問題，可是看了看還是沒有想法，所以決定來用mediapipe偵測自己的投籃，把畫面上的投籃「量化」成關節角度變成圖表，使分析變的簡單。接著再用tensorflow實現二元分類，辨識one motion(發力連貫、投的遠) 及 two motion(先跳再投、出手點高)。我瞭解到自己投籃必須傾向one motion，最後讓我能成功輕鬆的投三分球！",
    image: "1.jpg",
  },
  {
    title:
      "Prediction of Molecular Structure Language and Melting/Boiling Point Properties",
    author: "Wu, Tai-Cheng",
    authorDescription:
      "Wu, Tai-Cheng is a student in The affiliated senior high school of National Taiwan Normal University. TC is specialized in computer science and have publish some research related to this in science fair. Moreover, TC is the 30th club leader of Campus Network Management Club. ",
    description: `Background:
Predicting molecular properties such as solubility, toxicity, melting, and boiling points is crucial for fundamental science research. However, experimental measurements are often time-consuming and cost-intensive, so we use machine learning (ML) as an approach to improve prediction accuracy.

Methods:
A dataset containing over 10k compounds was used for training shallow and deep ML models. Shallow machine learning models were implemented via PyCaret and Mordred as feature extraction. For deep machine learning models, graph neural networks (GNNs), specifically CMPNN(Communicative Message Passing Neural Network) and GCN(Graph Convolutional Network), were trained, and tuned by adjusting the number of hidden layers and sizes (neurons) in each layer.

Results:
The CMPNN model outperforms the GCN and shallow ML model for boiling point prediction(best: R² = 0.76, MAE = 23.89K for b.p.; best: R² = 0.87; MAE = 23.73K for m.p.). The top molecular descriptor of the b.p. prediction is piPC1, which is related to bond order, and that of m.p. is AATS0d, which is related to σ electron Moreau-Broto autocorrelation. 

Conclusions:
The prediction of molecular properties was improved by a comprehensive research of shallow and deep learning approaches, showcasing CMPNN model can reach the highest performance in the prediction of m.p. and b.p.(R² = 0.87 in m.p.; R² = 0.76 in b.p.). In this study, we found that the deep learning model works better than shallow ML in predicting m.p.(p<0.05). This study uses SHAP analysis to successfully identify piPC1 and AATS0d as the key prediction factors of b.p. and m.p. respectively. Moreover, this approach can be applied to predict other molecular properties. To conclude, this study not only shows a highly accurate model but also identifies the key factors of m.p. and b.p.`,
    image: "2.jpg",
  },
  {
    title:
      "創新醫療資訊展示系統：完美結合Raspberry Pi 4、電子紙及無線動態更新技術於一體",
    author: "Amy",
    authorDescription: `目前就讀資工系大四，專長是嵌入式系統和人工智慧，未來想往數位IC設計發展，目前正朝著這個目標努力前進。`,
    description:
      "隨著智慧醫療的發展，設計高效、低功耗且易管理的資訊展示系統成為醫院管理的重要挑戰。本研究提出一套結合Raspberry Pi 4、電子紙顯示技術與無線動態更新技術的創新醫療資訊展示系統，實現智慧化管理的同時，具備顯著的醫療應用價值。系統架構包含電子紙顯示器、Raspberry Pi 4以及基於網頁的管理平台，醫護人員可以透過網頁更新床頭卡與手術狀態，後端使用Python與Flask框架，顯示內容以Pillow函式庫生成與渲染，確保穩定性與可靠性。測試結果顯示，該系統能準確更新與展示醫療資訊，並有效減少紙張與能源消耗，符合ESG永續發展目標，特別是電子紙的低功耗特性，不僅實現醫療資訊管理智慧化，更降低對環境的影響，展現強大的應用潛力。此系統在病房資訊管理等場景中的穩定性與可靠性，為智慧醫療產業的推動提供了創新解決方案，並為未來醫療資訊系統的設計與發展開創了新方向。",
    image: "3.jpg",
  },
  {
    title: "Hinagiku: AI-Powered Collaborative Learning",
    author: "Hinagiku Dev",
    authorDescription: `Wu, Tai-Cheng is a student in The affiliated senior high school of National Taiwan Normal University. TC is specialized in computer science and have publish some research related to this in science fair. Moreover, TC is the 30th club leader of Campus Network Management Club. `,
    description: `Hinagiku is an open-sourced intelligent system designed to support discussions in educational environments. We enhanced the traditional think-pair-share learning methodology with novel technologies like ASR and LLM to parallelize the discussions and improve the transparency of discussion groups from the host's side. book: https://hackmd.io/@hinagiku/wiki/%2Fsbkix5B9RFaVM3OzQsN3EQ`,
    image: "5.jpg",
  },
  {
    title: "打造專有領域的 RAG 系統 ─ 以玉山金融挑戰賽為例",
    author: "鱸魚",
    authorDescription: `我是鱸魚，一位擅長自然語言處理和數據科學的高中生，主要的研究領域是 LLM 和 Agent。我曾在發表過三篇 NLP 領域的論文，並在教育部的 AICUP 競賽上獲得第二、第三名的成績，在ML 領域累積了相當多的能力和經驗。目前已透過特殊選材，錄取了陽明交大的百川學士學位學程，即將修讀人工智慧─生醫核心。`,
    description: `"儘管大型語言模型(LLM)在通用任務上表現優異，但在處理專業領域和私有數據的問答場景時，LLM 需要仰賴外部數據作為生成回答的基礎。為了讓 LLM 能有效運用外部數據進行回答，檢索增強生成(Retrieval-Augmented Generation, RAG)技術應運而生。

本次議程將以講者在玉山銀行與教育部合辦的「AI CUP 2024 玉山人工智慧公開挑戰賽－RAG與LLM在金融問答的應用」中獲得第三名的參賽經驗為基礎，深入分享如何建構精準的金融領域 RAG 系統。內容涵蓋從文檔前處理、Chunking 策略優化、Text Embdeding 與 Reranking，以及 Prompt Engineering 等關鍵環節的實作細節，並剖析各個步驟對回答精準度的影響。與會者除了能掌握 RAG 的基本原理外，更能汲取實務經驗與技巧，為建置專屬又精確的中文 RAG 系統奠定基礎。"`,
    image: "4.jpg",
  },
];
