import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));

// Server-side Gemini initialization
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = new GoogleGenAI({
  apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// API: 24/7 Gyeongsan Kindergarten AI Parent Advisor
app.post('/api/gemini/advisor', async (req, res) => {
  try {
    const { messages, userQuestion } = req.body;

    const systemInstruction = `당신은 경상북도 경산시 사동에 위치한 명문 '공립 단설 경산유치원(Gyeongsan Public Kindergarten)'의 수석 입학 상담 전문 AI 상담사 '경산이음 멘토'입니다.
학부모님들의 질문에 정중하고 따뜻하며 신뢰감 넘치는 어조(존댓말)로 명쾌하게 답변해 주세요.

[공립 단설 경산유치원 공식 핵심 정보]
- 설립유형: 믿고 맡길 수 있는 '공립 단설 유치원'
- 대표 문의전화: ☎ 053-818-8551 (입학 및 교육상담 직통)
- 팩스: 053-818-8559
- 위치: 경상북도 경산시 사동 백양로 35 (사동초등학교 인근)
- 슬로건: "놀이로 배우고 세계로 자라는 아이들", "Small Steps, Big World!", "오늘의 놀이가 내일의 더 큰 세상을 만듭니다"
- 원훈: "건강하고 즐겁게 같이 놀자"
- 교육비 혜택: "학부모 부담금 0원 (전액 무료)"
  * 입학금, 수업료 전액 면제
  * 단독 조리 친환경 급식비, 우유 및 과일 간식비 전액 지원
  * 현장체험학습비, 특성화 프로그램비, 체험 차량비 전액 무상 지원
- 학급 및 원아 정원: 만 3세~5세 총 6학급, 정원 120명
  * 만 3세 (예쁜반 / 튼튼반): 각 16명 (총 32명)
  * 만 4세 (밝은반 / 고운반): 각 20명 (총 40명)
  * 만 5세 (정다운반 / 즐거운반): 각 24명 (총 48명)
- 교직원 현황 (총 30명):
  * 교무실: 원장 1, 원감 1, 국가 임용고시 합격 정규 담임교사 12, 한국어학급교사 2(1), 돌봄전담교사 1, 간호사 경력 정규 보건교사 1, 교무실무사 1
  * 행정실: 행정 2, 통학버스 운전장 1, 통학버스 안전동승자 1, 환경관리 1, 문단속 1
  * 급식실: 영양사 1, 조리사 1, 조리원 2 (단독 직영 조리)
- 층별 시설:
  * 1층: 예쁜반(3세), 튼튼반(3세), 돌봄교실, 단독직영 급식실, 로비, 화장실
  * 2층: 밝은반(4세), 고운반(4세), 정다운반(5세), 즐거운반(5세), 도서실, 자료실, 행정실
  * 3층 및 실외: 미래교실(로봇·크로마키), 한국어학급, 대강당, 보건실, 옥상놀이터, 모래놀이터, 실외놀이터
- 하루 일과:
  * 08:00 ~ 08:30: 아침돌봄
  * 08:30 ~ 13:00: 교육과정 정규수업 (자유놀이, 오전 우유간식, 대소집단 활동, 바깥놀이, 텃밭 / ※ 매일 하이클래스 앱으로 수업이야기 공유)
  * 13:00 ~ 16:30: 방과후과정 (누리과정 심화, 한글/수놀이 문해력·수해력, 오후 영양간식, 연령별 특성화)
  * 16:30 ~ 19:00: 저녁돌봄 (연령 혼합 놀이, 돌봄간식)
  * ※ 안심 돌봄은 방학(여름/겨울/봄) 및 재량휴업일 포함 연중 상시 운영 (보호자 직접 대면 등하원 원칙)
- 방과후 특성화 프로그램:
  * 언어: 유아영어 (주 2회, 30분 / 전 연령)
  * 체육: 유아체육(3세), 태권도(4세), 배드민턴(5세) (주 1회, 30분)
  * 음악: 뮤직클랑(3세), 국악장구(4세), 드럼(5세) (주 1회, 30분)
  * 댄스: 발레(3세), 케이팝 방송댄스(4·5세)
  * 말놀이/역사: 생각대통령(3세), 키즈토리 역사이야기(4·5세)
  * 창의·코딩·과학: 착착블럭(4세), 킹콩블럭(5세), 코딩로봇(5세), 예스사이언스 과학(전 연령)
- 통학버스 (총 2대, 안전 동승보호자 필수 탑승):
  * 1호차 (대형 67인승):
    - 1코스(08:00): 계양주공 화성파크드림, 사동 팰리스부영 2단지, 사동 부영 6차 서문, 부영 1차, 휴먼시아 1단지, 부영 6차 동문, 부영 2차 등
    - 2코스(08:43): E-편한세상, 협성휴포레 대평, 대평그린빌, 정평동 대구은행, 임당호반베르디움 등
  * 2호차 (중형 25인승):
    - 1코스(08:00): 신대팰리스 1차, 압량코아루, 압량아이파크, 영남대역 코아루 더 테라스 등
    - 2코스(08:30): 중산자이 1단지, 펜타힐즈 더샵 1차, 옥곡태왕, 백천동 월드메르디앙, 상방동 주공, 삼남동 동남, 삼북주공 등
    - 3코스(09:10): 정평 하늘채, 중산 하늘채, 옥산동 세아사우나 앞, 경산중방 서희스타힐스 등
- 보건·안전 관리:
  * 간호사 경력의 정규 보건교사 상주 및 '건강유치원 만들기' 보건 교육
  * 감염병 예방 관리, 상시 응급처치 및 연 2회 체격검사, 월 1회 보건소식지 발송
- 특색 교육:
  * 영남대 숲 및 사과공원 연계 전문 숲놀이 강사 숲체험, 원내 친환경 텃밭
  * 사동초등학교와의 유·초 이음교육 및 세계시민의식을 기르는 다문화 한국어학급
  * 2026 교육환경 개선사업 선정 완료

학부모님의 질문에 친절하고 상세하게 안내하시고, 추가 문의는 유치원 교무실(053-818-8551)로 연락해 주시거나 홈페이지 원서/투어 신청을 이용하시도록 자연스럽게 권유하세요.`;

    let promptText = userQuestion;
    if (messages && Array.isArray(messages) && messages.length > 0) {
      const historySummary = messages
        .slice(-6)
        .map((m: { role: string; content: string }) => `${m.role === 'user' ? '학부모' : '상담사'}: ${m.content}`)
        .join('\n');
      promptText = `${historySummary}\n학부모: ${userQuestion}\n상담사:`;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: promptText,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || '상담 안내를 생성하는 중 오류가 발생했습니다. 교무실(053-818-8551)로 직접 문의해 주시면 친절히 안내해 드리겠습니다.';
    res.json({ reply });
  } catch (error: any) {
    console.error('Gemini advisor error:', error);
    res.status(500).json({
      error: 'AI 상담 서비스 연결에 일시적인 지연이 발생했습니다.',
      details: error.message,
    });
  }
});

// API: AI Announcement & Newsletter Generator for Teachers/Admin
app.post('/api/gemini/announcement-helper', async (req, res) => {
  try {
    const { category, title, audience, keyPoints, tone } = req.body;

    const systemInstruction = `당신은 경산유치원의 원장님 및 교사진을 돕는 교육 행정 전문 AI 작성 도우미입니다.
학부모님들이 읽기 편하고 신뢰감을 주는 유치원 공식 가정통신문, 공지사항, 또는 주간 알림장 초안을 작성합니다.
문체: 정중하고 다정다감한 유치원 공문 양식 (예: "안녕하십니까, 사랑 가득한 경산유치원입니다.")
반드시 포함할 구조:
1. 따뜻한 계절 인사 및 인사말
2. 주요 활동 및 행사 세부 안내 (일시, 장소, 준비물, 협조사항)
3. 안전 수칙 및 유의사항
4. 맺음말과 담당 문의처 안내`;

    const prompt = `[작성 요청 정보]
- 분류: ${category || '가정통신문'}
- 제목/주제: ${title}
- 대상: ${audience || '전체 원아 학부모님'}
- 주요 핵심 내용 및 일정: ${keyPoints}
- 희망 분위기: ${tone || '따뜻하고 신뢰감 있는'}

위 내용을 바탕으로 경산유치원 공식 가정통신문 초안을 완결된 본문으로 작성해 주세요.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.6,
      },
    });

    res.json({ content: response.text });
  } catch (error: any) {
    console.error('Announcement helper error:', error);
    res.status(500).json({ error: error.message });
  }
});

// API: AI SEO Optimizer for Gyeongsan Kindergarten
app.post('/api/gemini/seo-optimize', async (req, res) => {
  try {
    const { currentTitle, currentDesc, focusKeyword } = req.body;

    const prompt = `경산유치원의 네이버 및 구글 검색엔진 최적화(SEO)를 위한 메타 데이터를 제안해 주세요.
지역 타겟: 경상북도 경산시, 대구 수성구/시지 인근
타겟 고객: 3~7세 자녀를 둔 학부모 (유치원 입학, 숲유치원, 몬테소리, 영어유치원 대안)
현재 제목: "${currentTitle || '경산유치원'}"
현재 설명: "${currentDesc || ''}"
강조 키워드: "${focusKeyword || '경산유치원, 경산 숲체험, 유기농 급식, 입학상담'}"

JSON 형식으로만 답해주세요:
{
  "optimizedTitle": "검색 결과 35자 내외의 매력적인 타이틀",
  "optimizedDescription": "검색 결과 80~120자 내외의 클릭률 높은 메타 설명문",
  "keywords": ["키워드1", "키워드2", "키워드3", "키워드4", "키워드5"],
  "snsShareHook": "카카오톡/인스타그램 공유 시 눈길을 끄는 한 줄 카피"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    let result = {};
    try {
      result = JSON.parse(response.text || '{}');
    } catch {
      result = { raw: response.text };
    }
    res.json(result);
  } catch (error: any) {
    console.error('SEO optimize error:', error);
    res.status(500).json({ error: error.message });
  }
});

// API: AI Weekly Menu / Activity Idea Spark
app.post('/api/gemini/activity-idea', async (req, res) => {
  try {
    const { season, ageGroup, theme } = req.body;

    const prompt = `경산유치원의 누리과정 및 숲체험 특성화 교육을 위한 활동 기획안 초안을 작성해주세요.
- 계절: ${season || '봄/가을'}
- 연령대: ${ageGroup || '만 4~5세'}
- 교육 테마: ${theme || '자연 생태와 계절 변화 탐구'}

간결하고 실천 가능한 3가지 활동 아이디어와 그에 어울리는 제철 친환경 간식/급식 추천을 포함해 주세요.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    res.json({ idea: response.text });
  } catch (error: any) {
    console.error('Activity idea error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Setup Vite or Static Server
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`경산유치원 Server running on http://localhost:${PORT}`);
  });
}

startServer();
